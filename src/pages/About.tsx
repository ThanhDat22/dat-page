export default function About() {
  const base = import.meta.env.BASE_URL;
  return (
    <main className="pt-24 mx-auto max-w-6xl px-5">
      <header className="grid md:grid-cols-[260px_1fr] gap-10 items-start">
        <div>
          <img src={`${base}/public/images/dat.jpg`} className="w-52 h-52 rounded-full object-cover ring-2 ring-amber-400/40" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Thanh Dat Nguyen</h2>
          <p className="text-neutral-300">Email: dat.nt@aol.com | St. Charles, MO</p>
          <div className="mt-4 flex gap-3">
            <button 
              onClick={() => window.print()} 
              className="mr-3 px-4 py-2 rounded-md border border-neutral-300
                bg-white text-neutral-900 hover:bg-neutral-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40
                appearance-none"> Print / Save as PDF
            </button>
            <a href="/Thanh_Dat_Nguyen_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Download PDF
            </a>
          </div>
        </div>
      </header>

      {/* summary */}
      <section className="mt-10">
        <h3 className="text-amber-400 font-semibold tracking-wide">SUMMARY</h3>
        <p className="mt-2 text-neutral-300">
          <ul>
            <li>BS CS @ UMSL (Expected Dec 2025)</li>
            <li>Interested in Data Science / Software Engineering / Cybersecurity...</li>
          </ul>
        </p>
      </section>

      {/* education */}
      <section className="mt-8">
        <h3 className="text-amber-400 font-semibold tracking-wide">EDUCATION</h3>
        <ul className="mt-2 space-y-1">
          <li>B.S. Computer Science (Expected Dec 2025), University of Missouri-St. Louis, USA</li>
          <li>A.S. Computer Science, 2022, St. Charles Community College, USA</li>
          <li>M.A. Linguistic and Applied Linguistics, 2011, Central China Normal University, China</li>
          <li>B.A. Chinese Language and Literature, 2009, University of Social Science and Humanities, Vietnam</li>
        </ul>
      </section>

      {/* skills */}
      <section className="mt-8">
        <h3 className="text-amber-400 font-semibold tracking-wide">SKILLS</h3>
        <p className="mt-2 text-neutral-300">
          <ul className="list-disc ml-5 space-y-1">
            <li><span className="font-semibold">Programming Languages:</span> Python, JavaScript/TypeScript, Java, C/C++, SQL, HTML/CSS</li>
            <li><span className="font-semibold">Web Development:</span> React, Node.js, Express, Tailwind CSS</li>
            <li><span className="font-semibold">Frameworks/Tools:</span> Git, Linux, Docker (basic)</li>
            <li><span className="font-semibold">Data Science:</span> Pandas, NumPy, Matplotlib, Scikit-learn</li>
            <li><span className="font-semibold">Database:</span> MySQL, MongoDB</li>
            <li><span className="font-semibold">Cybersecurity:</span> Basic knowledge of network security, cryptography, and ethical hacking</li>
            <li><span className="font-semibold">Languages:</span> English (Fluent), Vietnamese (Native), Chinese (Intermediate)</li>
          </ul>
        </p>
      </section>

      {/* preview resume PDF left embed */}
      <section className="mt-10 grid md:grid-cols-[minmax(0,1fr)_340px] gap-8 items-start">
        <div className="min-w-0 text-neutral-30">
          {/* Adds Experience / Projects… */}
        </div>
        <div className="sticky top-24 justify-self-center">
          <h4 className="text-amber-400 mb-2 text-center">curriculum vitae</h4>
          <div className="w-[300px] h-[420px] border border-neutral-700 rounded overflow-hidden bg-neutral-900">
            <iframe
              title="resume"
              src="/Thanh_Dat_Nguyen_Resume.pdf#view=FitH"
              className="w-full h-full"
            />
          </div>

          
        </div>
      </section>
    </main>
  );
}
