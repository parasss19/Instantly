import logo from "../assets/logo.svg";

const Privacy = () => {
  return (
    <div className="mt-20 px-6 max-w-5xl mx-auto font-[Geist]">
     
      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          <span className="text-yellow-500 flex items-center justify-center gap-2 mb-2">
            <img src={logo} alt="logo image" className="w-10 h-10" />
            Instantly
          </span>
          Privacy Policy
        </h1>
        <p className="mt-3 text-lg text-white/70"> Your words stay yours. Here’s how we protect your data. </p>
      </div>

      {/* Content */}
      <div className="space-y-10 text-white leading-relaxed">
        
        {/* Section 1 */}
        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm hover:border-white/20 transition">
          <h2 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-3">
            1. Introduction
          </h2>
          <p className="text-white/90 text-sm sm:text-base">
            This Privacy Policy describes how the{" "}
            <strong>Instantly AI Summarizer</strong> Chrome Extension handles
            your information. We built Instantly with privacy as a core
            principle your reading data stays with you, not us.
          </p>
        </section>

        {/* Section 2 */}
        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm hover:border-white/20 transition">
          <h2 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-3"> 2. Data Controller </h2>
          <p className="text-white/90 text-sm sm:text-base">
            The Instantly AI Summarizer Chrome Extension is developed by Paras
            Mehta. For privacy questions, reach us at{" "}
            <a
              href="mailto:parasss0708@gmail.com"
              className="text-gray-200 underline"
            >
              support@instantlyai.com
            </a>
          </p>
        </section>

        {/* Section 3 */}
        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm hover:border-white/20 transition">
          <h2 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-3">
            3. What Information We Collect and Why
          </h2>
          <p className="text-white/90 text-sm sm:text-base mb-4">
            Instantly does not send your content to our servers. Everything is
            processed locally in your browser. Here’s what we access:
          </p>

          <h3 className="font-semibold text-white mt-4">
            Article Content (for summarization)
          </h3>
          <ul className="list-disc ml-6 mt-2 text-white/90 text-sm space-y-2">
            <li>
              <strong>What we access:</strong> Text content of the web page you
              ask Instantly to summarize.
            </li>
            <li>
              <strong>How it’s accessed:</strong> Instantly’s content script
              runs only when you click the extension. The text is processed
              locally to generate a summary.
            </li>
            <li>
              <strong>Purpose:</strong> To provide you with concise summaries of
              long articles.
            </li>
          </ul>

          <h3 className="font-semibold text-white mt-6">AI API Key (optional)</h3>
          <ul className="list-disc ml-6 mt-2 text-white/90 text-sm space-y-2">
            <li>
              <strong>What we store:</strong> Gemini API key
              (e.g., Gemini), it is saved securely in your browser’s local
              storage.
            </li>
            <li>
              <strong>How it’s used:</strong> The key is used directly from your
              browser to call the AI API for improved summarization.
            </li>
            <li>
              <strong>We never see or transmit this key.</strong>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm hover:border-white/20 transition">
          <h2 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-3">
            4. How Information is Stored
          </h2>
          <ul className="list-disc ml-6 mt-2 text-white/90 text-sm space-y-2">
            <li>
              All data (article content, summaries, optional API keys) stays in{" "}
              <code>chrome.storage.local</code> on your device.
            </li>
            <li>
              We do not use servers or cloud storage. Nothing leaves your
              browser.
            </li>
            <li>
              You control your data. Clearing Chrome storage or uninstalling the
              extension deletes everything.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm hover:border-white/20 transition">
          <h2 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-3">
            5. Sharing Your Information
          </h2>
          <p className="text-white/90 text-sm sm:text-base">
            We never share, sell, or send your information anywhere. Requests go directly from your browser to the API
            provider (e.g., Google). We are not part of that data exchange.
          </p>
        </section>

        {/* Section 6 */}
        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm hover:border-white/20 transition">
          <h2 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-3">
            6. Your Rights
          </h2>
          <ul className="list-disc ml-6 mt-2 text-white/90 text-sm space-y-2">
            <li>
              <strong>Access:</strong> You can view all summaries directly in
              the extension.
            </li>
            <li>
              <strong>Delete:</strong> Clear data anytime from Chrome storage or
              uninstall Instantly.
            </li>
            <li>
              <strong>Portability:</strong> Export and back up your summaries if
              supported in future versions.
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm hover:border-white/20 transition">
          <h2 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-3">
            7. Changes to This Privacy Policy
          </h2>
          <p className="text-white/90 text-sm sm:text-base">
            We may update this Privacy Policy as Instantly evolves. Any updates
            will be reflected here and on the Chrome Web Store listing.
          </p>
        </section>

        {/* Section 8 */}
        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm hover:border-white/20 transition">
          <h2 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-3">
            8. Contact Us
          </h2>
          <p className="text-white/90 text-sm sm:text-base">
            Have questions? Reach us at{" "}
            <a
              href="mailto:parasss0708@gmail.com"
              className="text-gray-200 underline"
            >
              support@instantlyai.com
            </a>
            .
          </p>
        </section>

        <p className="text-sm text-white/70 mt-10 text-center">
          Last updated: September 12, 2025
        </p>
      </div>
    </div>
  );
};

export default Privacy;
