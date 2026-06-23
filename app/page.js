import Image from "next/image";
import Link from "next/link";
import { certifications } from "./data/certifications";
import { projects } from "./data/projects";

const focusAreas = [
  {
    title: "Backend systems",
    description:
      "FastAPI and Flask backends with clear routes, authentication, database models, and OpenAPI documentation.",
  },
  {
    title: "Automation tools",
    description:
      "Python and Node workflows for exports, agent guardrails, RAG systems, cloud integrations, and repeatable operations.",
  },
  {
    title: "Data workflows",
    description:
      "PostgreSQL, SQLite, BigQuery, and Azure-backed systems that keep business rules explicit and production behavior predictable.",
  },
];

const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "JavaScript / Node.js", "TypeScript", "C++", "SQL", "Bash"],
  },
  {
    title: "Backend and APIs",
    items: [
      "FastAPI",
      "Flask",
      "Node.js",
      "REST APIs",
      "API integrations",
      "JWT",
      "OAuth2",
      "bcrypt",
      "Swagger / OpenAPI",
      "Postman",
      "WebSockets",
    ],
  },
  {
    title: "Data and automation",
    items: [
      "PostgreSQL",
      "SQLite",
      "BigQuery",
      "SQLAlchemy ORM",
      "openpyxl",
      "Excel generation",
      "Mail Merge",
      "CSV ingestion",
      "Business rule logic",
      "Fivetran",
    ],
  },
  {
    title: "Deployment and tools",
    items: [
      "Azure App Service",
      "Azure AI Search",
      "Azure Blob Storage",
      "Azure OpenAI",
      "Google Cloud Run",
      "Docker",
      "Railway",
      "Environment variables",
      "Production configuration",
      "Linux / WSL",
      "Git",
      "GitLab CI/CD",
      "pytest",
      "Uvicorn",
    ],
  },
];

const experience = [
  {
    role: "Software Developer",
    company: "CodeHive",
    period: "June 2026-Present",
    details:
      "Working on MHPoly, an Azure-based RAG knowledge base with Azure AI Search, Blob Storage, Azure OpenAI, App Service configuration, source references, and highlighted supporting passages.",
  },
  {
    role: "Backend Developer",
    company: "Kojac",
    period: "April 2026-Present",
    details:
      "Building backend and frontend pieces on live client products with a senior team, connecting services, APIs, and responsive interfaces while studying full-time.",
  },
  {
    role: "Backend Developer",
    company: "External clients",
    period: "2025-Present",
    details:
      "Freelance production work across bol.com/DPD automation, FastAPI auth, invoice risk rules, data pipelines, and C++ projects.",
  },
  {
    role: "BSc Computer Science",
    company: "Leiden University",
    period: "2025-Present",
    details:
      "Studying computer science while applying backend, database, algorithm, and systems concepts in practical projects.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-zinc-950">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-sm font-semibold text-zinc-950">
          Mohamed Azahrioui
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-600 sm:flex">
          <a className="transition hover:text-zinc-950" href="#work">
            Work
          </a>
          <a className="transition hover:text-zinc-950" href="#certifications">
            Certifications
          </a>
          <a className="transition hover:text-zinc-950" href="#experience">
            Experience
          </a>
          <a className="transition hover:text-zinc-950" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-8 lg:min-h-[78vh] lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-md border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-medium text-sky-800">
            Software Developer | Backend Developer | CS student
          </p>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.04] text-zinc-950 md:text-7xl">
            Mohamed Azahrioui
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-700">
            I build backend systems, AI-agent guardrails, RAG workflows,
            and cloud-connected tools with a focus on auditable logic and
            production behavior.
          </p>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
            Recent work includes CodeHive&apos;s Azure RAG knowledge base, Kojac
            client products, ReachGate vulnerability triage, TrustGate runtime
            authorization, and production automation for external clients.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:mohamedazahrioui2006@gmail.com"
              className="rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Contact me
            </a>

            <a
              href="/MohamedCV_backend_developer.pdf"
              download
              className="rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:border-zinc-500"
            >
              Download CV
            </a>

            <a
              href="https://github.com/MoAz06"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:border-zinc-500"
            >
              GitHub
            </a>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-1 border-y border-zinc-200 text-sm sm:grid-cols-3">
            <div className="py-4 sm:pr-6">
              <dt className="font-medium text-zinc-500">Location</dt>
              <dd className="mt-1 font-semibold text-zinc-950">
                The Hague, NL
              </dd>
            </div>
            <div className="border-t border-zinc-200 py-4 sm:border-l sm:border-t-0 sm:px-6">
              <dt className="font-medium text-zinc-500">Current</dt>
              <dd className="mt-1 font-semibold text-zinc-950">
                CodeHive + Kojac
              </dd>
            </div>
            <div className="border-t border-zinc-200 py-4 sm:border-l sm:border-t-0 sm:pl-6">
              <dt className="font-medium text-zinc-500">Study</dt>
              <dd className="mt-1 font-semibold text-zinc-950">
                Leiden CS
              </dd>
            </div>
          </dl>
        </div>

        <aside className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-[160px_1fr] lg:grid-cols-1">
            <Image
              src="https://github.com/MoAz06.png?size=320"
              alt="Mohamed Azahrioui"
              width={320}
              height={320}
              priority
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 160px, 100vw"
              className="aspect-square w-full rounded-lg object-cover"
            />

            <div className="rounded-lg bg-zinc-950 p-5 text-white">
              <p className="text-sm text-zinc-300">Current focus</p>
              <h2 className="mt-3 text-2xl font-semibold">
                Backend work that survives real operations.
              </h2>
              <p className="mt-4 text-sm leading-6 text-zinc-300">
                APIs, exports, local persistence, and automation that match how
                people actually work day to day.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="border-y border-zinc-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-sky-800">What I work on</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-950">
              Practical backend help for APIs, agent guardrails, RAG, and internal tools.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-lg border border-zinc-200 bg-[#f8fafc] p-6"
              >
                <h3 className="text-lg font-semibold text-zinc-950">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-sky-800">Selected work</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-950">
                Projects with backend substance.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-zinc-600">
              A mix of AI security, runtime authorization, client automation,
              API design, realtime backend work, and algorithmic problem solving.
            </p>
          </div>

          <div className="mt-8 grid gap-5">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group grid gap-5 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-sky-300 md:grid-cols-[1.2fr_0.8fr]"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
                    <span>{project.type}</span>
                    <span aria-hidden="true">/</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-zinc-950">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-3xl leading-7 text-zinc-600">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 6).map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <span className="text-sm font-medium text-sky-800 transition group-hover:text-sky-600">
                    View case study
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="certifications"
        className="border-y border-zinc-200 bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-sky-800">
                Certifications
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-950">
                Verified credentials I can build on.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-zinc-600">
              Current certifications and future credentials collected in one
              place, with verification links where available.
            </p>
          </div>

          <div className="mt-8 grid gap-5">
            {certifications.map((certification) => (
              <article
                key={certification.credentialId}
                className="grid gap-5 rounded-lg border border-zinc-200 bg-[#f8fafc] p-4 shadow-sm md:grid-cols-[0.95fr_1.05fr] md:p-6"
              >
                {certification.image ? (
                  <a
                    href={certification.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-lg border border-zinc-200 bg-white"
                  >
                    <Image
                      src={certification.image}
                      alt={`${certification.issuer} ${certification.title} certificate`}
                      width={1600}
                      height={1200}
                      sizes="(min-width: 768px) 520px, 100vw"
                      className="aspect-[4/3] w-full object-cover transition group-hover:scale-[1.01]"
                    />
                  </a>
                ) : (
                  <div className="flex min-h-64 flex-col justify-between rounded-lg border border-zinc-200 bg-white p-6">
                    <div>
                      <p className="text-sm font-medium text-sky-800">
                        Verified certificate
                      </p>
                      <h3 className="mt-4 text-3xl font-semibold text-zinc-950">
                        {certification.title}
                      </h3>
                    </div>
                    <p className="text-sm text-zinc-500">
                      {certification.issuer} | {certification.year}
                    </p>
                  </div>
                )}

                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
                      <span>{certification.issuer}</span>
                      <span aria-hidden="true">/</span>
                      <span>{certification.issued}</span>
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold text-zinc-950">
                      {certification.title}
                    </h3>

                    <p className="mt-3 leading-7 text-zinc-600">
                      {certification.description}
                    </p>

                    <p className="mt-3 text-sm text-zinc-500">
                      Credential ID: {certification.credentialId}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {certification.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={certification.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                  >
                    Verify certificate
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-medium text-sky-800">Skills</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-950">
              Tools I use to ship backend work.
            </h2>
            <p className="mt-4 leading-7 text-zinc-600">
              The stack is centered on Python, databases, automation, and
              production-minded configuration.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <section
                key={group.title}
                className="rounded-lg border border-zinc-200 bg-[#f8fafc] p-5"
              >
                <h3 className="font-semibold text-zinc-950">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-white px-3 py-1 text-sm text-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-sky-800">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-zinc-950">
            Current work and education.
          </h2>

          <div className="mt-8 divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="grid gap-4 p-6 md:grid-cols-[0.75fr_1.25fr]"
              >
                <div>
                  <h3 className="font-semibold text-zinc-950">{item.role}</h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    {item.company} | {item.period}
                  </p>
                </div>
                <p className="leading-7 text-zinc-600">{item.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-zinc-800 bg-zinc-950 px-6 py-20 text-white"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-sky-300">Available for work</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold">
              Need a backend, RAG workflow, agent guardrail, or API integration built?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
              Send me the issue, workflow, or API idea. I can help shape it into
              a maintainable system with explicit business rules and auditable behavior.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:mohamedazahrioui2006@gmail.com"
              className="rounded-md bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Send an email
            </a>
            <a
              href="/MohamedCV_backend_developer.pdf"
              download
              className="rounded-md border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition hover:border-zinc-400"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 px-6 py-8 text-center text-sm text-zinc-500">
        &copy; 2026 Mohamed Azahrioui. Built with Next.js and deployed on
        Vercel.
      </footer>
    </main>
  );
}
