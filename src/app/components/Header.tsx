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
    { name: "Contact Us", href: "/contact" },
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
          className={`bg-white backdrop-blur-sm
          
          ${
            isScrolled
              ? "border-b border-gray-200/60 shadow-sm bg-white backdrop-blur-sm"
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
                        absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/40
                        transition-all duration-300 ease-out origin-top
                        ${
                          activeDropdown === item.name
                            ? "opacity-100 scale-100 translate-y-0 visible"
                            : "opacity-0 scale-95 -translate-y-3 invisible pointer-events-none"
                        }
                      `}>
                      {/* Gradient Background Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-gray-50/80 rounded-2xl"></div>
                      
                      {/* Subtle Inner Border */}
                      <div className="absolute inset-0 rounded-2xl border border-white/60"></div>
                      
                      {/* Content */}
                      <div className="relative py-3 px-1">
                        {/* Header with Competition Name */}
                        <div className="px-4 py-2 mb-2">
                          <h3 className="text-sm font-semibold text-gray-900 tracking-wide">
                            {item.name}
                          </h3>
                          <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1"></div>
                        </div>
                        
                        {/* Menu Items */}
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="group relative block mx-2 px-4 py-3 text-sm text-gray-600 hover:text-gray-900 rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-blue-50/40 hover:shadow-sm"
                            onClick={() => setActiveDropdown(null)}>
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{dropdownItem.name}</span>
                              <svg 
                                className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            
                            {/* Hover Effect Line */}
                            <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* Bottom Glow Effect */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm"></div>
                    </div>
                  </div>
                ))}

                {/* Auth Buttons */}
                <div className="flex items-center space-x-3 ml-6">
                  <Link
                    href="https://enrollments.kangaroopakistan.org/"
                    target="blank"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium   rounded-md transition-colors duration-200 shadow-sm hover:shadow-md">
                    Login
                  </Link>
                  <Link
                    href="https://enrollments.kangaroopakistan.org/register"
                    target="blank"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-200 shadow-sm hover:shadow-md">
                    Register Now
                  </Link>
                </div>
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
          ${isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}>
          <div className="px-6 py-4 space-y-1 max-h-[500px] overflow-y-auto">
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
                <button
                  onClick={() => handleDropdownToggle(`mobile-${item.name}`)}
                  className="w-full flex items-center justify-between px-3 py-2 text-gray-900 font-medium text-sm border-t border-gray-100 mt-2 pt-3 hover:bg-gray-50 rounded-md transition-colors duration-200">
                  <span>{item.name}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === `mobile-${item.name}`
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {/* Mobile Submenu */}
                <div
                  className={`
                    overflow-hidden transition-all duration-200 ease-out
                    ${
                      activeDropdown === `mobile-${item.name}`
                        ? "max-h-64 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}>
                  <div className="space-y-1 pl-3">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 text-sm"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveDropdown(null);
                        }}>
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <Link
                href="https://enrollments.kangaroopakistan.org/"
                target="blank"
                className="block text-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
                onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
              <Link
                href="https://enrollments.kangaroopakistan.org/register"
                target="blank"
                className="block text-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
                onClick={() => setIsMenuOpen(false)}>
                Register Now
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
