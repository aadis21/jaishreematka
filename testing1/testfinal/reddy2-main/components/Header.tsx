"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSportsDropdownOpen, setIsSportsDropdownOpen] = useState(false);
  const [isCasinoDropdownOpen, setIsCasinoDropdownOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-[1000] w-full border-b-[3px] border-ra-crimson bg-[#6b1201] text-white shadow-lg">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <div className="flex h-[75px] items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="https://reddysports.co/wp-content/uploads/2025/11/reddybook-logo-141x50.webp"
              alt="Reddybook Logo"
              width={141}
              height={50}
              className="h-[50px] w-auto transition-transform duration-200 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/reddybook"
              className={`px-4 py-6 text-[15px] font-bold tracking-wide uppercase transition-colors duration-200 hover:text-ra-gold ${
                isActive("/reddybook") ? "text-ra-gold border-b-2 border-ra-gold" : "text-white"
              }`}
            >
              Reddybook
            </Link>

            <Link
              href="/app"
              className={`px-4 py-6 text-[15px] font-bold tracking-wide uppercase transition-colors duration-200 hover:text-ra-gold ${
                isActive("/app") ? "text-ra-gold border-b-2 border-ra-gold" : "text-white"
              }`}
            >
              Reddy Anna App
            </Link>

            {/* Sports Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSportsDropdownOpen(true)}
              onMouseLeave={() => setIsSportsDropdownOpen(false)}
            >
              <Link
                href="/sports-betting"
                className={`px-4 py-6 text-[15px] font-bold tracking-wide uppercase flex items-center gap-1 transition-colors duration-200 hover:text-ra-gold ${
                  pathname.startsWith("/sports-betting") ? "text-ra-gold border-b-2 border-ra-gold" : "text-white"
                }`}
              >
                Sports Betting
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {isSportsDropdownOpen && (
                <div className="absolute left-0 w-[220px] bg-[#6b1201] border-t-2 border-ra-crimson shadow-2xl rounded-b-md flex flex-col py-1">
                  <Link href="/sports-betting/cricket-betting" className="px-4 py-3 text-[14px] font-semibold hover:bg-[#831601] hover:text-ra-gold transition-colors">Cricket Betting</Link>
                  <Link href="/sports-betting/football-betting" className="px-4 py-3 text-[14px] font-semibold hover:bg-[#831601] hover:text-ra-gold transition-colors">Football Betting</Link>
                  <Link href="/sports-betting/tennis-betting" className="px-4 py-3 text-[14px] font-semibold hover:bg-[#831601] hover:text-ra-gold transition-colors">Tennis Betting</Link>
                  <Link href="/sports-betting/kabaddi-betting" className="px-4 py-3 text-[14px] font-semibold hover:bg-[#831601] hover:text-ra-gold transition-colors">Kabaddi Betting</Link>
                  <Link href="/sports-betting/horse-betting" className="px-4 py-3 text-[14px] font-semibold hover:bg-[#831601] hover:text-ra-gold transition-colors">Horse Betting</Link>
                  <Link href="/sports-betting/basketball-betting" className="px-4 py-3 text-[14px] font-semibold hover:bg-[#831601] hover:text-ra-gold transition-colors">Basketball Betting</Link>
                </div>
              )}
            </div>

            {/* Casino Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCasinoDropdownOpen(true)}
              onMouseLeave={() => setIsCasinoDropdownOpen(false)}
            >
              <Link
                href="/casino"
                className={`px-4 py-6 text-[15px] font-bold tracking-wide uppercase flex items-center gap-1 transition-colors duration-200 hover:text-ra-gold ${
                  pathname.startsWith("/casino") ? "text-ra-gold border-b-2 border-ra-gold" : "text-white"
                }`}
              >
                Casino
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {isCasinoDropdownOpen && (
                <div className="absolute left-0 w-[220px] bg-[#6b1201] border-t-2 border-ra-crimson shadow-2xl rounded-b-md flex flex-col py-1">
                  <Link href="/casino/slots" className="px-4 py-3 text-[14px] font-semibold hover:bg-[#831601] hover:text-ra-gold transition-colors">Slots</Link>
                  <Link href="/casino/roulette" className="px-4 py-3 text-[14px] font-semibold hover:bg-[#831601] hover:text-ra-gold transition-colors">Roulette</Link>
                  <Link href="/casino/poker" className="px-4 py-3 text-[14px] font-semibold hover:bg-[#831601] hover:text-ra-gold transition-colors">Poker</Link>
                  <Link href="/casino/teen-patti" className="px-4 py-3 text-[14px] font-semibold hover:bg-[#831601] hover:text-ra-gold transition-colors">Teen Patti</Link>
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              className={`px-4 py-6 text-[15px] font-bold tracking-wide uppercase transition-colors duration-200 hover:text-ra-gold ${
                isActive("/contact-us") ? "text-ra-gold border-b-2 border-ra-gold" : "text-white"
              }`}
            >
              Contact Us
            </Link>

            <Link
              href="/about-us"
              className={`px-4 py-6 text-[15px] font-bold tracking-wide uppercase transition-colors duration-200 hover:text-ra-gold ${
                isActive("/about-us") ? "text-ra-gold border-b-2 border-ra-gold" : "text-white"
              }`}
            >
              About Us
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/signup"
              className="px-6 py-2.5 bg-gradient-to-r from-ra-gold to-ra-gold-dark hover:from-white hover:to-white hover:text-ra-crimson text-black font-bold uppercase rounded-md shadow-md text-[14px] transition-all duration-200"
            >
              Signup
            </Link>
            <Link
              href="/login"
              className="px-6 py-2.5 bg-transparent border-2 border-white hover:bg-white hover:text-ra-crimson text-white font-bold uppercase rounded-md text-[14px] transition-all duration-200"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Buttons & Burger */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/signup"
              className="px-4 py-2 bg-gradient-to-r from-ra-gold to-ra-gold-dark text-black font-bold uppercase rounded-md text-[13px]"
            >
              Signup
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-ra-gold focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[78px] left-0 w-full bg-[#520d01] border-b-[3px] border-ra-crimson flex flex-col py-3 px-6 gap-2 shadow-2xl transition-all duration-300">
          <Link
            href="/reddybook"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-2 text-[15px] font-bold uppercase border-b border-white/10 hover:text-ra-gold"
          >
            Reddybook
          </Link>
          <Link
            href="/app"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-2 text-[15px] font-bold uppercase border-b border-white/10 hover:text-ra-gold"
          >
            Reddy Anna App
          </Link>

          {/* Mobile Sports Dropdown Accordion */}
          <div>
            <button
              onClick={() => setIsSportsDropdownOpen(!isSportsDropdownOpen)}
              className="w-full py-2 text-[15px] font-bold uppercase border-b border-white/10 flex items-center justify-between hover:text-ra-gold"
            >
              <span>Sports Betting</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${isSportsDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isSportsDropdownOpen && (
              <div className="flex flex-col pl-4 bg-black/10 py-1 gap-1">
                <Link href="/sports-betting" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-semibold hover:text-ra-gold">All Sports Betting</Link>
                <Link href="/sports-betting/cricket-betting" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-semibold hover:text-ra-gold">Cricket Betting</Link>
                <Link href="/sports-betting/football-betting" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-semibold hover:text-ra-gold">Football Betting</Link>
                <Link href="/sports-betting/tennis-betting" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-semibold hover:text-ra-gold">Tennis Betting</Link>
                <Link href="/sports-betting/kabaddi-betting" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-semibold hover:text-ra-gold">Kabaddi Betting</Link>
              </div>
            )}
          </div>

          {/* Mobile Casino Accordion */}
          <div>
            <button
              onClick={() => setIsCasinoDropdownOpen(!isCasinoDropdownOpen)}
              className="w-full py-2 text-[15px] font-bold uppercase border-b border-white/10 flex items-center justify-between hover:text-ra-gold"
            >
              <span>Casino</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${isCasinoDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isCasinoDropdownOpen && (
              <div className="flex flex-col pl-4 bg-black/10 py-1 gap-1">
                <Link href="/casino" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-semibold hover:text-ra-gold">All Casino</Link>
                <Link href="/casino/slots" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-semibold hover:text-ra-gold">Slots</Link>
                <Link href="/casino/roulette" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-semibold hover:text-ra-gold">Roulette</Link>
                <Link href="/casino/poker" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-semibold hover:text-ra-gold">Poker</Link>
                <Link href="/casino/teen-patti" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-semibold hover:text-ra-gold">Teen Patti</Link>
              </div>
            )}
          </div>

          <Link
            href="/contact-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-2 text-[15px] font-bold uppercase border-b border-white/10 hover:text-ra-gold"
          >
            Contact Us
          </Link>
          <Link
            href="/about-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-2 text-[15px] font-bold uppercase border-b border-white/10 hover:text-ra-gold"
          >
            About Us
          </Link>
          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-2 text-[15px] font-bold uppercase hover:text-ra-gold"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
