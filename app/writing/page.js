import Link from "next/link";
import { posts } from "../data/posts";

export const metadata = {
  title: "Writing | Mohamed Azahrioui",
  description:
    "Notes on AI-agent guardrails, backend systems, RAG workflows, and production data trust.",
};

function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-zinc-950">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
        >
          Back to homepage
        </Link>

        <div className="mt-12 max-w-3xl">
          <p className="inline-flex rounded-md border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-medium text-sky-800">
            Writing
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.04] text-zinc-950 md:text-7xl">
            Notes on agents, backend systems, and production data trust.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-700">
            Practical essays from the systems I am building and the governance
            questions that show up once agents meet real operational data.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-sky-300"
            >
              <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true">/</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-zinc-950">
                {post.title}
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-zinc-600">
                {post.description}
              </p>
              <span className="mt-5 inline-flex text-sm font-medium text-sky-800 transition group-hover:text-sky-600">
                Read post
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
