import { Download, FileText, Brain, Settings2, ClipboardList } from "lucide-react";
import { FaChrome } from "react-icons/fa";

export default function HowToUse() {

  const steps = [
    {
      icon: FaChrome,
      title: "Open the Chrome Web Store",
      desc: "Visit the Instantly AI Summarizer Chrome Extension page and click Add to Chrome.",
      note: "Make sure you are signed in to your Google account.",
    },
    {
      icon: Download,
      title: "Install the Extension",
      desc: "Confirm the permissions and pin Instantly to your toolbar for quick access.",
      note: "Click the puzzle icon in Chrome and pin Instantly.",
    },
    {
      icon: Settings2,
      title: "Set Up Your API Key",
      desc: "Open Instantly → Settings to add your Gemini API key and choose your default summary style.",
      note: "Your key is stored locally and never sent to external servers.",
    },
  ];

  const useFlow = [
    {
      icon: Brain,
      title: "Summarize Any Page",
      desc: "Open any article, blog, or research page and click the Instantly icon to generate a summary.",
    },
    {
      icon: FileText,
      title: "Choose Summary Type",
      desc: "Select between Brief, Detailed, or Bullet Point summaries depending on your needs.",
      tip: "Great for quick news scans or deep research summaries.",
    },
    {
      icon: ClipboardList,
      title: "Copy & Reuse",
      desc: "Copy the summary to your clipboard in one click for notes, reports, or sharing.",
      tip: "Markdown formatting makes it easy to paste into docs or apps.",
    },
  ];

  return (
    <section className="mx-auto my-20 max-w-6xl px-6">
      {/* header */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-[Geist] text-3xl font-bold text-white sm:text-4xl"> How to Install </h2>
      </div>

      {/*install step */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="font-[Geist] relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-white/90" />
                </div>
                <h3 className="font-[Geist] text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <p className="text-sm text-white/95">{s.desc}</p>
              {s.note && <p className="mt-3 text-xs text-white/80">{s.note}</p>}
              <div
                className="pointer-events-none absolute -inset-8 rounded-2xl bg-white/5 opacity-0 blur-xl transition-opacity duration-300 hover:opacity-100"
                aria-hidden="true"
              />
            </div>
          );
        })}
      </div>

      {/* how to use Steps */}
      <div id="howToUse" className="mt-14 scroll-mt-24">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="font-[Geist] text-3xl font-bold text-white sm:text-4xl"> How to Use </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {useFlow.map((u, i) => {
            const Icon = u.icon;
            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-white/90" />
                  </div>
                  <h4 className="font-[Geist] text-base font-semibold text-white">{u.title}</h4>
                </div>
                <p className="text-sm text-white/95">{u.desc}</p>
                {u.tip && <p className="mt-3 text-xs text-white/80">Tip: {u.tip}</p>}
                <div
                  className="pointer-events-none absolute -inset-8 rounded-2xl bg-white/5 opacity-0 blur-xl transition-opacity duration-300 hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
