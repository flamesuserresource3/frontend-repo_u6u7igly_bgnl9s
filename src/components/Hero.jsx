import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-blue-500/20 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                Available for freelance
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                UI/UX Designer &
                <br />
                Frontend Developer
              </h1>
              <p className="mt-4 text-white/80 text-base md:text-lg max-w-xl">
                I craft delightful, accessible interfaces blending usability and visual polish. Specialized in design systems, micro-interactions, and modern web tech.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl hover:bg-white/20 transition"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
                <div className="ml-1 flex items-center gap-2">
                  <a
                    aria-label="GitHub"
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/30 bg-white/10 p-3 text-white/90 hover:bg-white/20 backdrop-blur-xl transition"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/30 bg-white/10 p-3 text-white/90 hover:bg-white/20 backdrop-blur-xl transition"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
                {[
                  'Product Design',
                  'Design Systems',
                  'React',
                  'Next.js',
                  'Tailwind',
                  'Framer Motion',
                ].map((chip) => (
                  <div
                    key={chip}
                    className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs text-white/80 text-center backdrop-blur-xl"
                  >
                    {chip}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2 h-[420px] sm:h-[520px] md:h-[560px] rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
