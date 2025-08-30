import Accordion from "../components/Accordion";
import { courses, termKey } from "../data/courses";

const byTermDesc = (a: typeof courses[number], b: typeof courses[number]) =>
  termKey(b.term) - termKey(a.term);

export default function Education() {
  const umslCourses = courses.filter(c => c.school === "UMSL").sort(byTermDesc);
  const sccCourses  = courses.filter(c => c.school === "SCC").sort(byTermDesc);

  return (
    <main className="pt-24 mx-auto max-w-6xl px-5">
      <h2 className="text-3xl font-semibold mb-6">University of Missouri - St. Louis</h2>
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
      
      <h2 className="text-3xl font-semibold mb-6">Saint Charles Community College</h2>
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
