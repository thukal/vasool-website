---
title: "Multi-Tenant Feature Flags: One That Leaked"
description: Our per-tenant database isolation held. The leak was in a config merge, where an absent flag key quietly inherited the previous company's value.
date: 2026-10-18
author: Vasool Engineering
tags: [Engineering, Multi-Tenancy]
keywords: multi-tenant feature flags, feature flag leak, multi tenant saas isolation, per tenant configuration, feature flag defaults, loan software multi tenancy
---

An owner who runs two finance companies switched from one to the other in the app, and the second company came up wearing the first one's interface — a chat-style shell we had enabled for exactly three tenants, showing in a company that had never asked for it.

Nothing had gone wrong with the data. It went wrong somewhere much less interesting, which is usually where these things live.

## Where it wasn't

The obvious suspect in a multi-tenant system is the data layer, and that is the part we had already been careful about. Every tenant gets [its own database](/blog/multi-tenant-architecture-one-database-per-tenant) — not a shared table with a `tenant_id` column and a hope that every query remembers the `WHERE`. No borrower, loan or payment crossed between companies, and structurally none could have.

That isolation was never in question here. What leaked was **configuration**, and configuration was living somewhere the isolation did not reach.

## Where it was

When the app loads a company it fetches that tenant's config and applies it. The feature-flag part was a loop over a map from API keys to internal ones:

```ts
for (const [apiKey, configKey] of Object.entries(featureMap)) {
    const value = config.features[apiKey];
    if (typeof value === 'boolean') {
        APP_CONFIG.FEATURES[configKey] = value;
    }
}
```

That `typeof value === 'boolean'` guard looks like defensive programming, and in isolation it is. It says: only overwrite a flag when the server actually sent a boolean for it, rather than clobbering a default with `undefined`.

Read it again with two tenants in mind. `APP_CONFIG` is a module-level object that lives for the life of the process, not for the life of a session. When a key is **absent** from the second tenant's config, `value` is `undefined`, the branch is skipped, and the flag keeps whatever the *previous* tenant set it to.

The merge semantics were "absent means leave it alone". What the situation needed was "absent means back to the default".

> A guard against overwriting a default with `undefined` becomes, on the second tenant, a guard against ever clearing the first tenant's value.

## Why this flag and not the others

Two things made this one bite when the same pattern had sat there harmlessly for a long time.

**Absent was the normal case.** Only three of roughly a hundred tenant configurations carried the key at all. For nearly every company, the flag was not "set to false" — it simply was not mentioned, which is exactly the path that inherits.

**The flag was not cosmetic.** Most flags turn a product on or hide a tile. This one swapped the entire navigation shell. A stale `gold_loan: true` shows a menu item nobody taps. A stale chat shell means the owner opens a different application than the one they expect.

Severity here was a function of *what the flag controlled*, not of how wrong the merge was. The merge was equally wrong for all of them.

## The fix

A named list of flags that are reset before each apply, so they can only ever be on for a tenant that explicitly says so:

```ts
const STRICT_PER_TENANT_FLAGS = ['CHAT_UX'];

for (const strictKey of STRICT_PER_TENANT_FLAGS) {
    APP_CONFIG.FEATURES[strictKey] = false;
}
// ...then apply the tenant's config as before
```

Four lines. The interesting part is what we did not do.

## Why we did not fix it everywhere

The same inheritance applies to every other flag on a workspace switch. It would have been one more line to reset all of them, and it is tempting to call that the real fix.

We left it alone deliberately, and said so in the commit:

> The same inheritance applies to EVERY other flag on a workspace switch — a pre-existing issue, not introduced here, and deliberately left alone rather than silently changing the semantics of ~100 flags in a bugfix.

Flipping the default for a hundred flags is not a bug fix; it is a behavioural migration that happens to be short. Some tenants have been running for a long time with configs that omit keys, and "absent" has meant "whatever the app's built-in default is" in some places and "whatever was loaded last" in others. Changing all of that at once, inside a patch released to fix a crash, means a hundred companies find out together whether anything depended on the old behaviour.

The narrow fix is reviewable: one flag, one list, obvious blast radius, trivially reversible. The broad fix deserves its own change, its own test pass, and its own release note. Shipping it disguised as a bugfix would have been faster and considerably worse.

## The general shape

This is not really a feature-flag bug. It is what happens when **long-lived in-process state** meets a **switchable context**, and the merge step was written while only one context existed.

Three questions worth asking of any config merge:

1. Does an absent key mean *unchanged* or *default*? Both are defensible; pick one on purpose and write down which.
2. How long does the merged object live — a request, a session, or the process? Anything longer than the context it describes is a place for values to survive a switch.
3. Which keys, if stale, change something a user would notice immediately? Those are the ones that need the strict treatment first, regardless of how uniform you would like the rules to be.

The data isolation that gets designed carefully on day one tends to hold. The leaks come from the quieter layer next to it — the settings, the cached config, the singleton that was correct right up until a customer had two companies.

---

If you run more than one finance company and want to see how the separation actually works, [talk to us](/pricing) — or read how the [per-tenant database](/blog/multi-tenant-architecture-one-database-per-tenant) model fits together first.
