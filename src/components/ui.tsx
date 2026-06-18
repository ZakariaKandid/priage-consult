import { ReactNode } from 'react';

export function HeroSplit({
  label,
  title,
  description,
  ctaLabel,
  onCta,
  imageSide = 'right',
  dark = false,
  children,
}: {
  label?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  onCta?: () => void;
  imageSide?: 'left' | 'right';
  dark?: boolean;
  children?: ReactNode;
}) {
  const textBlock = (
    <div
      className={`flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20 ${
        dark ? 'bg-priage-navy text-white' : 'bg-priage-surface'
      }`}
    >
      {label && (
        <span className={`text-xs font-semibold uppercase tracking-widest ${dark ? 'text-priage-teal' : 'text-priage-blue'}`}>
          {label}
        </span>
      )}
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</h1>
      <p className={`mt-4 max-w-lg text-base leading-relaxed ${dark ? 'text-white/80' : 'text-priage-muted'}`}>
        {description}
      </p>
      {ctaLabel && onCta && (
        <button
          type="button"
          onClick={onCta}
          className="mt-8 w-fit rounded-lg bg-priage-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-priage-blue/30 transition hover:bg-priage-teal-dark"
        >
          {ctaLabel}
        </button>
      )}
    </div>
  );

  const visualBlock = (
    <div className={`flex items-center justify-center p-8 lg:p-12 ${dark ? 'bg-priage-navy' : 'bg-white'}`}>
      {children ?? <DeviceMockup />}
    </div>
  );

  return (
    <section className="grid min-h-[420px] lg:min-h-[480px] lg:grid-cols-2">
      {imageSide === 'left' ? (
        <>
          {visualBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {visualBlock}
        </>
      )}
    </section>
  );
}

export function DeviceMockup() {
  return (
    <div className="relative w-full max-w-md">
      <div className="rounded-2xl border border-priage-line bg-white p-4 shadow-2xl shadow-priage-navy/10">
        <div className="mb-3 flex items-center justify-between border-b border-priage-line pb-2">
          <span className="text-xs font-bold text-priage-navy">Triage workspace</span>
          <span className="rounded bg-priage-teal/20 px-2 py-0.5 text-[10px] font-medium text-priage-teal-dark">Live</span>
        </div>
        <div className="space-y-2">
          {[
            { ctas: 'bg-red-500', name: 'Patient A', note: 'Chest pain' },
            { ctas: 'bg-amber-400', name: 'Patient B', note: 'Fracture' },
            { ctas: 'bg-green-500', name: 'Patient C', note: 'Follow-up' },
          ].map((row) => (
            <div key={row.name} className="flex items-center gap-2 rounded-lg bg-priage-surface px-2 py-2 text-xs">
              <span className={`h-3 w-3 shrink-0 rounded-sm ${row.ctas}`} />
              <div>
                <span className="font-semibold text-priage-navy">{row.name}</span>
                <span className="block text-priage-muted">{row.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-4 -left-4 w-28 rounded-xl border border-priage-line bg-white p-2 shadow-xl sm:w-32">
        <p className="text-[9px] text-priage-muted">Patient check-in</p>
        <p className="text-xs font-bold text-priage-navy">En route</p>
        <div className="mt-2 h-1.5 rounded-full bg-priage-line">
          <div className="h-full w-2/3 rounded-full bg-priage-teal" />
        </div>
      </div>
    </div>
  );
}

export function FeatureRow({
  title,
  body,
  bullets,
  imageLeft = true,
  overlay,
}: {
  title: string;
  body: string;
  bullets?: string[];
  imageLeft?: boolean;
  overlay?: ReactNode;
}) {
  const image = (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-priage-teal/20 via-priage-blue/10 to-priage-surface aspect-[4/3] min-h-[280px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-32 w-32 rounded-full bg-priage-teal/30 blur-2xl" />
        <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-priage-blue/20 blur-xl" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="rounded-2xl border border-white/60 bg-white/90 p-6 shadow-lg backdrop-blur">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-priage-teal/20 text-priage-blue">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <p className="mt-3 text-sm font-semibold text-priage-navy">Secure, hospital-grade workflow</p>
        </div>
      </div>
      {overlay}
    </div>
  );

  const text = (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-priage-navy sm:text-3xl">{title}</h2>
      <p className="mt-4 leading-relaxed text-priage-muted">{body}</p>
      {bullets && (
        <ul className="mt-6 divide-y divide-priage-line">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 py-3 text-sm font-medium text-priage-navy">
              <span className="text-priage-blue">→</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
      {imageLeft ? (
        <>
          {image}
          {text}
        </>
      ) : (
        <>
          {text}
          {image}
        </>
      )}
    </section>
  );
}

export function StatsBar({ heading, stats }: { heading: string; stats: { value: string; label: string }[] }) {
  return (
    <section className="border-y border-priage-line bg-priage-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl font-bold text-priage-navy sm:text-2xl">{heading}</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="mx-auto mb-4 h-px w-16 bg-priage-teal/50" />
              <p className="text-3xl font-bold text-priage-navy sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-priage-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
        <h2 className="text-3xl font-bold text-priage-navy">Frequently asked questions</h2>
        <div className="divide-y divide-priage-line">
          {items.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-priage-navy marker:content-none">
                {item.q}
                <span className="shrink-0 text-priage-blue transition group-open:rotate-90">›</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-priage-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTABanner({ title, buttonLabel, onClick }: { title: string; buttonLabel: string; onClick: () => void }) {
  return (
    <section className="relative overflow-hidden bg-priage-navy py-20">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-priage-teal blur-3xl" />
        <div className="absolute right-1/4 top-0 h-48 w-48 rounded-full bg-priage-blue blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <div className="rounded-2xl bg-white/95 px-8 py-10 shadow-xl">
          <h2 className="text-2xl font-bold text-priage-navy sm:text-3xl">{title}</h2>
          <button
            type="button"
            onClick={onClick}
            className="mt-6 rounded-lg bg-priage-blue px-8 py-3 text-sm font-semibold text-white transition hover:bg-priage-teal-dark"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const quotes = [
    {
      text: 'Checking in from my phone before I arrived made a stressful day much easier. I knew the hospital was expecting me.',
      name: 'Patient experience (pilot feedback)',
    },
    {
      text: 'The waiting room dashboard gave our team a single view of who needed attention — without more paperwork.',
      name: 'ED operations lead',
    },
    {
      text: 'Pre-triage guidance helped patients understand when the emergency room was truly the right place to go.',
      name: 'Clinical stakeholder',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-priage-blue">Don&apos;t just take our word for it</p>
        <h2 className="mt-2 text-3xl font-bold text-priage-navy">Built with hospitals and patients in mind</h2>
        <p className="mt-2 text-priage-muted">Early feedback from our alpha platform.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3 md:divide-x md:divide-priage-line">
          {quotes.map((q) => (
            <blockquote key={q.name} className="px-4 md:px-8">
              <p className="text-sm italic leading-relaxed text-priage-muted">&ldquo;{q.text}&rdquo;</p>
              <footer className="mt-4 text-sm font-bold text-priage-navy">{q.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
