"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-slate-950 text-gray-600 dark:text-gray-400 py-4 transition-colors">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} Pilah
        Sampah — Dusun Sidoharjo,
        Kendal, Turi, Sleman
      </div>

      <div className="text-center text-xs mt-1">
        Program KKN PPM Universitas
        Gadjah Mada 2026
      </div>
    </footer>
  );
}