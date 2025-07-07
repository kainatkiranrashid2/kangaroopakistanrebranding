"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

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

  // Apple-style smooth scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Main Navigation - Apple's Signature Glass Effect */}
        <div
          className={`
          bg-white/80 backdrop-blur-3xl border-b border-black/5
          transition-all duration-500 ease-out
          ${isScrolled ? "bg-white/90 backdrop-blur-3xl shadow-sm" : ""}
        `}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              className={`
              flex justify-between items-center transition-all duration-500 ease-out
              ${isScrolled ? "h-16" : "h-[100px]"}
            `}>
              {/* Left Logo - Innovative Learning */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center group">
                  <div className="relative mr-3">
                    <Image
                      src="/Innovative_Learning_Logo.png"
                      alt="Innovative Learning"
                      width={80}
                      height={80}
                      className={`
                        transition-all duration-300 ease-out
                        group-hover:scale-105
                        ${
                          isScrolled ? "h-10 w-10" : "h-12 w-12 md:h-16 md:w-16"
                        }
                      `}
                    />
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-md font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
                      Innovative Learning
                    </h1>
                  </div>
                </Link>
              </div>

              {/* Center Navigation - Desktop */}
              <nav className="hidden lg:flex items-center space-x-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-3 py-2 text-gray-700 hover:text-black font-normal text-sm tracking-wide transition-colors duration-300 group">
                    <span className="relative text-lg z-10">{item.name}</span>
                    {/* Apple's subtle hover indicator */}
                    <div className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </Link>
                ))}

                {/* Apple-style CTA Button */}
                <Link
                  href="/contact"
                  className="ml-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 active:scale-95">
                  Contact Us
                </Link>
              </nav>

              {/* Right Logo - Inventive Learning (Desktop) */}
              <div className="hidden lg:flex flex-shrink-0">
                <Link href="/" className="flex items-center group">
                  <div className="hidden sm:block mr-3 text-right">
                    <h1 className="text-md font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
                      Inventive Learning
                    </h1>
                  </div>
                  <div className="relative">
                    <Image
                      src="/Inventive_Learning_LOGO.png"
                      alt="Inventive Learning"
                      width={80}
                      height={80}
                      className={`
                        transition-all duration-300 ease-out
                        group-hover:scale-105
                        ${
                          isScrolled ? "h-10 w-10" : "h-12 w-12 md:h-16 md:w-16"
                        }
                      `}
                    />
                  </div>
                </Link>
              </div>

              {/* Mobile Menu Button and Right Logo */}
              <div className="lg:hidden flex items-center space-x-4">
                {/* Right Logo - Mobile */}
                <div className="hidden sm:block mr-3 text-right">
                  <h1 className="text-md font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
                    Inventive Learning
                  </h1>
                </div>
                <Link href="/" className="flex items-center group">
                  <div className="relative">
                    <Image
                      src="/Inventive_Learning_LOGO.png"
                      alt="Inventive Learning"
                      width={60}
                      height={60}
                      className={`
                        transition-all duration-300 ease-out
                        group-hover:scale-105
                        ${
                          isScrolled ? "h-10 w-10" : "h-12 w-12 md:h-16 md:w-16"
                        }
                      `}
                    />
                  </div>
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-gray-700 hover:text-black transition-colors duration-300 rounded-lg hover:bg-gray-100 active:bg-gray-200"
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

        {/* Mobile Navigation - Apple's Clean Dropdown */}
        <div
          className={`
          lg:hidden bg-white/95 backdrop-blur-3xl border-b border-black/5
          transition-all duration-300 ease-out overflow-hidden
          ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}>
          <div className="px-6 py-4 space-y-1">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200 font-normal text-base"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen
                    ? "fadeInUp 0.3s ease-out forwards"
                    : "none",
                }}>
                <div className="flex items-center justify-between">
                  {item.name}
                  <ChevronRight className="w-4 h-4 opacity-30" />
                </div>
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/contact"
                className="block px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Apple-style CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Apple's signature backdrop blur enhancement */
        @supports (backdrop-filter: blur(20px)) {
          .backdrop-blur-3xl {
            backdrop-filter: blur(20px);
          }
        }

        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }

        /* Apple-style focus states */
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #007aff;
          outline-offset: 2px;
          border-radius: 6px;
        }
      `}</style>
    </>
  );
};

export default Header;
