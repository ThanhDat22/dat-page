import { useState } from "react";
export default function Accordion({title, children}:{title:string;children:React.ReactNode}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-800">
      <button onClick={()=>setOpen(o=>!o)} className="w-full py-4 flex 
        text-gray-800
        justify-between items-center hover:text-amber-700">
        <span>{title}</span><span>{open ? "▾" : "▸"}</span>
      </button>
      {open && <div className="pb-4 text-stone-300">{children}</div>}
    </div>
  );
}
