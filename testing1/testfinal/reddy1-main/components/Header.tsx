"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CONFIG } from "@/utils/config";

export const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownToggle = (idx: number) => {
    setActiveDropdown(activeDropdown === idx ? null : idx);
  };

  return (
    <header
      className={`w-full z-50 transition-all duration-300 select-none ${
        isSticky
          ? "fixed top-0 bg-[#05080f]/95 border-b border-[#F0901A]/20 shadow-lg py-3"
          : "relative bg-[#05080f] border-b border-[#F0901A]/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src={CONFIG.logoUrl}
            alt="Reddy Anna Book Logo"
            className="h-10 md:h-12 w-auto object-contain hover:scale-[1.02] transition-transform duration-200"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {CONFIG.navigation.map((item, idx) => {
            const hasChildren = !!item.children;
            return (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => hasChildren && setActiveDropdown(idx)}
                onMouseLeave={() => hasChildren && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-white hover:text-[#FFD13F] font-bold text-sm transition-colors duration-200"
                >
                  <span>{item.label}</span>
                  {hasChildren && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  )}
                </Link>

                {/* Submenu Dropdown */}
                {hasChildren && activeDropdown === idx && (
                  <div className="absolute left-0 mt-2 w-52 bg-[#0c1322] border border-[#F0901A]/10 rounded-xl overflow-hidden shadow-2xl py-2 animate-fade-in">
                    {item.children?.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.href}
                        className="block px-4 py-2.5 text-gray-300 hover:text-black hover:bg-gradient-to-r hover:from-[#FFD13F] hover:to-[#F0901A] font-bold text-xs transition-all duration-200"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA Action Panel */}
        <div className="hidden lg:flex items-center gap-3.5">
          <Link
            href="/register"
            className="border border-white hover:border-[#FFD13F] text-white hover:text-black hover:bg-gradient-to-r hover:from-[#FFD13F] hover:to-[#F0901A] font-bold text-xs py-2 px-5 rounded-full transition-all duration-300"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="bg-gradient-to-r from-[#FFD13F] to-[#F0901A] text-black font-extrabold text-xs py-2 px-6 rounded-full hover:shadow-[0_0_15px_rgba(240,144,26,0.3)] transition-all duration-300"
          >
            Login
          </Link>
        </div>

        {/* Mobile View CTAs: Burger and prominent GET ID button */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href={CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#FFD13F] to-[#F0901A] text-black font-black text-xs py-2 px-4 rounded-full shadow-md animate-pulse active:scale-95 transition-transform"
          >
            GET ID
          </a>

          <button
            onClick={handleMobileMenuToggle}
            className="text-white hover:text-[#FFD13F] focus:outline-none p-1.5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              // Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            ) : (
              // Burger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[#0c1322] border-t border-[#F0901A]/10 mt-3 py-4 px-4 flex flex-col gap-4 animate-fade-in">
          {CONFIG.navigation.map((item, idx) => {
            const hasChildren = !!item.children;
            return (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => !hasChildren && setMobileMenuOpen(false)}
                    className="text-white hover:text-[#FFD13F] font-bold text-sm tracking-wide"
                  >
                    {item.label}
                  </Link>
                  {hasChildren && (
                    <button
                      onClick={() => handleDropdownToggle(idx)}
                      className="text-[#F0901A] p-1.5 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={`bi bi-chevron-down transition-transform duration-200 ${
                          activeDropdown === idx ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Sub Menu Links */}
                {hasChildren && activeDropdown === idx && (
                  <div className="pl-4 flex flex-col gap-2.5 border-l border-[#F0901A]/10 my-1">
                    {item.children?.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-gray-300 hover:text-[#FFD13F] text-xs font-bold py-1.5"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* CTA Buttons in Mobile Dropdown */}
          <div className="flex flex-col gap-3 mt-2 border-t border-[#F0901A]/5 pt-4">
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center border border-white hover:border-[#FFD13F] text-white hover:text-black hover:bg-gradient-to-r hover:from-[#FFD13F] hover:to-[#F0901A] font-bold text-xs py-2.5 rounded-full transition-all"
            >
              Register
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-gradient-to-r from-[#FFD13F] to-[#F0901A] text-black font-extrabold text-xs py-2.5 rounded-full"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
