"use client";

import React from "react";
import { CONFIG } from "@/utils/config";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-2xl p-4 shadow-lg sticky top-24 select-none">
      <h3 className="text-white font-black text-lg px-3 pb-3 mb-3 border-b border-[#007BFF]/10 flex items-center gap-2">
        <span className="text-[#00E5FF]">🔥</span> Sports Menu
      </h3>
      <ul className="flex flex-col gap-1">
        {CONFIG.sidebarCategories.map((cat, idx) => (
          <li key={idx}>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                cat.active
                  ? "bg-gradient-to-r from-[#00E5FF] to-[#007BFF] text-black shadow-md shadow-[#007BFF]/15 scale-[1.02]"
                  : "text-gray-300 hover:text-white hover:bg-[#1a2233]"
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              <span>{cat.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
