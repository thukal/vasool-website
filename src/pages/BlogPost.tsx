import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { getPostBySlug, posts, formatDate } from "@/lib/blog";
import { renderMarkdown } from "@/lib/markdown";

const BASE_URL = "https://vasool.app";

const BlogPost = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/blog\//, "").replace(/\/$/, "");
  const post = getPostBySlug(slug);

  const html = useMemo(
    () => (post ? renderMarkdown(post.body) : ""),
    [post]
  );

  if (!post) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <SEO
          title="Post not found"
          description="This blog post could not be found."
          canonical="/blog"
        />
        <div className="container mx-auto px-4 sm:px-6 pt-32 pb-24 text-center">
          <h1 className="text-3xl font-extrabold text-foreground">
            Post not found
          </h1>
          <p className="mt-3 text-muted-foreground">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 text-secondary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to the blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const url = `${BASE_URL}/blog/${post.slug}`;
  const image = post.cover
    ? `${BASE_URL}${post.cover}`
    : `${BASE_URL}/logo-full.png`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Organization", name: post.author },
      publisher: {
        "@type": "Organization",
        name: "Vasool",
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/logo-full.png`,
        },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image,
      keywords: post.keywords,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="min-h-screen">
      <Navigation />
      <SEO
        title={post.title}
        description={post.description}
        canonical={`/blog/${post.slug}`}
        keywords={post.keywords}
        ogType="article"
        ogImage={image}
        structuredData={structuredData}
      />

      {/* Header */}
      <div className="bg-muted/40 border-b border-border pt-24 pb-10 sm:pt-28 sm:pb-14">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            {post.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readingMinutes} min read
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div
          className="prose prose-gray mx-auto max-w-3xl prose-headings:font-bold prose-headings:text-foreground prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl border-t border-border pt-10">
            <h2 className="text-lg font-bold text-foreground">Keep reading</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
                >
                  <h3 className="font-semibold text-foreground transition-colors group-hover:text-secondary">
                    {p.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </main>
  );
};

export default BlogPost;
