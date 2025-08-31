// src/pages/Projects.tsx
import { projects } from "../data/projects";

export default function Projects() {
  const list = Array.isArray(projects) ? projects : [];

  // DEV debug: see how many items we actually have
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log("Projects length:", list.length, list.map(p => p?.name));
  }

  return (
    <main className="pt-24 mx-auto max-w-screen-2xl px-5">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>

      {list.length === 0 ? (
        <p className="text-neutral-400">No projects yet. Coming soon.</p>
      ) : (
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {list.map((p, i) => (
            <article
              key={(p && p.name) || i}
              className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-amber-400/40 transition"
            >
              <h3 className="text-lg md:text-xl font-semibold">{p?.name}</h3>

              {p?.desc && (
                <p className="mt-2 text-neutral-300 leading-relaxed">{p.desc}</p>
              )}

              {Array.isArray(p?.tags) && p.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                {p?.repo && (
                  <a
                    className="underline"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                )}
                {p?.demo && (
                  <a
                    className="underline"
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
