"use client";

import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Templates", href: "#templates" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-violet-500" />
          <span className="text-xl font-bold text-white">ReelAI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button className="text-sm text-gray-300 hover:text-white">Login</button>
          <button className="rounded-full bg-violet-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-violet-500">
            Start Free
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <div className="flex flex-col gap-5 px-6 py-6">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-300 hover:text-white">
                {item.name}
              </a>
            ))}
            <button className="rounded-lg bg-violet-600 py-3 text-white">Start Free</button>
          </div>
        </div>
      )}
    </header>
  );
}