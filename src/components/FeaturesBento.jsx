import { Brain, FileText, ShieldCheck, Settings, ClipboardList, Sparkles } from "lucide-react";

const features = [
  {
    title: "One-Click Summarization",
    desc: "Instantly condense any webpage, article, or blog into clear summaries with a single click.",
    icon: Brain,
    accent: "from-cyan-500/20 to-blue-500/10",
    badge: "AI",
    span: "col-span-2 sm:col-span-2",
  },
  {
    title: "Flexible Summary Styles",
    desc: "Choose between Brief, Detailed, or Bullet Point summaries to fit your workflow.",
    icon: FileText,
    accent: "from-purple-500/20 to-pink-500/10",
    badge: "Modes",
    span: "col-span-2 sm:col-span-2",
  },
  {
    title: "Privacy First",
    desc: "Your API key and data are stored locally in Chrome Storage and never shared externally.",
    icon: ShieldCheck,
    accent: "from-emerald-500/20 to-teal-500/10",
    badge: "Secure",
    span: "col-span-2 sm:col-span-2",
  },
  {
    title: "Simple Setup",
    desc: "Easily add your Gemini API key from the Options Page and start summarizing instantly.",
    icon: Settings,
    accent: "from-sky-500/20 to-indigo-500/10",
    badge: "Setup",
    span: "col-span-2 sm:col-span-2",
  },
  {
    title: "Quick Copy",
    desc: "Copy summaries to your clipboard with one click—perfect for notes, research, and writing.",
    icon: ClipboardList,
    accent: "from-amber-500/20 to-orange-500/10",
    badge: "Copy",
    span: "col-span-2 sm:col-span-2",
  },
  {
    title: "Beautiful Formatting",
    desc: "Enjoy auto-scroll output with clean, readable summaries formatted with Markdown support.",
    icon: Sparkles,
    accent: "from-pink-500/20 to-fuchsia-500/10",
    badge: "UI",
    span: "col-span-2 sm:col-span-2",
  },
];

export default function FeaturesBento() {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-6">
      {/* Header */}
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2 className="font-[Geist] text-3xl font-bold text-white sm:text-4xl">
          Powerful Features
        </h2>
        <p className="font-[Geist] mt-2 text-white/60">
          Instantly is your AI summarizer Chrome extension—built to help you read less and understand more with one-click summaries, flexible options, and a privacy-first design.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 font-[Geist]">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <article
              key={i}
              className={`${f.span} group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${f.accent} opacity-70`}
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Badge */}
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-xs text-white/80">
                  <span className="inline-block size-1.5 rounded-full bg-white/40" />
                  {f.badge}
                </div>

                {/* Icon + Title */}
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-white/90" />
                  </div>
                  <h3 className="font-[Geist] text-lg font-semibold text-white">
                    {f.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/70">
                  {f.desc}
                </p>
              </div>

              {/*  hover effect */}
              <div
                className="pointer-events-none absolute -inset-8 rounded-2xl bg-white/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}
