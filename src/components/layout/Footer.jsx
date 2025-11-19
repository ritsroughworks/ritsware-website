// src/components/layout/Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full mt-8 py-3 bg-transparent border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-gray-400 text-sm">
        <div className="flex items-center justify-between">
          <div>© {new Date().getFullYear()} RITSware — All rights reserved.</div>
          <div className="text-sm">Built for healthcare, engineering & enterprise.</div>
        </div>
      </div>
    </footer>
  );
}
