import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { posts, formatDate } from "@/lib/blog";

const BASE_URL = "https://vasool.app";

const Blog = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Vasool Blog",
    description:
      "Guides and field notes on loan collection, lending operations, and collection software for money lenders, NBFCs and finance companies.",
    url: `${BASE_URL}/blog`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `${BASE_URL}/blog/${p.slug}`,
      author: { "@type": "Organization", name: p.author },
    })),
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <SEO
        title="Blog — Loan Collection & Lending Insights"
        description="Guides and field notes on loan collection, reducing defaults, and choosing lending software — for money lenders, NBFCs and finance companies."
        canonical="/blog"
        keywords="loan collection blog, lending software guides, NBFC collections, daily finance tips"
        structuredData={structuredData}
      />

      {/* Header */}
      <div className="bg-muted/40 border-b border-border pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
            Vasool Blog
          </h1>
          <p className="text-muted-foreground mt-3 text-base sm:text-lg max-w-2xl">
            Practical guides and field notes on loan collection, reducing
            defaults, and running lending operations that scale.
          </p>
        </div>
      </div>

      {/* Post list */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet — check back soon.</p>
        ) : (
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                {post.tags.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h2 className="text-xl font-bold text-foreground">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="transition-colors group-hover:text-secondary"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readingMinutes} min read
                  </span>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-secondary"
                  aria-label={`Read: ${post.title}`}
                >
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default Blog;
