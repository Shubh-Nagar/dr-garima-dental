"use client";

import { useState } from "react";
import { clinic } from "@/data/clinic";
import SmartImage from "./SmartImage";

function CombinedCard({ combined, label }: { combined: string; label: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-sm transition hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage src={combined} alt={label} label={label} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
        <span className="absolute left-2 top-2 rounded-full bg-brand/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          Before → After
        </span>
      </div>
      <p className="px-4 py-3 text-sm font-medium text-ink/75">{label}</p>
    </div>
  );
}

function BeforeAfter({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-sm">
      <div className="relative aspect-[4/3] select-none">
        <SmartImage src={after} alt={`${label} after`} label="After" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <SmartImage src={before} alt={`${label} before`} label="Before" className="h-full w-full object-cover" />
          <span className="absolute left-2 top-2 rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            Before
          </span>
        </div>
        <span className="absolute right-2 top-2 rounded-full bg-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          After
        </span>
        <div className="absolute inset-y-0 w-0.5 bg-white/90" style={{ left: `${pos}%` }} />
        <input
          type="range" min={0} max={100} value={pos}
          aria-label={`Reveal ${label} before and after`}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-x-0 bottom-3 mx-auto block w-[85%] cursor-ew-resize accent-accent"
        />
      </div>
      <p className="px-4 py-3 text-sm font-medium text-ink/75">{label}</p>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-brand-tint/40 py-20">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-brand" /> Real results
          </span>
          <h2 className="section-title mt-4">Smiles we've transformed</h2>
          <p className="mt-3 text-ink/65">Real results from real patients — before and after their treatment.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clinic.gallery.map((g, i) => (
            <div
              key={g.label}
              className="reveal-scale"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {"combined" in g
                ? <CombinedCard {...g} />
                : <BeforeAfter {...g} />
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
