import { Link } from "react-router-dom";
import {
  Store,
  Route,
  CalendarCheck,
  MapPin,
  Users,
  FileText,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
} from "@/components/KeywordLanding";

const config: KeywordLandingConfig = {
  seo: {
    title: "Shop Visit Tracking & Route Management App | Vasool",
    description:
      "Scheduled pickup rounds on Vasool: a verified shop list, routes built on your once-in-N-days cadence, a daily assignment board, and a visit that counts even at zero.",
    keywords:
      "shop visit tracking app, route management software, field visit tracking app, pickup route planning software, collection route app india, scheduled visit management, field team route assignment, shop route planner",
    canonical: "/shop-visit-tracking-app",
  },
  breadcrumbName: "Shop Visit Tracking",
  badge: "Shop Visit & Route Management",
  h1: (
    <>
      Shop visit tracking for{" "}
      <span className="text-gradient">scheduled pickup rounds</span>
    </>
  ),
  intro:
    "Some field work is not collecting money — it is turning up. A contract to visit a fixed list of shops once every few days is a promise about frequency, and the only way to keep it is to know which shops are due today, who is running that route, and what actually happened at each stop.",
  features: [
    {
      icon: Store,
      title: "One shop list, properly pinned",
      desc: "Shop number, address, map link and coordinates. Imported in bulk and geocoded on the way in, so the round starts from real pins rather than addresses someone has to interpret.",
    },
    {
      icon: Route,
      title: "Routes built on your cadence",
      desc: "A route is a cadence and a cluster together — once in 2, 3, 4, 5 or 7 days — so the route structure matches the frequency your contract actually promises.",
    },
    {
      icon: CalendarCheck,
      title: "Which shops are due today",
      desc: "Each cycle day knows which routes are active and which shops fall on them, so nobody works out today's list from a frequency column by hand.",
    },
    {
      icon: Users,
      title: "A daily assignment board",
      desc: "Pick who runs each route each day. One person can hold several routes and visit them in sequence; left unassigned is a rest day — and that history is your attendance record.",
    },
    {
      icon: MapPin,
      title: "Pins that get re-verified",
      desc: "When a location is recaptured on site the app records when, so a shop reads 'verified recently' instead of still trusting the pin that came in on a spreadsheet.",
    },
    {
      icon: FileText,
      title: "A printable route booklet",
      desc: "The whole route as a PDF to carry in the vehicle, for the stretches where looking at a phone is not practical.",
    },
  ],
  featuresHeading: "Built around turning up on time",
  featuresSub:
    "The unit of this work is the visit, not the amount — so the visit is what the software records.",
  steps: [
    {
      title: "Bring the shop list in",
      desc: "Import the list in bulk. Addresses are geocoded as they load, and anything that cannot be placed is yours to fix rather than silently dropped.",
    },
    {
      title: "Group into routes",
      desc: "Shops fall into a route by their own frequency and cluster, each with a short route code the team can read off a chip.",
    },
    {
      title: "Assign the day",
      desc: "Choose which staff runs which route today. Reassign freely — the board is per day, not a permanent posting.",
    },
    {
      title: "Record the visit",
      desc: "Log the stop and the count collected, with a note where it matters.",
    },
  ],
  stepsHeading: "How a round runs",
  prose: [
    {
      heading: "A cadence is the contract, so it is also the route",
      paragraphs: [
        "Scheduled pickup work is usually sold as a frequency: every shop on this list, once in so many days. That number is not a scheduling preference — it is the thing you are being paid to honour, and the thing you will be measured against.",
        "So the route is keyed on it. Routes are a cadence and a cluster together, which means a three-day route contains exactly the shops that are due every three days in that area. Grouping purely by geography reads well on a map and then quietly mixes a two-day shop in with a weekly one, which is how a frequency promise slips without anyone noticing.",
      ],
    },
    {
      heading: "Zero is an answer, and it has to be recorded as one",
      paragraphs: [
        "A shop is shut. A shop has nothing ready. The team arrived, found nothing to pick up, and moved on. If the only thing the system stores is a quantity, that stop is indistinguishable from a stop that never happened.",
        "A visit with nothing collected is still a visit here — the record exists, with the count at zero and a note if there is one. It is a small modelling decision that decides whether you can answer the question a client eventually asks: did your team actually come on Tuesday?",
      ],
    },
    {
      heading: "Ordering a route by road, not by map",
      paragraphs: [
        "Sorting stops by straight-line distance produces an order that looks sensible and wastes an hour, because a river, a one-way or a level crossing does not appear in that calculation.",
        <>
          Route ordering is suggested from real road distance instead, and stays
          something you can override — the person who drives it knows things the
          map does not. The same field discipline behind the rest of the{" "}
          <Link to="/staff-tools" className="text-secondary hover:underline">
            staff tools
          </Link>{" "}
          applies here: where the team went is recorded, not asserted.
        </>,
      ],
    },
    {
      heading: "If pickups are the whole business",
      paragraphs: [
        <>
          Not every business running these rounds lends money. A company whose
          work is entirely scheduled pickups can run with the lending screens
          switched off, so the app is about shops, routes and visits and nothing
          else. A lender who also holds a pickup contract keeps both — the
          routes sit alongside the{" "}
          <Link
            to="/daily-collection-app"
            className="text-secondary hover:underline"
          >
            collection rounds
          </Link>{" "}
          rather than replacing them.
        </>,
      ],
    },
  ],
  checklist: {
    heading: "What scheduled-visit software has to get right",
    sub: "Before putting a pickup contract into any system, check for these:",
    items: [
      "Bulk import of the location list, geocoded on the way in",
      "Routes keyed on visit frequency, not geography alone",
      "A per-day view of which locations are actually due",
      "Daily staff assignment that can change without re-cutting the route",
      "A visit record that survives a closed shop or an empty pickup",
      "Location pins that can be re-verified on site, with the date kept",
      "Route ordering from road distance, and overridable by the driver",
      "An offline printable route for poor-signal stretches",
      "Assignment history usable as an attendance record",
    ],
  },
  faqs: [
    {
      q: "What kind of business is this for?",
      a: "Any field operation contracted to visit a fixed list of locations on a repeating cadence and record what was picked up — shop-by-shop collection rounds where the obligation is the frequency of the visit rather than an amount owed.",
    },
    {
      q: "Can it handle different frequencies in one operation?",
      a: "Yes. Cadence is part of how a route is defined, with two, three, four, five and seven day cycles supported, so a single operation can run shops on different frequencies without mixing them into the same round.",
    },
    {
      q: "What happens when a shop is closed or has nothing to collect?",
      a: "It is recorded as a visit with a count of zero. That is deliberate: it keeps 'we came and there was nothing' distinct from 'we did not come', which is the distinction that matters when a client queries a round weeks later.",
    },
    {
      q: "How do shops get into the system?",
      a: "By bulk import. Addresses are geocoded as they load so the list arrives with map pins already attached, and the pin for any shop can be recaptured on site later — the app keeps the date it was last verified.",
    },
    {
      q: "Can different staff run a route on different days?",
      a: "Yes. Assignment is per route per day, one person can hold more than one route and visit them in sequence, and a day with no assignment is a rest day. That assignment history is what the attendance and salary view is built from.",
    },
    {
      q: "Do I have to use the lending features?",
      a: "No. A business whose work is only pickup rounds can run with the loan screens switched off, so the app shows shops, routes and visits and nothing else.",
    },
  ],
  related: [
    { label: "Staff Tools", to: "/staff-tools" },
    { label: "Daily Collection App", to: "/daily-collection-app" },
    { label: "Line Management App", to: "/line-management-app" },
    { label: "Features", to: "/features" },
    { label: "Solutions", to: "/solutions" },
    { label: "Pricing", to: "/pricing" },
  ],
  ctaHeading: "Put your pickup rounds on Vasool",
  ctaSub:
    "Book a free demo — bring your shop list and we'll import it and cut the routes with you.",
};

const ShopVisitTrackingApp = () => <KeywordLanding config={config} />;

export default ShopVisitTrackingApp;
