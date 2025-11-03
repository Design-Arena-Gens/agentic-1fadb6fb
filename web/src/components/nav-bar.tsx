"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Главная" },
  { href: "#books", label: "Книги" },
  { href: "#verse", label: "Стих дня" },
  { href: "#about", label: "О проекте" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <nav
        className={[
          "pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-6 rounded-3xl border border-white/40 px-6 py-4 transition-all duration-500",
          "soft-blur shadow-lg",
          isScrolled
            ? "bg-white/80 shadow-[0_18px_38px_-24px_rgba(60,47,37,0.55)] border-white/60"
            : "bg-white/65 shadow-[0_12px_24px_-18px_rgba(77,60,48,0.38)]",
        ].join(" ")}
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(243,215,161,0.9),rgba(216,181,106,0.55))] shadow-[0_10px_20px_-12px_rgba(63,47,37,0.6)]">
            <span className="text-2xl leading-none text-[rgba(85,63,45,0.95)]">📖</span>
            <span className="absolute -right-2 top-1 h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.92)] shadow-[0_0_12px_rgba(243,215,161,0.85)]" />
          </span>
          <div>
            <p className="font-serif text-xl font-semibold uppercase tracking-[0.18em] text-[rgba(77,49,33,0.95)]">
              Библия онлайн
            </p>
            <p className="text-xs uppercase tracking-[0.45em] text-[rgba(106,86,68,0.8)]">
              свет и покой
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-[rgba(92,72,57,0.92)]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative overflow-hidden rounded-full px-4 py-2 transition-all duration-300 hover:text-[rgba(63,47,37,0.95)]"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 -z-0 scale-90 rounded-full bg-[radial-gradient(circle_at_center,rgba(243,215,161,0.35),rgba(216,181,106,0.08))] opacity-0 transition-all duration-300 hover:scale-100 hover:opacity-100" />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
