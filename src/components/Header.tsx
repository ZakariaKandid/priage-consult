import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

type HeaderProps = {
  onBookDemo: () => void;
};

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/for-hospitals', label: 'For Hospitals', end: false },
  { to: '/for-patients', label: 'For Patients', end: false },
  { to: '/about', label: 'About Us', end: false },
] as const;

function navLinkClass({ isActive }: { isActive: boolean }) {
  return [
    'relative whitespace-nowrap px-1 py-2 text-[15px] font-medium tracking-tight transition-colors',
    isActive ? 'text-priage-blue' : 'text-priage-navy/75 hover:text-priage-blue',
    isActive
      ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-priage-blue'
      : '',
  ].join(' ');
}

export function Header({ onBookDemo }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-priage-line/50 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5 sm:px-8 lg:h-[4.25rem] lg:px-10">
        <Link
          to="/"
          className="flex shrink-0 items-center"
          onClick={() => setMobileOpen(false)}
          aria-label="Priage home"
        >
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:gap-10 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <button
            type="button"
            onClick={onBookDemo}
            className="hidden rounded-lg bg-priage-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-priage-teal-dark md:inline-flex"
          >
            Book a demo
          </button>
          <button
            type="button"
            className="inline-flex rounded-lg border border-priage-line/80 p-2.5 text-priage-navy md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-priage-line/60 bg-white md:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Main mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    'rounded-lg px-3 py-3 text-base font-medium transition-colors',
                    isActive
                      ? 'bg-priage-teal/10 text-priage-blue'
                      : 'text-priage-navy hover:bg-priage-surface',
                  ].join(' ')
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onBookDemo();
              }}
              className="mt-2 rounded-lg bg-priage-blue px-4 py-3 text-sm font-semibold text-white"
            >
              Book a demo
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
