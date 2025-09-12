import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
const AppLayout = () => {
  return (
    <div className="min-h-screen w-full bg-stone-900 relative">
      {/* Rich Burgundy Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 50% 50%, 
          rgba(220, 38, 38, 0.2) 0%, 
          rgba(220, 38, 38, 0.12) 25%, 
          rgba(220, 38, 38, 0.06) 35%, 
          transparent 50%
        )
      `,
          backgroundSize: "100% 100%",
        }}
      />

      {/* Layout */}
      <div className="my_container">
        <div className="px-6 pt-4">
          <ScrollToTop />
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
