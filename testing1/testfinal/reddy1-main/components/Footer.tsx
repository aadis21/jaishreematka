import React from "react";
import { CONFIG } from "@/utils/config";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#05080f] border-t border-[#F0901A]/10 pt-16 pb-8 px-4 md:px-8 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-left">
        {/* Column 1: About Reddy Anna */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-black text-lg border-b border-[#F0901A]/10 pb-2 mb-2">
            About Reddy Anna Book
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Since 2010, Reddy Anna Book has provided online betting service in India. Join our trusted 200+ branches network and Get authorised ID. Create Reddy Anna Online Book id in 2 minutes. No KYC, no documentation, instant approval.
          </p>
        </div>

        {/* Column 2: About Tags */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-black text-lg border-b border-[#F0901A]/10 pb-2 mb-2">
            About
          </h4>
          <ul className="flex flex-col gap-2.5">
            {[
              { label: "Reddy Anna", href: "/" },
              { label: "Reddy Anna Online Book", href: "/" },
              { label: "Reddy Book", href: "/" },
              { label: "Reddy Anna Booking", href: "/" },
              { label: "Reddy Anna Book Login", href: "/login" },
              { label: "Reddy Anna Club", href: "/" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-amber-300 text-sm font-semibold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-black text-lg border-b border-[#F0901A]/10 pb-2 mb-2">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about-us" },
              { label: "Contact US", href: "/contact-us" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms and Conditions", href: "/terms-and-conditions" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-amber-300 text-sm font-semibold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Certification Badges */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#F0901A]/5 flex flex-wrap justify-center items-center gap-6 md:gap-10">
        {CONFIG.images.certs.map((cert, idx) => (
          <img
            key={idx}
            src={cert}
            alt="Certification Badge"
            className="h-10 md:h-12 object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </div>

      {/* Copyright Bottom */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#F0901A]/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-semibold">
        <p>© {new Date().getFullYear()} Reddy Anna Book. All Rights Reserved.</p>
        <p className="max-w-md text-center md:text-right leading-normal text-[10px]">
          Warning: Online betting and gambling carry a financial risk. Play responsibly and only if you are 18+ years of age. Certified secure connection under SSL encryption.
        </p>
      </div>
    </footer>
  );
};
