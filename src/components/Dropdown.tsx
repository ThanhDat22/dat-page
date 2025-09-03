import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dropdown({
  label, items,
}: { label: string; items: { label: string; to: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(v => !v)} className="hover:text-amber-800">
        {label}
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-48 rounded-md border border-neutral-700 bg-neutral-800 shadow-lg">
          {items.map(it => (
            <Link key={it.to} to={it.to} className="block px-4 py-2 hover:bg-neutral-700" onClick={() => setOpen(false)}>
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
