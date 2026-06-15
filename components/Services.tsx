import { clinic } from "@/data/clinic";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "./SmartImage";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-brand" /> What we do
          </span>
          <h2 className="section-title mt-4">
            Complete dental care, all under one roof
          </h2>
          <p className="mt-3 text-ink/65">
            From a routine cleaning to full-mouth rehabilitation, our specialists
            handle every treatment with precision and a gentle touch.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clinic.services.map((s, i) => (
            <a
              key={s.title}
              href="#contact"
              className="reveal-scale group overflow-hidden rounded-2xl border border-brand/10 bg-white transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-card"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <SmartImage
                  src={s.image}
                  alt={s.title}
                  label={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-lg font-medium text-ink sm:text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.desc}</p>
                {/* Always visible on mobile (no hover), appears on hover on desktop */}
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                  Book this <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
