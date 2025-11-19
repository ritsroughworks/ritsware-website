// src/components/layout/PageLayout.jsx
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout({ children }) {
  return (
    <div
      className="min-h-screen theme-transition flex flex-col"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* Top container (can show subtle radial gradient via index.css utilities) */}
      <div className="w-full">
        <Header />
      </div>

      {/* Page content */}
      <main className="flex-1 max-w-7xl mx-auto px-6 md:px-12 py-12">
        {children}
      </main>

      <Footer />
    </div>
  );
}
