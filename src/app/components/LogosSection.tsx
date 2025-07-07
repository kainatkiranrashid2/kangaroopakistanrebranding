"use client";

import { useState } from "react";
import Image from "next/image";

const LogosSection = () => {
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

  const logos = [
    {
      id: 1,
      name: "IKMC",
      description: "International Kangaroo Mathematics Contest",
      src: "/logos/ikmc.png",
      href: "/ikmc",
      color: "blue",
    },
    {
      id: 2,
      name: "IKSC",
      description: "International Kangaroo Science Contest",
      src: "/logos/iksc.png",
      href: "/iksc",
      color: "green",
    },
    {
      id: 3,
      name: "IKLC",
      description: "International Kangaroo Linguistics Contest",
      src: "/logos/iklc.png",
      href: "/iklc",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50/50 via-blue-100/30 to-indigo-50/40",
        border: "border-blue-200/40",
        hover:
          "group-hover:from-blue-100/60 group-hover:via-blue-200/40 group-hover:to-indigo-100/50",
        glow: "group-hover:shadow-blue-500/20",
      },
      green: {
        bg: "from-emerald-50/50 via-green-100/30 to-teal-50/40",
        border: "border-emerald-200/40",
        hover:
          "group-hover:from-emerald-100/60 group-hover:via-green-200/40 group-hover:to-teal-100/50",
        glow: "group-hover:shadow-emerald-500/20",
      },
      purple: {
        bg: "from-purple-50/50 via-violet-100/30 to-fuchsia-50/40",
        border: "border-purple-200/40",
        hover:
          "group-hover:from-purple-100/60 group-hover:via-violet-200/40 group-hover:to-fuchsia-100/50",
        glow: "group-hover:shadow-purple-500/20",
      },
    };

    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="relative pb-10 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.015)_1px,transparent_0)] [background-size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-transparent to-gray-50/20"></div>
      </div>

      <div className="relative mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-100/80 to-gray-50/60 text-gray-700 rounded-full text-lg font-medium mb-8 transition-all duration-300 hover:from-gray-200/80 hover:to-gray-100/60 shadow-sm backdrop-blur-sm">
            Our Competitions
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-none">
            Excellence in
            <span className="text-gray-500"> </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Discover our internationally recognized competitions designed to
            challenge and inspire students worldwide.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {logos.map((logo, index) => {
            const colorClasses = getColorClasses(logo.color);

            return (
              <div
                key={logo.id}
                className="group relative"
                onMouseEnter={() => setHoveredLogo(logo.id)}
                onMouseLeave={() => setHoveredLogo(null)}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}>
                {/* Card Container */}
                <div className="relative overflow-hidden rounded-3xl transition-all duration-700 ease-out hover:scale-[1.02] active:scale-[0.98] transform-gpu">
                  {/* Background with Gradient */}
                  <div
                    className={`
                    absolute inset-0 bg-gradient-to-br ${colorClasses.bg} ${colorClasses.hover}
                    transition-all duration-500 ease-out
                    backdrop-blur-sm
                  `}></div>

                  {/* Animated Border */}
                  <div
                    className={`
                    absolute inset-0 rounded-3xl border ${colorClasses.border}
                    group-hover:border-opacity-60 transition-all duration-300
                  `}></div>

                  {/* Card Content */}
                  <div className="relative py-8 px-6 text-center">
                    {/* Logo Container */}
                    <div className="mb-8 flex justify-center">
                      <div className="relative">
                        {/* Logo Background Glow */}
                        <div
                          className={`
                          absolute inset-0 rounded-2xl bg-white/60 backdrop-blur-sm
                          transition-all duration-500 ease-out
                          ${
                            hoveredLogo === logo.id
                              ? "scale-110 opacity-100"
                              : "scale-100 opacity-80"
                          }
                          shadow-lg ${colorClasses.glow}
                        `}></div>

                        {/* Logo Image */}
                        <div className="relative p-6">
                          <Image
                            src={logo.src}
                            alt={logo.name}
                            width={120}
                            height={120}
                            className={`
                              w-24 h-24 md:w-28 md:h-28 object-contain
                              transition-all duration-500 ease-out
                              ${
                                hoveredLogo === logo.id
                                  ? "scale-110"
                                  : "scale-100"
                              }
                              filter drop-shadow-sm
                            `}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                        {logo.name}
                      </h3>

                      <p className="text-gray-600 text-base leading-relaxed font-light max-w-xs mx-auto">
                        {logo.description}
                      </p>
                    </div>

                    {/* Learn More Button */}
                    <div className="mt-8">
                      <a
                        href={logo.href}
                        className={`
                          inline-flex items-center px-6 py-3 text-sm font-medium
                          text-gray-700 hover:text-gray-900
                          bg-white/60 hover:bg-white/80 backdrop-blur-sm
                          rounded-full border border-gray-200/60 hover:border-gray-300/60
                          transition-all duration-300 ease-out
                          hover:scale-105 active:scale-95
                          shadow-sm hover:shadow-md
                          ${
                            hoveredLogo === logo.id
                              ? "translate-y-0"
                              : "translate-y-1"
                          }
                        `}>
                        Learn More
                        <svg
                          className={`
                            ml-2 w-4 h-4 transition-transform duration-300
                            ${hoveredLogo === logo.id ? "translate-x-1" : ""}
                          `}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`
                    absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 ease-out
                    shadow-2xl ${colorClasses.glow}
                  `}></div>

                  {/* Inner Light Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <span className="text-sm font-light">
              Empowering minds globally
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-1/4 left-8 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-8 w-24 h-24 bg-gradient-to-br from-green-200/10 to-teal-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-pink-200/10 to-orange-200/10 rounded-full blur-2xl animate-pulse delay-500"></div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group:nth-child(1) {
          animation: fadeInUp 0.8s ease-out 0.1s both;
        }
        .group:nth-child(2) {
          animation: fadeInUp 0.8s ease-out 0.25s both;
        }
        .group:nth-child(3) {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        /* Enhanced backdrop blur for better browser support */
        @supports (backdrop-filter: blur(20px)) {
          .backdrop-blur-sm {
            backdrop-filter: blur(8px);
          }
        }
      `}</style>
    </section>
  );
};

export default LogosSection;
