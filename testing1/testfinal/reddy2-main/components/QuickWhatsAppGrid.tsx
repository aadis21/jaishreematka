"use client";

import React from "react";

const items = [
  { src: "https://reddysports.co/wp-content/uploads/2026/03/MINES.gif", alt: "MINES.gif" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/COLOR-PREDICTION.gif", alt: "COLOR-PREDICTION.gif" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/AVIATOR.gif", alt: "AVIATOR.gif" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/FUN-GAMES.gif", alt: "FUN-GAMES.gif" }
];

export default function QuickWhatsAppGrid() {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item, idx) => (
          <a
            key={idx}
            href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden border-2 border-white/20 hover:border-ra-gold shadow-lg transition-transform duration-250 hover:scale-[1.02]"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto object-cover select-none"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
