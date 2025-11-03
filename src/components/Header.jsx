import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg">
          <a href="#home" className="px-4 py-2 text-lg font-semibold tracking-tight text-white/90">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">Flames</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 mr-2 rounded-xl bg-white/90 text-gray-900 px-4 py-2 text-sm font-medium hover:bg-white transition"
            >
              Let’s talk
            </a>
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="md:hidden p-3 text-white/90"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg md:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="m-3 rounded-xl bg-white/90 text-gray-900 px-4 py-3 text-center text-sm font-medium hover:bg-white"
              >
                Let’s talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
