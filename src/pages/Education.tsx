import Accordion from "../components/Accordion";
import { courses, termKey } from "../data/courses";

export default function Education() {
  const umslCourses = courses.filter(c => c.school === "UMSL").sort((a, b) => termKey(b.term) - termKey(a.term));
  const sccCourses  = courses.filter(c => c.school === "SCC").sort((a, b) => termKey(b.term) - termKey(a.term));

  return (
    <main className="pt-24 mx-auto max-w-6xl px-5">
      <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
        <span className="inline-flex items-center bg-white/95 rounded px-2 py-1 ring-1 ring-neutral-700/10">
          <img src="/images/umsl_logo.png" alt="UMSL" className="h-8 w-auto" /></span>
        University of Missouri - St. Louis
      </h2>
      <section className="bg-neutral-800/40 rounded-md">
        {umslCourses.map((c, i) => (
          <div key={i} className="px-4">
            <div className="text-sm text-neutral-400 pt-4">{c.term}</div>
            <Accordion title={c.title}>
              <ul className="list-disc ml-5 space-y-1">
                {c.summary.map((s, idx) => <li key={idx}>{s}</li>)}
              </ul>
              <div className="mt-2 flex gap-3 text-sm">
                {c.links.map((l, idx) => (
                  <a key={idx} href={l.href} className="underline" target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            </Accordion>
          </div>
        ))}
      </section>
      
      <h2 className="text-3xl font-semibold mt-10 mb-6 flex items-center gap-3">
        <img src="/images/scc_logo.png" alt="SCC" className="h-8 w-auto" />
        Saint Charles Community College
      </h2>
      <section className="bg-neutral-800/40 rounded-md">
        {sccCourses.map((c, i) => (
          <div key={i} className="px-4">
            <div className="text-sm text-neutral-400 pt-4">{c.term}</div>
            <Accordion title={c.title}>
              <ul className="list-disc ml-5 space-y-1">
                {c.summary.map((s, idx) => <li key={idx}>{s}</li>)}
              </ul>
              <div className="mt-2 flex gap-3 text-sm">
                {c.links.map((l, idx) => (
                  <a key={idx} href={l.href} className="underline" target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            </Accordion>
          </div>
        ))}
      </section>
    </main>
  );
}
