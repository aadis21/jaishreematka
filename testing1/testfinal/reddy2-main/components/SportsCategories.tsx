"use client";

import React, { useState, useEffect } from "react";

const sportsItems = [
  { src: "https://reddysports.co/wp-content/uploads/2026/03/CRICKET.webp", alt: "CRICKET.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/FOOTBALL.webp", alt: "FOOTBALL.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/TENNIS.webp", alt: "TENNIS.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/VOLLYBALL.webp", alt: "VOLLYBALL.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/BASKETBALL.webp", alt: "BASKETBALL.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/E-SPORTS.webp", alt: "E-SPORTS.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/WINNER-CUP.webp", alt: "WINNER-CUP.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/ELECTION.webp", alt: "ELECTION.webp" }
];

export default function SportsCategories() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // 7 visible slides on desktop (index ranges 0 to 1), 4 visible on mobile (index ranges 0 to 4)
      setIndex((prev) => (prev >= sportsItems.length - 7 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[1240px] mx-auto overflow-hidden px-2 py-4">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out gap-[10px] md:gap-[8px]"
          style={{
            transform: `translateX(calc(-${index * (100 / 7)}% - ${index * 8.5}px))`
          }}
        >
          {sportsItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[calc(14.28%-8.5px)] sm:w-[calc(25%-6px)] flex-shrink-0 rounded-lg overflow-hidden border border-white/10 hover:border-ra-gold shadow-md hover:scale-[1.03] transition-all duration-200"
            >
              <a href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID" target="_blank" rel="noopener noreferrer">
                <img src={item.src} alt={item.alt} className="w-full h-auto object-cover select-none" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
