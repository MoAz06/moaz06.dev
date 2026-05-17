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
    <main className="min-h-screen bg-[#f5f7fb] text-zinc-950">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
        >
          Back to homepage
        </Link>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-md border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-medium text-sky-800">
              {project.type} | {project.year}
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.04] text-zinc-950 md:text-7xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-700">
              {project.description}
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-950">
              Project snapshot
            </h2>
            <dl className="mt-5 grid gap-4 text-sm">
              <div>
                <dt className="font-medium text-zinc-500">Type</dt>
                <dd className="mt-1 font-semibold text-zinc-950">
                  {project.type}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-500">Period</dt>
                <dd className="mt-1 font-semibold text-zinc-950">
                  {project.year}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-500">Source</dt>
                <dd className="mt-1 font-semibold text-zinc-950">
                  {project.github ? "Public GitHub repository" : project.repoLabel}
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  View repository
                </a>
              )}

              <Link
                href="/#work"
                className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:border-zinc-500"
              >
                View all work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[0.75fr_1.25fr]">
          <h2 className="text-2xl font-semibold text-zinc-950">Problem</h2>
          <p className="max-w-3xl leading-7 text-zinc-600">
            {project.problem}
          </p>
        </div>
      </section>

      {project.outcomes?.length > 0 && (
        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[0.75fr_1.25fr]">
            <h2 className="text-2xl font-semibold text-zinc-950">Outcomes</h2>

            <div className="grid gap-3 md:grid-cols-3">
              {project.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-lg border border-zinc-200 bg-white p-4 text-sm leading-6 text-zinc-700 shadow-sm"
                >
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-y border-zinc-200 bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[0.75fr_1.25fr]">
          <h2 className="text-2xl font-semibold text-zinc-950">What I built</h2>

          <div className="grid gap-3 md:grid-cols-2">
            {project.builtFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-lg border border-zinc-200 bg-[#f8fafc] p-4 text-sm leading-6 text-zinc-700"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {project.endpoints.length > 0 && (
        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[0.75fr_1.25fr]">
            <h2 className="text-2xl font-semibold text-zinc-950">
              Example endpoints
            </h2>

            <div className="grid gap-3 md:grid-cols-2">
              {project.endpoints.map((endpoint) => (
                <code
                  key={endpoint}
                  className="rounded-lg border border-zinc-200 bg-zinc-950 px-4 py-3 text-sm text-zinc-100"
                >
                  {endpoint}
                </code>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-y border-zinc-200 bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[0.75fr_1.25fr]">
          <h2 className="text-2xl font-semibold text-zinc-950">Tech stack</h2>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-md border border-zinc-200 bg-[#f8fafc] px-3 py-2 text-sm font-medium text-zinc-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">
              {project.github ? "View the source code" : "Private client work"}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
              {project.github
                ? "The repository includes the code, structure, and implementation details for this project."
                : "This project is described as a case study because the client implementation is not published as a public repository."}
            </p>
          </div>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Open repository
            </a>
          ) : (
            <Link
              href="/#contact"
              className="inline-flex rounded-md bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Discuss similar work
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
