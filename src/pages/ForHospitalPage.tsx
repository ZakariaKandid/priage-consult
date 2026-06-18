import { CTABanner, FAQ, FeatureRow, HeroSplit, StatsBar } from '../components/ui';

type PageProps = { onBookDemo: () => void };

export function ForHospitalPage({ onBookDemo }: PageProps) {
  return (
    <>
      <HeroSplit
        label="For hospitals & clinics"
        title="We deliver results — without adding busywork."
        description="Automate intake, surface triage-ready AI assessments, and give your care team a live operational view — built on encounters your staff already understands."
        ctaLabel="Book a demo"
        onCta={onBookDemo}
        dark
        imageSide="right"
      />

      {/* AI Pre-Triage Feature Row */}
      <FeatureRow
        title="AI-powered pre-triage: better data before the patient walks in"
        body="Patients complete a guided assessment remotely before their walk-in. Our AI builds a structured patient history, identifies urgent or life-threatening symptoms, and flags potential symptom progression — all verified by your clinical staff before action is taken."
        bullets={[
          'Identifies urgent and life-threatening emergencies automatically',
          'Adapts follow-up questions based on new information in real time',
          'Bridges communication gaps for patients with disabilities or language barriers',
          'Transparent logs: questions asked, AI predictions, and recommended tests',
        ]}
        imageLeft
      />

      {/* Patient Traffic Feature Row */}
      <FeatureRow
        title="Priage is for clerks, nurses, and physicians"
        body="From expected arrivals through triage and the waiting room, Priage moves structured information to the right people at the right time — so documentation and handoffs take less effort and fewer details are lost. Patients are automatically re-assessed and flagged if symptoms worsen while they wait."
        bullets={[
          'Decrease repetitive documentation and intake friction',
          'Improve accuracy with patient-submitted context and AI history',
          'Reduce strain on frontline staff with prioritized escalation alerts',
          'Real-time queue management and wait-time monitoring',
        ]}
        imageLeft={false}
      />

      <StatsBar
        heading="Built for the realities of Canadian emergency departments"
        stats={[
          { value: 'Admittance', label: 'expected & incoming patient views' },
          { value: 'Triage', label: 'AI assessments + CTAS vitals' },
          { value: 'Waiting Room', label: 'live grid, messaging & escalations' },
        ]}
      />

      {/* How Priage fits your ED */}
      <section className="bg-priage-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-priage-navy sm:text-3xl">
            How Priage fits your ED
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-priage-muted">
            A platform service tailored to your systems — with three dedicated dashboards for every stage.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Patient notifies you',
                desc: 'Guest or registered check-in with chief complaint. AI pre-triage begins immediately — building history before arrival.',
              },
              {
                step: '2',
                title: 'Admittance dashboard',
                desc: 'Staff see EXPECTED arrivals and confirm ADMITTED status. AI assessment summary is already waiting.',
              },
              {
                step: '3',
                title: 'Triage dashboard',
                desc: 'Clinicians run physical assessments alongside the AI history. CTAS scoring, vitals, and clinical notes in one view.',
              },
              {
                step: '4',
                title: 'Waiting room dashboard',
                desc: 'Monitor queues, message patients, act on escalations. At-risk patients are auto-flagged if symptoms progress.',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-priage-line bg-white p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-priage-teal/20 text-sm font-bold text-priage-blue">
                  {item.step}
                </span>
                <h3 className="mt-4 font-bold text-priage-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-priage-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional add-ons */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-priage-line bg-priage-surface p-8 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-priage-blue">Platform add-ons</p>
          <h2 className="mt-3 text-2xl font-bold text-priage-navy">Enable what you need</h2>
          <p className="mt-3 max-w-2xl text-priage-muted">
            We are a platform service and want to tailor our software to your systems. Choose the capabilities
            that fit your workflow:
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              {
                label: 'Remote wait times',
                desc: 'Patients see live estimates before they leave home — reducing unnecessary walk-ins and managing expectations.',
              },
              {
                label: 'Better summaries & assessments',
                desc: 'AI-generated patient histories with a transparent log of questions asked, condition predictions, and recommended tests for clinical review.',
              },
              {
                label: 'Online form completion',
                desc: 'Insurance, coverage, and custom intake forms completed digitally before arrival — eliminating front-desk friction.',
              },
            ].map((item) => (
              <li key={item.label} className="flex flex-col gap-3 rounded-xl border border-priage-line bg-white p-6 shadow-sm">
                <div className="h-1 w-8 rounded-full bg-priage-teal" />
                <span className="font-semibold text-priage-navy">{item.label}</span>
                <span className="text-sm leading-relaxed text-priage-muted">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ
        items={[
          {
            q: 'How does the AI pre-triage work?',
            a: 'Patients answer guided questions remotely before walking in. The AI builds a structured history, adapts follow-up questions based on new information, and flags urgent symptoms. All assessments are sent to clinical staff for verification — your team remains in control at every step.',
          },
          {
            q: 'Is the solution aligned with accreditation and clinical standards?',
            a: 'Priage is designed to support — not replace — your triage and clinical protocols. AI assessments are reviewed by a medical professional before any action. We recommend reviewing workflow fit with your quality and clinical leads during a pilot.',
          },
          {
            q: 'Can it integrate with existing systems?',
            a: 'Yes. Our backend exposes a partner/platform intake API for external software, alongside first-party hospital and patient apps.',
          },
          {
            q: 'What level of customization is possible?',
            a: 'Hospital configuration, workflow rules, custom forms, and integrations can be discussed for your site. Our alpha focuses on admit, triage, and waiting-room operations.',
          },
          {
            q: 'What results can we expect?',
            a: 'Goals include reduced intake friction, better visibility of waiting patients, fewer walk-outs through proactive communication, and faster handoffs with structured AI-generated data. Outcomes depend on your baseline and adoption.',
          },
          {
            q: 'What support do you offer?',
            a: 'Training, onboarding, and follow-up for pilot partners. Bilingual support can be discussed as we expand deployments.',
          },
        ]}
      />

      <CTABanner title="See Priage in your ED context" buttonLabel="Book a technical walkthrough" onClick={onBookDemo} />
    </>
  );
}
