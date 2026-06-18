import { AppStoreBadges } from '../components/AppStoreBadges';
import { CTABanner, FAQ, FeatureRow, HeroSplit, StatsBar, Testimonials } from '../components/ui';

type PageProps = { onBookDemo: () => void };

export function ForPatientPage({ onBookDemo }: PageProps) {
  return (
    <>
      <HeroSplit
        label="Patient experience"
        title="Clarity for patients. Built for the digital age."
        description="Start your care before you walk in — answer a few guided questions, notify your hospital, and stay connected with your care team from the phone you already carry."
        ctaLabel="Book a demo for your hospital"
        onCta={onBookDemo}
        dark
        imageSide="right"
      />

      <StatsBar
        heading="Priage helps patients access smarter, more coordinated emergency care."
        stats={[
          { value: 'Pre-arrival', label: 'AI assessment before you walk in' },
          { value: 'Real-time', label: 'wait times & status updates' },
          { value: 'Connected', label: 'messaging with your care team' },
        ]}
      />

      {/* AI Pre-Triage for Patients */}
      <FeatureRow
        title="Your health history — built by AI, reviewed by humans"
        body="Before you arrive, Priage walks you through a set of tailored questions about your complaint. Our AI adapts in real time, asking the right follow-ups to capture what matters most — and flags anything urgent immediately. The result is a clear, structured summary ready for your care team the moment you walk in."
        bullets={[
          'Guided questions adapted to your specific symptoms',
          'Identifies urgent or life-threatening signs early',
          'Designed to be inclusive — accessible for everyone regardless of medical knowledge',
          'Bridges communication gaps for patients with disabilities or language barriers',
        ]}
        imageLeft={false}
      />

      {/* Stay informed */}
      <FeatureRow
        title="Stay informed throughout your visit"
        body="Your encounter workspace shows where you are in the journey — from expected arrival through triage and waiting — with a direct line to staff when something changes. See remote wait times so you know what to expect before you leave home."
        bullets={[
          'Live status timeline you can actually understand',
          'Remote wait-time estimates before you arrive',
          'Message your care team directly from your device',
          'Profile and visit details in one place',
        ]}
        imageLeft
        overlay={
          <div className="absolute bottom-6 left-6 rounded-xl border border-priage-line bg-white p-4 shadow-lg">
            <p className="text-xs text-priage-muted">Your status</p>
            <p className="text-lg font-bold text-priage-navy">Waiting room</p>
            <p className="mt-1 text-xs text-priage-teal-dark">Updates enabled</p>
          </div>
        }
      />

      {/* Complete forms online */}
      <section className="bg-priage-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-priage-blue">Less paperwork</p>
              <h2 className="mt-3 text-2xl font-bold text-priage-navy sm:text-3xl">
                Complete forms before you even arrive
              </h2>
              <p className="mt-4 leading-relaxed text-priage-muted">
                No more clipboards in the waiting room. Insurance details, coverage information, and custom intake
                forms can all be completed digitally ahead of time — so when you arrive, your care team is ready.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Insurance & coverage' },
                { label: 'Medical history forms' },
                { label: 'Custom clinic forms' },
                { label: 'Digital signatures' },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-priage-line bg-white px-5 py-4 shadow-sm"
                >
                  <span className="text-sm font-medium text-priage-navy">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FeatureRow
        title="Meaningful connection with your care team"
        body="Waiting rooms can leave patients feeling disconnected and forgotten. Priage keeps a live link between you and your care team — so you feel heard, and clinicians have the context they need without extra phone tag or guesswork."
        imageLeft={false}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <AppStoreBadges />
      </section>

      <Testimonials />

      <FAQ
        items={[
          {
            q: 'What is the AI pre-triage assessment?',
            a: 'Before your walk-in, Priage asks you guided questions about your complaint. The AI adapts follow-ups in real time, builds a structured patient history, and flags any urgent symptoms — all reviewed by clinical staff before you arrive.',
          },
          {
            q: 'Do I need an account?',
            a: 'You can use Quick Check-In as a guest or create an account for visit history, messaging, remote wait times, and the Priage symptom assistant.',
          },
          {
            q: 'Is Priage medical advice?',
            a: 'Priage provides guidance and coordination, not a diagnosis. Always call emergency services for life-threatening emergencies.',
          },
          {
            q: 'Can I complete forms digitally?',
            a: 'Yes. Insurance, coverage, and custom clinic forms can be filled out before you arrive — so there\'s no paperwork to deal with at the front desk.',
          },
          {
            q: 'When will the mobile app be in app stores?',
            a: 'We are preparing App Store and Google Play releases. Badges on this site will link to downloads when available.',
          },
          {
            q: 'How does my hospital get Priage?',
            a: 'Hospitals partner with us for pilots. Ask your facility to book a demo, or contact us if you represent a health organization.',
          },
        ]}
      />

      <CTABanner title="Bring Priage to your community" buttonLabel="Request a hospital demo" onClick={onBookDemo} />
    </>
  );
}
