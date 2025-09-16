import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  const navigate = useNavigate();

  const handleScroll = () => {
    const section = document.getElementById("howToUse");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-5 z-30 mx-auto max-w-6xl">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#1c1c1c]/70 px-4 py-3 sm:px-6 shadow-lg backdrop-blur-md">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex cursor-pointer items-center gap-2"
        >
          <img src={logo} alt="Instantly logo" className="w-8 h-8 rounded-full" />
          <span className="font_instrument text-xl sm:text-2xl font-medium italic tracking-wide text-white">
            Instantly
          </span>
        </div>

        {/* How to use */}
        <nav className="hidden sm:flex items-center gap-6">
          <button
            onClick={handleScroll}
            className="cursor-pointer relative text-gray-300 transition-colors duration-200 hover:text-white"
          >
            <span className="font_instrument text-base sm:text-lg ">How to use</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>

        {/*  CTA */}
        <div>
          <a
            href="https://chromewebstore.google.com/detail/ai-summary-for-blogs-and/kcjdbncjlcjdcbkimdeidcfablopnbbb"
            target="blank"
            className="rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-300 px-4 py-2 text-sm sm:text-base font_instrument font-medium tracking-wide text-black shadow-md transition-all duration-200 hover:shadow-yellow-400/30 hover:scale-105 active:scale-95"
          >
            Install
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
