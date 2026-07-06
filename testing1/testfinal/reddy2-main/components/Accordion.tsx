"use client";

import React, { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#dde3ef] py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left font-rajdhani font-semibold text-[18px] text-[#1a1a2e] hover:text-[#c40000] focus:outline-none transition-colors duration-200"
      >
        <span>{question}</span>
        <span className="ml-4 flex-shrink-0 transition-transform duration-300">
          {isOpen ? (
            <svg
              className="w-5 h-5 text-[#c40000]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M20 12H4"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 4v16m8-8H4"
              />
            </svg>
          )}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600 text-[15px] leading-relaxed font-sans">{answer}</p>
        </div>
      </div>
    </div>
  );
}
