import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../../data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | Mohamed Azahrioui`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://moaz06.dev/writing/${post.slug}`,
      siteName: "Mohamed Azahrioui",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

function PostSection({ section }) {
  if (section.type === "heading") {
    return (
      <h2 className="mt-10 text-2xl font-semibold text-zinc-950">
        {section.text}
      </h2>
    );
  }

  if (section.type === "paragraph") {
    return <p className="mt-5 leading-7 text-zinc-600">{section.text}</p>;
  }

  if (section.type === "list") {
    return (
      <ul className="mt-5 space-y-3 text-zinc-600 leading-7">
        {section.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="text-sky-800">
              &bull;
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (section.type === "code") {
    return (
      <pre className="mt-5 rounded-lg bg-zinc-950 p-5 text-sm text-zinc-100 overflow-x-auto">
        <code>{section.text}</code>
      </pre>
    );
  }

  return null;
}

export default async function WritingPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-zinc-950">
      <article className="mx-auto max-w-2xl px-6 py-10">
        <Link
          href="/writing"
          className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
        >
          &larr; Writing
        </Link>

        <header className="mt-12">
          <p className="inline-flex rounded-md border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-medium text-sky-800">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            {post.readingTime}
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-zinc-950 md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-zinc-700">
            {post.description}
          </p>
        </header>

        <div className="mt-10 border-t border-zinc-200 pt-2">
          {post.content.map((section, index) => (
            <PostSection key={`${section.type}-${index}`} section={section} />
          ))}
        </div>
      </article>
    </main>
  );
}
