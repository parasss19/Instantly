import { useState } from "react";

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      title: "What is Instantly?",
      content:
        "Instantly is an AI-powered Chrome extension that summarizes any article, blog, or research page into clear and concise takeaways saving you time while keeping you informed.",
    },
    {
      title: "Is Instantly free to use?",
      content:
        "Yes! Instantly is free to install and use. You can generate summaries right away",
    },
    {
      title: "Do I need an API key to use it?",
      content:
        "Yes. You need one to use Instantly for summarization",
    },
    {
      title: "Where is my data stored?",
      content:
        "Your data and API key are stored locally in your browser using Chrome Storage. Nothing is sent to external servers your privacy comes first.",
    },
    {
      title: "What types of summaries can I generate?",
      content:
        "You can choose between Brief, Detailed, or Bullet Point summaries depending on your needs.",
    },
    {
      title: "Can I copy or export summaries?",
      content:
        "Yes. With one click, you can copy summaries to your clipboard and paste them anywhere.",
    },
    {
      title: "How do I contact support?",
      content:
        "You can reach us anytime at support@instantlyai.com.",
    },
    {
      title: "How do I uninstall or remove my data?",
      content:
        "To uninstall, simply remove Instantly from Chrome. Any saved data or API keys will also be cleared from your browser storage.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative z-10 mt-10 mb-5 max-w-6xl mx-auto w-full px-6 pb-6">
      <div className="flex flex-col md:flex-row md:gap-12">
        {/* Left side heading */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-2xl text-white font_instrument tracking-wider text-center md:text-left">
            Frequently Asked Questions
          </h3>
          <p className="mt-2 text-gray-400 text-sm">
            Everything you need to know about Instantly in one place.
          </p>
        </div>

        {/* Right side accordion */}
        <div className="md:w-2/3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/10 py-4"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="cursor-pointer w-full text-left text-white flex justify-between items-center"
              >
                <span className="font-medium">{faq.title}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-sm text-gray-300">{faq.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
