"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Bell, Calendar, Users, FileText } from "lucide-react";

const HeroSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const announcements = [
    {
      id: 1,
      title: "IKMC 2025 Results Announced",
      subtitle: "Check your competition results now",
      action: "View Results",
      href: "/ikmc-results",
      icon: <Bell className="w-5 h-5" />,
      priority: "high",
      color: "blue",
    },
    {
      id: 2,
      title: "IKSC 2025 Registration Open",
      subtitle: "Early bird pricing available",
      action: "Register Now",
      href: "/iksc-register",
      icon: <Users className="w-5 h-5" />,
      priority: "medium",
      color: "green",
    },
    {
      id: 3,
      title: "Registration Deadline",
      subtitle: "IKSC 2025 - August 22, 2025",
      action: "Register",
      href: "/iksc-register",
      icon: <Calendar className="w-5 h-5" />,
      priority: "urgent",
      color: "orange",
    },
    {
      id: 4,
      title: "Intellectual Property Notice",
      subtitle: "Important legal update regarding trademark protection",
      action: "View Document",
      href: "/legal-notice",
      icon: <FileText className="w-5 h-5" />,
      priority: "high",
      color: "purple",
      isLarge: true,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getColorClasses = (color: string, priority: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50/80 via-blue-100/40 to-indigo-50/60",
        border: "border-blue-200/60",
        text: "text-blue-800",
        icon: "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700",
        accent: "bg-gradient-to-r from-blue-500 to-indigo-500",
        hover:
          "group-hover:from-blue-100/90 group-hover:via-blue-200/50 group-hover:to-indigo-100/70",
      },
      green: {
        bg: "from-emerald-50/80 via-green-100/40 to-teal-50/60",
        border: "border-emerald-200/60",
        text: "text-emerald-800",
        icon: "bg-gradient-to-br from-emerald-100 to-green-200 text-emerald-700",
        accent: "bg-gradient-to-r from-emerald-500 to-teal-500",
        hover:
          "group-hover:from-emerald-100/90 group-hover:via-green-200/50 group-hover:to-teal-100/70",
      },
      orange: {
        bg: "from-orange-50/80 via-amber-100/40 to-red-50/60",
        border: "border-orange-200/60",
        text: "text-orange-800",
        icon: "bg-gradient-to-br from-orange-100 to-amber-200 text-orange-700",
        accent: "bg-gradient-to-r from-orange-500 to-red-500",
        hover:
          "group-hover:from-orange-100/90 group-hover:via-amber-200/50 group-hover:to-red-100/70",
      },
      purple: {
        bg: "from-purple-50/80 via-violet-100/40 to-fuchsia-50/60",
        border: "border-purple-200/60",
        text: "text-purple-800",
        icon: "bg-gradient-to-br from-purple-100 to-violet-200 text-purple-700",
        accent: "bg-gradient-to-r from-purple-500 to-fuchsia-500",
        hover:
          "group-hover:from-purple-100/90 group-hover:via-violet-200/50 group-hover:to-fuchsia-100/70",
      },
    };

    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden py-10">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] [background-size:32px_32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full text-sm font-medium mb-5 transition-all duration-300 hover:from-gray-200 hover:to-gray-100 shadow-sm">
            <Bell className="w-4 h-4 mr-2" />
            Important Updates
          </div>

          <h1 className="text-2xl md:text-5xl font-bold flex items-center gap-2 justify-center text-gray-900 mb-4 tracking-tight leading-none">
            Stay
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              Informed
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Get the latest updates on competitions, registrations, and important
            notices.
          </p>
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {announcements.map((announcement) => {
            const colorClasses = getColorClasses(
              announcement.color,
              announcement.priority
            );

            return (
              <Link
                key={announcement.id}
                href={announcement.href}
                className={`
                  group relative overflow-hidden rounded-3xl transition-all duration-700 ease-out
                  ${announcement.isLarge ? "md:col-span-2" : ""}
                  hover:scale-[1.03] active:scale-[0.98]
                  transform-gpu hover:shadow-2xl hover:shadow-black/10
                `}
                onMouseEnter={() => setHoveredCard(announcement.id)}
                onMouseLeave={() => setHoveredCard(null)}>
                {/* Card Background with Enhanced Gradients */}
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-br ${colorClasses.bg} ${colorClasses.hover}
                  transition-all duration-700 ease-out
                  backdrop-blur-sm
                `}></div>

                {/* Animated Border */}
                <div
                  className={`
                  absolute inset-0 rounded-3xl border ${colorClasses.border}
                  group-hover:border-opacity-100 transition-all duration-500
                  group-hover:shadow-lg group-hover:shadow-black/5
                `}></div>

                {/* Priority Indicator */}
                {announcement.priority === "urgent" && (
                  <div className="absolute top-5 right-5 z-10">
                    <div className="flex items-center space-x-2">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full">
                        URGENT
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="relative p-8 lg:p-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`
                      inline-flex items-center justify-center w-14 h-14 rounded-2xl
                      ${colorClasses.icon} transition-all duration-500
                      group-hover:scale-110 group-hover:rotate-3 shadow-sm
                    `}>
                      {announcement.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`
                    font-bold mb-4 leading-tight ${colorClasses.text}
                    ${
                      announcement.isLarge
                        ? "text-2xl md:text-3xl"
                        : "text-xl md:text-2xl"
                    }
                    transition-colors duration-300
                  `}>
                    {announcement.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-gray-700 mb-8 text-base leading-relaxed font-medium">
                    {announcement.subtitle}
                  </p>

                  {/* Action */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`
                      inline-flex items-center text-sm font-semibold ${colorClasses.text}
                      transition-all duration-300 group-hover:gap-3
                    `}>
                      {announcement.action}
                      <ChevronRight
                        className={`
                        w-4 h-4 ml-2 transition-all duration-300
                        ${
                          hoveredCard === announcement.id
                            ? "translate-x-1 scale-110"
                            : ""
                        }
                      `}
                      />
                    </span>

                    {/* Enhanced Accent Dot */}
                    <div
                      className={`
                      w-3 h-3 rounded-full ${colorClasses.accent}
                      transition-all duration-500 shadow-sm
                      ${
                        hoveredCard === announcement.id
                          ? "scale-150 shadow-lg"
                          : ""
                      }
                    `}></div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`
                  absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500
                  group-hover:opacity-100 shadow-2xl shadow-black/10
                `}></div>

                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-1/4 left-8 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-8 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-green-200/15 to-teal-200/15 rounded-full blur-2xl animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;
