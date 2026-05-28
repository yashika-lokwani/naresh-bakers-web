"use client";

import { useState } from "react";
import ImageWithLoading from "@/shared/ImageWithLoading";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Menu", href: "https://naresh-bakers.vercel.app/" },
  { label: "Schedule Consultation", href: "tel:+919005163430" },
  {
    label: "WhatsApp Us",
    href: "https://wa.me/919005163430?text=Hello I want to order a cake",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md border-b border-[#D4A5741A] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-linear-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <div className="w-15 h-15 relative">
                  <ImageWithLoading
                    className="object-contain"
                    src="/naresh-logo.png"
                    alt="Naresh Bakery logo"
                  />
                </div>
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#2D2822]">
                  Naresh Bakery
                </h1>
                <span className="text-xs font-medium text-[#866741] uppercase">
                  the bakery shop
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 text-[#2D2822]">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="hover:text-primary transition-colors duration-200 font-medium"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Hamburger Button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-[#F5EDE3] transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <div className="w-8 h-8 relative rotate-180">
                <ImageWithLoading
                  className="object-contain"
                  src={`/icons/hamburger.svg`}
                  alt={`naresh-logo.png`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${open ? "visible" : "invisible"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-[#F0E6D8]">
            <span className="text-[#866741] text-sm font-medium uppercase tracking-widest">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className=" flex items-center justify-center rounded-full hover:bg-[#F5EDE3] transition-colors text-[#2D2822] text-2xl leading-none"
            >
              <div className="w-4 h-4 relative">
                <ImageWithLoading
                  className="object-contain"
                  src={`/icons/close.svg`}
                  alt={`arrow-right`}
                />
              </div>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col px-6 py-3 gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-[#2D2822] font-medium text-lg py-3  last:border-none hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
