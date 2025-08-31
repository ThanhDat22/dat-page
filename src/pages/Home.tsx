import BackgroundSwitcher from "../components/BackgroundSwithcer";

export default function Home() {
  return (
    <section className="relative pt-24 min-h-screen overflow-hidden flex flex-col">
      <BackgroundSwitcher />
      <div className="relative z-10 mx-auto max-w-6xl px-5 grid md:grid-cols-[240px_1fr] items-center gap-10">
        <img src="/images/dat.JPG" className="w-40 h-40 rounded-full object-cover ring-2 ring-amber-400/40" />

        <div>
          <h1 className="text-4xl font-bold">
            <span className="text-amber-400">T</span>hanh
            <span className="text-amber-400"> D</span>at
            <span className="text-amber-400"> N</span>guyen
          </h1>
          <p className="mt-2 text-neutral-300">
            B.S. of Computer Science (Expected Dec 2025)
          </p>
          <p className="mt-4 max-w-xl text-neutral-300">
            University of Missouri - St. Louis<br/>
          </p>
        </div>
      </div>
      <div className="flex justify-center pb-8 opacity-70"></div>
      <div className="mt-auto z-10 flex justify-center pb-6">
        <span className="opacity-60 text-xs text-neutral-400">
          © 2025 Thanh Dat Nguyen.
        </span>
      </div>
    </section>
  );
}
