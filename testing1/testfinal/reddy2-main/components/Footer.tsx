"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-[#9ca3af] border-t border-white/10 font-sans">
      
      {/* Upper Footer columns */}
      <div className="mx-auto max-w-[1240px] px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Logo & Description */}
        <div className="flex flex-col gap-6">
          <Link href="/">
            <img
              src="https://reddysports.co/wp-content/uploads/2025/11/reddybook-logo.webp"
              alt="Reddybook logo"
              width={132}
              height={47}
              className="h-auto w-[132px] block transition-transform duration-200 hover:scale-102"
            />
          </Link>
          <p className="text-[14px] leading-[1.8] text-gray-300">
            Reddy Anna is India’s most trusted online sports betting and casino platform, offering instant account activation, fast UPI withdrawals, secure gameplay and 24/7 customer support. Enjoy live cricket betting, football markets and real casino games — all in one verified Reddy Anna ID. Bet smart, bet responsibly.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-[18px] font-bold border-b-2 border-ra-crimson pb-2 w-fit">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5 text-[14px] font-semibold">
            <li>
              <Link href="/reddybook" className="hover:text-ra-gold transition-colors duration-200">
                Reddybook App
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-ra-gold transition-colors duration-200">
                Reddy Anna Book
              </Link>
            </li>
            <li>
              <Link href="/reddybook" className="hover:text-ra-gold transition-colors duration-200">
                Reddybook
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-ra-gold transition-colors duration-200">
                About Reddy Anna
              </Link>
            </li>
            <li>
              <Link href="/casino" className="hover:text-ra-gold transition-colors duration-200">
                Reddybook Casino
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-ra-gold transition-colors duration-200">
                Reddy Anna Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-ra-gold transition-colors duration-200">
                Reddy Anna Signup
              </Link>
            </li>
            <li>
              <Link href="/sports-betting" className="hover:text-ra-gold transition-colors duration-200">
                Reddy Anna Sports Betting
              </Link>
            </li>
            <li>
              <Link href="/sports-betting/cricket-betting" className="hover:text-ra-gold transition-colors duration-200">
                Reddy Anna Cricket Betting
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Important Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-[18px] font-bold border-b-2 border-ra-crimson pb-2 w-fit">
            Important Links
          </h3>
          <ul className="flex flex-col gap-2.5 text-[14px] font-semibold">
            <li>
              <Link href="/terms-and-conditions" className="hover:text-ra-gold transition-colors duration-200">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-ra-gold transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/responsible-gaming" className="hover:text-ra-gold transition-colors duration-200">
                Responsible Gaming
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-ra-gold transition-colors duration-200">
                Reddy Anna Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Customer Support */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-[18px] font-bold border-b-2 border-ra-crimson pb-2 w-fit">
            Customer Support
          </h3>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li className="flex flex-col">
              <span className="font-bold text-white text-[13px] uppercase tracking-wide opacity-50">Email Support</span>
              <a href="mailto:Support@reddysports.co" className="hover:text-ra-gold transition-colors duration-200 font-semibold break-all">
                Support@reddysports.co
              </a>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-white text-[13px] uppercase tracking-wide opacity-50">Reddy Anna Whatsapp</span>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ra-gold transition-colors duration-200 font-bold text-ra-gold flex items-center gap-1.5 mt-0.5"
              >
                <span>💬 +91 98646 92258</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Below footer bottom section */}
      <div className="w-full bg-[#6b1201] text-white border-t border-white/20 py-5">
        <div className="mx-auto max-w-[1240px] px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 text-[13px] font-semibold">
          <p>
            &copy; 2026{" "}
            <Link href="/" className="text-ra-gold font-bold hover:underline">
              Reddy Anna
            </Link>{" "}
            All rights reserved. 18+ only. Play responsibly. Betting involves risk &mdash; please stay within your limits.
          </p>
        </div>
      </div>

    </footer>
  );
}
