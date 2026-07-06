"use client";

import React, { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item expanded by default as in reference

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-4 text-left select-none">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-[#F0901A]/10 rounded-2xl overflow-hidden bg-[#0c1322] shadow-[0_4px_20px_rgba(240,144,26,0.04)]"
          >
            <button
              onClick={() => toggleItem(idx)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-base md:text-lg text-white hover:text-amber-300 transition-colors duration-200"
            >
              <span>{item.question}</span>
              <span className="text-[#F0901A] transition-transform duration-350">
                {isOpen ? (
                  // Expanded icon: Angle double down SVG
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path>
                  </svg>
                ) : (
                  // Closed icon: Angle double right SVG
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
                  </svg>
                )}
              </span>
            </button>

            {/* Smooth height transition wrapper */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-96 opacity-100 border-t border-[#F0901A]/10" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 text-gray-300 text-sm md:text-base leading-relaxed bg-[#05080f]/40">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
