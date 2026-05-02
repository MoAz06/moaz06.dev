import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found | Mohamed Azahrioui",
    };
  }

  return {
    title: `${project.title} | Mohamed Azahrioui`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/"
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          ← Back to homepage
        </Link>

        <div className="mt-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Project Case Study
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-4 text-sm text-zinc-500">{project.year}</p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              View GitHub repository
            </a>

            <Link
              href="/"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:border-zinc-400"
            >
              View all projects
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_2fr]">
          <h2 className="text-2xl font-semibold text-white">Problem</h2>
          <p className="leading-7 text-zinc-400">{project.problem}</p>
        </div>
      </section>

      <section className="border-t border-zinc-800 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_2fr]">
          <h2 className="text-2xl font-semibold text-white">What I built</h2>

          <div className="grid gap-3">
            {project.builtFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm leading-6 text-zinc-300"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {project.endpoints.length > 0 && (
        <section className="border-t border-zinc-800 px-6 py-16">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_2fr]">
            <h2 className="text-2xl font-semibold text-white">
              Example endpoints
            </h2>

            <div className="grid gap-3">
              {project.endpoints.map((endpoint) => (
                <code
                  key={endpoint}
                  className="rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-zinc-300"
                >
                  {endpoint}
                </code>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-zinc-800 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_2fr]">
          <h2 className="text-2xl font-semibold text-white">Tech stack</h2>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-white">
            View the source code
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            The full repository is available on GitHub, including the code,
            structure, and implementation details.
          </p>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            Open repository
          </a>
        </div>
      </section>
    </main>
  );
}
