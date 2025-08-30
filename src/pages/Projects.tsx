import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="pt-24 mx-auto max-w-6xl px-5">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map(p => (
          <article key={p.name} className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5 hover:border-amber-400/40">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-neutral-300">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.tags.map(t => <span key={t} className="px-2 py-0.5 rounded bg-neutral-800">{t}</span>)}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              {p.repo && <a className="underline" href={p.repo} target="_blank" rel="noreferrer">Repo</a>}
              {p.demo && <a className="underline" href={p.demo} target="_blank" rel="noreferrer">Demo</a>}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
