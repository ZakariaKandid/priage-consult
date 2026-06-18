import { CTABanner } from '../components/ui';

type PageProps = { onBookDemo: () => void };

const TEAM = [
  {
    name: 'John Surette',
    role: 'Co-founder & Lead Developer',
    photo: '/team/john.jpg',
    initials: 'JS',
  },
  {
    name: 'Aws Falah',
    role: 'Developer',
    photo: '/team/aws.jpg',
    initials: 'AF',
  },
  {
    name: 'Tai Adewoye',
    role: 'Co-founder & Outreach Lead',
    photo: '/team/tai.jpg',
    initials: 'TA',
  },
  {
    name: 'Zakaria Kandid',
    role: 'Developer',
    photo: '/team/zak.jpg',
    initials: 'ZK',
  },
];

const PLATFORM_FEATURES = [
  {
    num: '01',
    title: 'AI Pre-Triage Assessments',
    body: 'Patients start an encounter online before walk-in, answering tailored questions to build an effective history about their complaint. Our AI identifies urgent and life-threatening symptoms, extracts clinically relevant information, and adapts follow-up questions in real time — bridging communication gaps for patients with disabilities or language barriers.',
  },
  {
    num: '02',
    title: 'Patient Traffic & Monitoring',
    body: 'Real-time tracking of patients across the full care pipeline. Manage queues, waiting rooms, and live messaging. Automatically re-assess incoming updates and flag at-risk patients if symptoms progress — keeping critical cases visible without adding paperwork.',
  },
  {
    num: '03',
    title: 'Dual-App Platform',
    body: 'A patient-facing app/webapp for queuing appointments and reporting complaints — and a clinic-facing app where staff access dashboards, track patients, and coordinate care. One shared encounter record from intake to treatment.',
  },
];

const DASHBOARDS = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    label: 'Admittance',
    desc: 'Expected and incoming patient views — see who is en route and confirm arrivals instantly.',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'Triage',
    desc: 'Physical assessments by clinicians alongside our AI pre-assessment — CTAS-ready with full patient history.',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    label: 'Waiting Room',
    desc: 'Live queue management, wait-time visibility, real-time messaging with patients, and escalation alerts.',
  },
];

export function AboutPage({ onBookDemo }: PageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-priage-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-priage-teal">About us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            We're building infrastructure for better emergency care
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Priage was founded to address a systemic problem: overloaded emergency departments, patients left
            uncertain in waiting rooms, and care teams stretched thin. We believe technology should work
            with patients and enable hospitals to provide more care with less friction.
          </p>
        </div>
      </section>

      {/* Mission + What We're Building */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-priage-navy">Our mission</h2>
            <p className="mt-4 leading-relaxed text-priage-muted">
              Canadian emergency departments face unprecedented demand. Too many visits could be managed in
              primary care; too many patients leave without being seen. Priage targets the gap before treatment:
              pre-arrival intake, AI-assisted pre-triage support, and live coordination so true emergencies are
              prioritized and every patient has a clearer path through the system.
            </p>
            <p className="mt-4 leading-relaxed text-priage-muted">
              We will not replace doctors or triage nurses — we amplify their work with better information,
              earlier signal, and continuous connection from the waiting room to the bedside. We also actively
              work to bridge potential biases and accessibility gaps for marginalized individuals and anyone
              with communication barriers, so that the right questions are asked in the right way.
            </p>
          </div>

          <div className="rounded-3xl border border-priage-line bg-priage-surface p-8">
            <h2 className="text-2xl font-bold text-priage-navy">What we're building</h2>
            <p className="mt-3 text-sm text-priage-muted">A platform service tailored to your systems.</p>
            <ul className="mt-6 space-y-5 text-sm text-priage-muted">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-priage-teal">01</span>
                <div>
                  <span className="font-semibold text-priage-navy">AI Pre-Triage</span> — remote assessments
                  that build patient history, flag urgent symptoms, and send verified summaries to clinical staff.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-priage-teal">02</span>
                <div>
                  <span className="font-semibold text-priage-navy">Patient App / Webapp</span> — queue
                  appointments, report complaints, receive wait times, and complete online forms before arrival.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-priage-teal">03</span>
                <div>
                  <span className="font-semibold text-priage-navy">Clinic App</span> — Admittance, Triage,
                  and Waiting Room dashboards with live alerts, messaging, and partner API integration.
                </div>
              </li>
            </ul>
            <p className="mt-6 text-xs text-priage-muted">Version 0.1 Alpha — actively in development</p>
          </div>
        </div>
      </section>

      {/* Platform Features Deep Dive */}
      <section className="border-t border-priage-line bg-priage-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-priage-blue">Platform overview</p>
          <h2 className="mt-3 text-3xl font-bold text-priage-navy">How Priage works</h2>
          <p className="mt-3 max-w-2xl text-priage-muted">
            A seamless loop from the moment a patient decides to seek care — to the moment they're treated.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PLATFORM_FEATURES.map((f) => (
              <div
                key={f.num}
                className="rounded-2xl border border-priage-line bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                <span className="text-3xl font-black text-priage-teal/40">{f.num}</span>
                <h3 className="mt-3 text-lg font-bold text-priage-navy">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-priage-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Stages */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-priage-navy sm:text-3xl">
            Three dashboards. One operational picture.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-priage-muted">
            Each stage of the patient journey has a dedicated view — so nothing falls through the cracks.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {DASHBOARDS.map((d) => (
              <div
                key={d.label}
                className="flex flex-col gap-4 rounded-2xl border border-priage-line bg-white p-7 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-priage-teal/15 text-priage-blue">
                  {d.icon}
                </div>
                <h3 className="font-bold text-priage-navy">{d.label}</h3>
                <p className="text-sm leading-relaxed text-priage-muted">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-priage-line bg-priage-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-priage-navy">Meet the team</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-priage-muted">
            A small, driven group united by a shared belief that emergency care can be more human, more
            connected, and less chaotic.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-2xl border border-priage-line bg-white shadow-sm transition hover:shadow-lg"
              >
                {/* Photo */}
                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-priage-teal/10 to-priage-blue/10">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="font-bold text-priage-navy">{member.name}</h3>
                  <p className="mt-1 text-sm text-priage-blue">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional add-ons callout */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-priage-line bg-priage-surface p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-priage-navy">Optional platform add-ons</h2>
          <p className="mt-3 max-w-2xl text-priage-muted">
            We tailor our platform to your systems. Depending on your goals, you can enable:
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Remote wait times', desc: 'Patients see live estimates before they arrive.' },
              { label: 'Better summaries & assessments', desc: 'AI-generated histories with transparent question logs and test recommendations.' },
              { label: 'Online form completion', desc: 'Insurance, coverage, and custom intake forms — completed digitally before the patient walks in.' },
            ].map((item) => (
              <li key={item.label} className="flex flex-col gap-2 rounded-xl border border-priage-line bg-white p-5">
                <span className="font-semibold text-priage-navy">{item.label}</span>
                <span className="text-sm text-priage-muted">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-priage-navy">Partner with us</h2>
        <p className="mt-4 text-priage-muted">
          We are meeting with hospitals, health innovators, and investors who share our vision for emergency
          care that works for patients and staff. Book a demo to start the conversation.
        </p>
        <button
          type="button"
          onClick={onBookDemo}
          className="mt-8 rounded-lg bg-priage-blue px-8 py-3 text-sm font-semibold text-white transition hover:bg-priage-teal-dark"
        >
          Book a demo
        </button>
      </section>

      <CTABanner title="Let's build a better waiting room — together" buttonLabel="Schedule a walkthrough" onClick={onBookDemo} />
    </>
  );
}
