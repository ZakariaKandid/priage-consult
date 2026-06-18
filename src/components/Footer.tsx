import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { AppStoreBadges } from './AppStoreBadges';

export function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleMeetingSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  }

  return (
    <footer className="bg-priage-footer text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div>
            <Link to="/" className="inline-block rounded-lg bg-white px-3 py-2 shadow-sm">
              <img src="/logo.png" alt="Priage" className="h-8 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/85">
              Emergency department operations — from pre-arrival intake through live waiting-room
              coordination.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <SocialIcon label="Email" icon="email" />
              <SocialIcon label="LinkedIn" icon="linkedin" />
              <SocialIcon label="Instagram" icon="instagram" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="underline-offset-4 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/for-hospitals" className="underline-offset-4 hover:underline">
                  For Hospitals
                </Link>
              </li>
              <li>
                <Link to="/for-patients" className="underline-offset-4 hover:underline">
                  For Patients
                </Link>
              </li>
              <li>
                <Link to="/about" className="underline-offset-4 hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
            <div className="mt-8">
              <AppStoreBadges variant="light" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Request a meeting</h3>
            <p className="mt-2 text-sm text-white/80">Share your email and we&apos;ll reach out when we&apos;re ready.</p>
            <form onSubmit={handleMeetingSubmit} className="mt-4">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-xl border-0 bg-white px-4 py-3 text-priage-ink placeholder:text-priage-muted/70 focus:ring-2 focus:ring-priage-teal"
              />
              <button
                type="submit"
                className="mt-3 w-full rounded-full bg-priage-footer-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-priage-navy transition hover:brightness-110 sm:w-auto"
              >
                Submit
              </button>
              {submitted && (
                <p className="mt-2 text-sm text-priage-teal" role="status">
                  Thanks — we&apos;ll be in touch soon.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/70">
          © {new Date().getFullYear()} Priage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ label, icon }: { label: string; icon: 'email' | 'linkedin' | 'instagram' }) {
  return (
    <span
      className="flex h-10 w-10 cursor-default items-center justify-center rounded-full border border-white/30 bg-white/10"
      aria-label={label}
      title={`${label} (coming soon)`}
    >
      {icon === 'email' && (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      )}
      {icon === 'linkedin' && (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )}
      {icon === 'instagram' && (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )}
    </span>
  );
}
