import { clinic } from "@/data/clinic";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-brand" /> Happy patients
          </span>
          <h2 className="section-title mt-4">What our patients say</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {clinic.testimonials.map((t, i) => (
            <figure
              key={t.text.slice(0, 30)}
              className="reveal-scale flex flex-col rounded-2xl border border-brand/10 bg-white p-6 shadow-sm transition hover:shadow-card hover:-translate-y-1"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <Quote className="h-7 w-7 text-brand/25" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                {t.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-tint font-semibold text-brand">
                  {t.name.charAt(0)}
                </span>
                <span className="text-sm font-semibold text-ink">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
