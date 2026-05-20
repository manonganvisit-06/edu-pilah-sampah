"use client";

import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Beranda", href: "/#beranda" },
  { name: "Jenis Sampah", href: "/#jenis-sampah" },
  { name: "Tips Memilah", href: "/#tips-pilah" },
  { name: "Video", href: "/#video" },
  { name: "Tentang", href: "/#tentang" },
];

export default function AppNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] =
    useState(false);
  const [mounted, setMounted] =
    useState(false);
  const { theme, setTheme } =
    useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-gray-50 dark:bg-slate-900 fixed w-full z-50 top-0 border-b border-slate-700 dark:border-slate-50 transition-colors">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-green-600 dark:text-green-700">
          Pilah Sampah
        </a>

        {/* Dark Mode Button */}
        {mounted && (
          <button
            onClick={() =>
              setTheme(
                theme === "dark"
                  ? "light"
                  : "dark"
              )
            }
            className="p-2 rounded-lg border border-gray-700 dark:border-gray-50 hover:bg-gray-300 dark:hover:bg-slate-700 transition"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-gray-50" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>
        )}

        {/* Right Section */}
        <div className="flex items-center gap-3 md:order-2">
          <a
            href="/kalkulator"
            className="text-gray-50 bg-green-600 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-800 px-3 py-2 rounded text-sm"
          >
            Kalkulator
          </a>

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-slate-900 dark:text-gray-50"
          >
            ☰
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`block py-2 px-3 rounded md:p-0 ${
                      "text-gray-700 hover:text-green-600 dark:text-gray-50"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}