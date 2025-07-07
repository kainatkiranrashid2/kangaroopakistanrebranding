"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Award, Globe, ChevronRight } from "lucide-react";

const AboutUsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-10 bg-white overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] [background-size:32px_32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-transparent to-purple-50/30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Content Card */}
        <Link
          href="/about"
          className="group block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <div className="relative overflow-hidden rounded-3xl transition-all duration-700 ease-out hover:scale-[1.02] active:scale-[0.98] transform-gpu">
            {/* Background Image with Overlay */}
            <div className="relative h-[500px] md:h-[600px]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 transition-all duration-500 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/50"></div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl border border-white/20 group-hover:border-white/30 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center text-center px-8">
                {/* Badge */}

                {/* Main Title */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
                  World&apos;s Most
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Prestigious
                  </span>
                  <span className="block">Educational Contests</span>
                </h2>

                {/* CTA Button */}
                <div className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full font-medium transition-all duration-300 border border-white/20 hover:border-white/30 group-hover:scale-105">
                  <span className="mr-3">Learn About Our Story</span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isHovered ? "translate-x-1" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out shadow-2xl shadow-purple-500/20"></div>

              {/* Inner Light Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </Link>

        {/* Bottom Accent */}
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-1/4 left-8 w-32 h-32 bg-gradient-to-br from-indigo-200/15 to-purple-200/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-8 w-24 h-24 bg-gradient-to-br from-blue-200/15 to-cyan-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-pink-200/15 to-orange-200/15 rounded-full blur-2xl animate-pulse delay-500"></div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .group {
          animation: fadeInScale 0.8s ease-out;
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

export default AboutUsSection;
