import { FormEvent, ReactNode, useEffect, useState } from 'react';

const WORK_OPTIONS = [
  'Hospital executive / administration',
  'Clinical leadership (nursing, physician)',
  'Emergency department operations',
  'Health IT / informatics',
  'Investor / partner',
  'Patient advocate / community health',
  'Other',
];

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  workType: string;
  agreed: boolean;
};

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  workType: '',
  agreed: false,
};

export function DemoModal({ open, onClose }: DemoModalProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setForm(initialForm);
    }
  }, [open]);

  if (!open) return null;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.agreed || !form.email.trim()) return;
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="demo-title">
      <button
        type="button"
        className="absolute inset-0 bg-priage-navy/60 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-priage-muted hover:bg-priage-surface hover:text-priage-ink"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-priage-teal/20 text-priage-teal">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 id="demo-title" className="mt-4 text-xl font-bold text-priage-navy">
              Demo request received
            </h2>
            <p className="mt-2 text-priage-muted">
              Thank you, {form.firstName}. We&apos;ll reach out at {form.email} to schedule your walkthrough.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-lg bg-priage-blue px-6 py-2.5 text-sm font-semibold text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id="demo-title" className="pr-8 text-xl font-bold text-priage-navy">
              Book a customized demo
            </h2>
            <p className="mt-1 text-sm text-priage-muted">Tell us who you are and what you&apos;d like to explore.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name" id="demo-first">
                  <input
                    id="demo-first"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    placeholder="Enter your first name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Last name" id="demo-last">
                  <input
                    id="demo-last"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    placeholder="Enter your last name"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Email" id="demo-email" required>
                <input
                  id="demo-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter your email"
                  className={inputClass}
                />
              </Field>

              <Field label="How can we help?" id="demo-message">
                <textarea
                  id="demo-message"
                  required
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Please tell us a bit about what you would like to discuss."
                  className={inputClass}
                />
              </Field>

              <Field label="What type of work do you do?" id="demo-work">
                <select
                  id="demo-work"
                  required
                  value={form.workType}
                  onChange={(e) => setForm({ ...form, workType: e.target.value })}
                  className={inputClass}
                >
                  <option value="">Choose the most relevant option</option>
                  {WORK_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              <label className="flex cursor-pointer items-start gap-2 text-sm text-priage-muted">
                <input
                  type="checkbox"
                  required
                  checked={form.agreed}
                  onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                  className="mt-1 rounded border-priage-line text-priage-blue focus:ring-priage-teal"
                />
                <span>
                  I agree with the{' '}
                  <span className="text-priage-blue">Terms</span> and{' '}
                  <span className="text-priage-blue">Privacy Policy</span>
                </span>
              </label>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="rounded-lg bg-priage-blue px-8 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-priage-teal-dark"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const inputClass =
  'w-full rounded-lg border border-priage-line px-3 py-2.5 text-sm text-priage-ink placeholder:text-priage-muted/60 focus:border-priage-teal focus:outline-none focus:ring-2 focus:ring-priage-teal/30';

function Field({
  label,
  id,
  required,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-priage-navy">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {children}
    </div>
  );
}
