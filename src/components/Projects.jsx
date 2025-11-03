import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Dashboard',
    description: 'A glassmorphic analytics dashboard with real-time charts and account insights.',
    tags: ['React', 'Tailwind', 'D3'],
    url: '#',
  },
  {
    title: 'E-commerce UI Kit',
    description: 'Composable design system with accessible components and tokens.',
    tags: ['Design System', 'Figma', 'Accessibility'],
    url: '#',
  },
  {
    title: 'Micro-interactions',
    description: 'Collection of fluid UI animations and motion patterns for the web.',
    tags: ['Framer Motion', 'UX', 'Animation'],
    url: '#',
  },
];

function Card({ title, description, tags, url }) {
  return (
    <div className="group relative rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-xl">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
      <div className="relative">
        <div className="h-36 w-full rounded-2xl bg-gradient-to-br from-cyan-400/20 via-blue-400/10 to-purple-400/20 border border-white/20 mb-4" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/80">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <a
            href={url}
            className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white"
          >
            Visit <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 md:mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Selected Work</h2>
            <p className="mt-2 text-white/70">A mix of product design and frontend builds</p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-xl hover:bg-white/20 transition"
          >
            Get a quote
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
