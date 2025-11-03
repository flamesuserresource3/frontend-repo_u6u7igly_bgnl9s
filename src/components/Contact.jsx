import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 md:p-12 backdrop-blur-xl shadow-2xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Let’s build something great</h3>
            <p className="mt-2 max-w-2xl text-white/80">
              I’m open to freelance work, product collaborations, and full-time roles. Share your idea and timeline — I’ll reply within 24 hours.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@example.com"
                className="rounded-xl bg-white text-gray-900 px-5 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition"
              >
                <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Email me</span>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl hover:bg-white/20 transition"
              >
                <span className="inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl hover:bg-white/20 transition"
              >
                <span className="inline-flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Flames — UI/UX Designer & Frontend Developer
        </p>
      </div>
    </section>
  );
}
