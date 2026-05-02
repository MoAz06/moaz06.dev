const projects = [
  {
    title: "Procurement Risk API",
    description:
      "A backend API for invoice analysis, risk signals, duplicate detection, analytics, and JWT-protected routes.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Python"],
    link: "https://github.com/MoAz06/procurement-risk-api",
  },
  {
    title: "Real-time Chat App",
    description:
      "A Flask-based web application with authentication, database models, user sessions, and real-time messaging features.",
    tech: ["Flask", "Python", "SQLAlchemy", "WebSockets"],
    link: "https://github.com/MoAz06/chatapp-pt2",
  },
  {
    title: "Backtracking Scheduler",
    description:
      "A C++ scheduling algorithm that uses constraint checking and backtracking to generate valid competition schedules.",
    tech: ["C++", "Algorithms", "Backtracking", "Constraint Solving"],
    link: "https://github.com/MoAz06/algorithms-backtracking-champions-league",
  },
];

const skills = [
  "Python",
  "FastAPI",
  "Flask",
  "SQL",
  "PostgreSQL",
  "C++",
  "Git",
  "Linux",
  "REST APIs",
  "Backend Development",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
          Backend Developer Portfolio
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
          Mohamed Azahrioui
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Computer Science student focused on backend development, REST APIs,
          databases, automation, and clean server-side logic.
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
          <h2 className="text-3xl font-semibold text-white">What I build</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="font-semibold text-white">REST APIs</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Small backend APIs using FastAPI or Flask with clean routes,
                JSON responses, authentication, and database integration.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="font-semibold text-white">Backend Fixes</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Debugging Python backend errors, fixing routes, database issues,
                authentication problems, and deployment problems.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="font-semibold text-white">Automation</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Data processing scripts, CSV pipelines, simple automation tools,
                and backend logic for practical workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-white">Projects</h2>

          <div className="mt-8 grid gap-5">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-zinc-500"
              >
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </a>
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
            Need a small backend or API fixed?
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            I can help with Python backend tasks, Flask or FastAPI APIs,
            database logic, bug fixing, and small automation scripts.
          </p>

          <a
            href="mailto:mohamedazahrioui2006@gmail.com"
            className="mt-8 inline-block rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            Send an email
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 Mohamed Azahrioui. Built with Next.js and deployed on Vercel.
      </footer>
    </main>
  );
}