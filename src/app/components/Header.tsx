"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "IKMC", href: "/ikmc" },
    { name: "IKSC", href: "/iksc" },
    { name: "IKLC", href: "/iklc" },
  ];

  // Stripe-style scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Stripe-style Navigation */}
        <div
          className={`
          bg-white/95 backdrop-blur-sm
          transition-all duration-200 ease-out
          ${isScrolled ? "border-b border-gray-200/60 shadow-sm" : "border-b border-transparent"}
        `}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Left Logo - Innovative Learning */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center group">
                  <div className="relative mr-3">
                    <Image
                      src="/Innovative_Learning_Logo.png"
                      alt="Innovative Learning"
                      width={32}
                      height={32}
                      className="h-8 w-8 transition-transform duration-200 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      Innovative Learning
                    </h1>
                  </div>
                </Link>
              </div>

              {/* Center Navigation - Desktop */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-gray-600 hover:text-gray-900 font-normal text-sm transition-colors duration-200 group">
                    <span className="relative z-10">{item.name}</span>
                    {/* Stripe's signature underline effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></div>
                  </Link>
                ))}

                {/* Stripe-style CTA Button */}
                <Link
                  href="/contact"
                  className="ml-4 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-md transition-colors duration-200">
                  Contact Us
                </Link>
              </nav>

              {/* Right Logo - Inventive Learning (Desktop) */}
              <div className="hidden lg:flex flex-shrink-0">
                <Link href="/" className="flex items-center group">
                  <div className="hidden sm:block mr-3 text-right">
                    <h1 className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      Inventive Learning
                    </h1>
                  </div>
                  <div className="relative">
                    <Image
                      src="/Inventive_Learning_LOGO.png"
                      alt="Inventive Learning"
                      width={32}
                      height={32}
                      className="h-8 w-8 transition-transform duration-200 ease-out group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>

              {/* Mobile Menu Button and Right Logo */}
              <div className="lg:hidden flex items-center space-x-4">
                {/* Right Logo - Mobile */}
                <Link href="/" className="flex items-center group">
                  <div className="hidden sm:block mr-3 text-right">
                    <h1 className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      Inventive Learning
                    </h1>
                  </div>
                  <div className="relative">
                    <Image
                      src="/Inventive_Learning_LOGO.png"
                      alt="Inventive Learning"
                      width={32}
                      height={32}
                      className="h-8 w-8 transition-transform duration-200 ease-out group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 rounded-md hover:bg-gray-100"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Stripe's Clean Dropdown */}
        <div
          className={`
          lg:hidden bg-white border-b border-gray-200
          transition-all duration-200 ease-out overflow-hidden
          ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}>
          <div className="px-6 py-4 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-normal text-sm"
                onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/contact"
                className="block px-3 py-2 bg-gray-900 hover:bg-gray-800 text-white text-center rounded-md transition-colors duration-200 font-medium text-sm"
                onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Stripe-style CSS */}
      <style jsx global>{`
        /* Stripe-style focus states */
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
          border-radius: 4px;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced backdrop blur for better browser support */
        @supports (backdrop-filter: blur(8px)) {
          .backdrop-blur-sm {
            backdrop-filter: blur(8px);
          }
        }
      `}</style>
    </>
  );
};

export default Header;