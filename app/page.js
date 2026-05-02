import Link from "next/link";
import { projects } from "./data/projects";

const skills = [
  "Python",
  "FastAPI",
  "Flask",
  "Flask-SocketIO",
  "SQL",
  "PostgreSQL",
  "SQLAlchemy",
  "C++",
  "Git",
  "Linux",
  "Bash",
  "JWT",
  "OAuth2",
  "bcrypt",
  "REST APIs",
  "Swagger / OpenAPI",
  "Backend Architecture",
  "Data Pipelines",
  "Algorithm Design",
];

const services = [
  {
    title: "REST API Development",
    description:
      "Small Python backends using FastAPI or Flask, with clean routes, JSON responses, database integration, and API documentation.",
  },
  {
    title: "Backend Bug Fixing",
    description:
      "Debugging route errors, authentication issues, database problems, deployment problems, and broken backend logic.",
  },
  {
    title: "Data Processing Scripts",
    description:
      "CSV ingestion, filtering, transformation scripts, automation workflows, and simple data validation logic.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
          Python Backend Developer
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
          Mohamed Azahrioui
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Computer Science student at Leiden University focused on backend
          development, REST APIs, databases, automation, and algorithmic problem
          solving.
        </p>

        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
          I build and fix small Python backends: FastAPI and Flask APIs,
          authentication, database logic, CSV pipelines, and backend bugs.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:mohamedazahrioui2006@gmail.com"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            Contact me
          </a>

          <a
            href="https://github.com/MoAz06"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:border-zinc-400"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-white">
            What I can help with
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
              >
                <h3 className="font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-white">Projects</h2>

          <div className="mt-8 grid gap-5">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-zinc-500"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      {project.year}
                    </p>
                  </div>

                  <span className="text-sm text-zinc-500">
                    View case study →
                  </span>
                </div>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>

                <p className="mt-3 max-w-4xl text-sm leading-6 text-zinc-300">
                  Built features: {project.builtFeatures.slice(0, 4).join(", ")}.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 8).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-white">Skills</h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-white">
            Need a Python backend or API fixed?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            Send me the issue, feature request, or API idea. I can help with
            Flask, FastAPI, PostgreSQL, authentication, backend bugs, and small
            automation scripts.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:mohamedazahrioui2006@gmail.com"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Send an email
            </a>

            <a
              href="https://github.com/MoAz06"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:border-zinc-400"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 Mohamed Azahrioui. Built with Next.js and deployed on Vercel.
      </footer>
    </main>
  );
}
