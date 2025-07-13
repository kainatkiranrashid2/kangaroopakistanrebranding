"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  const competitionItems = [
    {
      name: "IKMC",
      href: "/ikmc",
      dropdownItems: [
        { name: "About", href: "/ikmc/about" },
        { name: "Past Papers", href: "/ikmc/past-papers" },
        { name: "Results", href: "/ikmc/results" },
        { name: "General Information", href: "/ikmc/general-information" },
        { name: "Forms", href: "/ikmc/forms" },
        { name: "Answer Sheets", href: "/ikmc/answer-sheets" },
      ],
    },
    {
      name: "IKSC",
      href: "/iksc",
      dropdownItems: [
        { name: "About", href: "/iksc/about" },
        { name: "Past Papers", href: "/iksc/past-papers" },
        { name: "Results", href: "/iksc/results" },
        { name: "General Information", href: "/iksc/general-information" },
        { name: "Forms", href: "/iksc/forms" },
        { name: "Answer Sheets", href: "/iksc/answer-sheets" },
      ],
    },
    {
      name: "IKLC",
      href: "/iklc",
      dropdownItems: [
        { name: "About", href: "/iklc/about" },
        { name: "Past Papers", href: "/iklc/past-papers" },
        { name: "Results", href: "/iklc/results" },
        { name: "General Information", href: "/iklc/general-information" },
        { name: "Forms", href: "/iklc/forms" },
        { name: "Answer Sheets", href: "/iklc/answer-sheets" },
      ],
    },
  ];

  // Stripe-style scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Stripe-style Navigation */}
        <div
          className={`
          bg-white/95 backdrop-blur-sm
          transition-all duration-200 ease-out
          ${
            isScrolled
              ? "border-b border-gray-200/60 shadow-sm"
              : "border-b border-transparent"
          }
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
              <nav
                className="hidden lg:flex items-center space-x-8"
                ref={dropdownRef}>
                {/* Regular Navigation Items */}
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

                {/* Competition Items with Dropdowns */}
                {competitionItems.map((item) => (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="relative text-gray-600 hover:text-gray-900 font-normal text-sm transition-colors duration-200 group flex items-center">
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown
                        className={`ml-1 w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                      {/* Stripe's signature underline effect */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></div>
                    </button>

                    {/* Stripe-style Dropdown */}
                    <div
                      className={`
                        absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200/60
                        transition-all duration-200 ease-out origin-top
                        ${
                          activeDropdown === item.name
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                        }
                      `}>
                      <div className="py-2">
                        {item.dropdownItems.map((dropdownItem, index) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                            onClick={() => setActiveDropdown(null)}>
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
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
            {/* Regular Navigation Items */}
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-normal text-sm"
                onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}

            {/* Competition Items - Mobile */}
            {competitionItems.map((item) => (
              <div key={item.name} className="space-y-1">
                <div className="px-3 py-2 text-gray-900 font-medium text-sm border-t border-gray-100 mt-2 pt-3">
                  {item.name}
                </div>
                {item.dropdownItems.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.name}
                    href={dropdownItem.href}
                    className="block px-6 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 text-sm"
                    onClick={() => setIsMenuOpen(false)}>
                    {dropdownItem.name}
                  </Link>
                ))}
              </div>
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
