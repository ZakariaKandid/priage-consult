import { Link } from 'react-router-dom';

import { AppStoreBadges } from '../components/AppStoreBadges';
import { CTABanner, DeviceMockup, FAQ, FeatureRow, StatsBar, Testimonials } from '../components/ui';

type PageProps = { onBookDemo: () => void };

export function HomePage({ onBookDemo }: PageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-priage-surface to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-block rounded-full bg-priage-teal/15 px-3 py-1 text-xs font-semibold text-priage-teal-dark">
              Emergency department operations
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-priage-navy sm:text-5xl">
              Improve your emergency department&apos;s performance
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-priage-muted">
              Automate patient intake, pre-triage support, and live communication — so your team can
              prioritize true emergencies and give every patient clarity before and during their visit.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onBookDemo}
                className="rounded-lg bg-priage-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-priage-blue/25 transition hover:bg-priage-teal-dark"
              >
                Book a demo
              </button>
              <Link
                to="/for-hospitals"
                className="rounded-lg border border-priage-line px-6 py-3 text-sm font-semibold text-priage-navy transition hover:border-priage-teal hover:text-priage-blue"
              >
                For hospitals
              </Link>
            </div>
            <div className="mt-10">
              <AppStoreBadges />
            </div>
          </div>
          <div className="animate-fade-up lg:justify-self-end" style={{ animationDelay: '0.1s' }}>
            <DeviceMockup />
          </div>
        </div>
      </section>

      <StatsBar
        heading="Priage is built to help hospitals manage patient traffic — and help patients get the right care, faster."
        stats={[
          { value: 'AI Triage', label: 'remote assessments before walk-in' },
          { value: 'Live', label: 'waiting-room coordination & alerts' },
          { value: '3 Dashboards', label: 'Admittance · Triage · Waiting Room' },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <UseCaseCard
            title="AI pre-triage assessments"
            description="Patients answer guided questions remotely before walk-in. The AI builds a structured history, flags urgent symptoms, and sends a verified summary to clinical staff."
            to="/for-patients"
          />
          <UseCaseCard
            title="Hospital operations"
            description="Admittance, Triage, and Waiting Room dashboards with live messaging, escalation alerts, and a full operational picture for your team."
            to="/for-hospitals"
          />
          <UseCaseCard
            title="Patient peace of mind"
            description="Check in before you arrive, see remote wait times, complete forms digitally, and message your care team — all from your phone."
            to="/for-patients"
          />
        </div>
      </section>

      <FeatureRow
        title="One platform from intake to treatment"
        body="Priage connects the patient journey before arrival with the staff workspace inside the hospital — AI pre-triage, guest check-in, registered accounts, and real-time messaging on a shared encounter record."
        bullets={[
          'AI-guided remote patient intake and pre-triage assessment',
          'Automated patient history synthesis for clinical review',
          'Live waiting room management with patient-to-staff messaging',
          'Real-time alerts for symptom progression and escalation needs',
        ]}
        imageLeft
      />

      <Testimonials />

      <FAQ
        items={[
          {
            q: 'What is Priage?',
            a: 'Priage is an emergency-department operations platform. Patients complete an AI-guided pre-triage assessment before arriving, notify the hospital, and stay connected throughout their visit. Staff work from a live encounter workspace — Admittance, Triage, and Waiting Room dashboards with messaging and escalation alerts.',
          },
          {
            q: 'How does the AI pre-triage work?',
            a: 'Patients answer guided questions remotely before walk-in. The AI adapts follow-up questions based on new information, identifies urgent or life-threatening symptoms, and generates a structured patient history — reviewed by a medical professional before any clinical action is taken.',
          },
          {
            q: 'Who is Priage for?',
            a: 'Hospitals and clinics seeking better patient traffic management, and patients who want clarity and communication throughout their visit. We also support partner integrations via a platform API and can tailor the platform to your systems.',
          },
          {
            q: 'Is the product available today?',
            a: 'Priage is in alpha (v0.1). We are engaging with hospitals for pilots and demonstrations. Mobile apps are in development — store links will be added when published.',
          },
          {
            q: 'Does Priage replace clinical judgment?',
            a: 'No. Priage supports triage staff and patients with information and coordination. AI assessments are reviewed by a licensed professional. Clinical decisions remain with your team using your hospital\'s protocols.',
          },
          {
            q: 'Can it integrate with our systems?',
            a: 'Our backend includes a partner/platform intake API for software-to-software integration. Optional add-ons include remote wait times, custom form completion, and tailored intake workflows.',
          },
        ]}
      />

      <CTABanner title="Book a customized demo" buttonLabel="Book a technical walkthrough" onClick={onBookDemo} />
    </>
  );
}

function UseCaseCard({ title, description, to }: { title: string; description: string; to: string }) {
  return (
    <Link
      to={to}
      className="group rounded-2xl border border-priage-line bg-white p-6 shadow-sm transition hover:border-priage-teal hover:shadow-md"
    >
      <h3 className="text-lg font-bold text-priage-navy group-hover:text-priage-blue">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-priage-muted">{description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-priage-blue">Learn more →</span>
    </Link>
  );
}
