"use client";

import React, { useState, useEffect } from "react";

const lobbyItems = [
  { src: "https://reddysports.co/wp-content/uploads/2026/03/SPORTSBOOK.webp", alt: "SPORTSBOOK.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/SLOT-GAMES.webp", alt: "SLOT-GAMES.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/ROYAL-GAMING.webp", alt: "ROYAL-GAMING.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/LOBBY-WINFINITY.webp", alt: "LOBBY-WINFINITY.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/LOBBY-VIVO.webp", alt: "LOBBY-VIVO.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/LOBBY-SEXY.webp", alt: "LOBBY-SEXY.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/LOBBY-PLAYTECH.webp", alt: "LOBBY-PLAYTECH.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/LOBBY-NEO.webp", alt: "LOBBY-NEO.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/LOBBY-MAC-88.webp", alt: "LOBBY-MAC-88.webp" }
];

const categoryItems = [
  { src: "https://reddysports.co/wp-content/uploads/2026/03/CASINO.webp", alt: "CASINO.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/E-CRICKET.webp", alt: "E-CRICKET.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/FISHING-GAMES.webp", alt: "FISHING-GAMES.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/KINGMIDAS-LOBBY.webp", alt: "KINGMIDAS-LOBBY.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/LOBBY-ASIA-GAMES.webp", alt: "LOBBY-ASIA-GAMES.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/LOBBY-AURA.webp", alt: "LOBBY-AURA.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/LOBBY-BOMBAY-LIVE.webp", alt: "LOBBY-BOMBAY-LIVE.webp" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/LOBBY-EZUGI.webp", alt: "LOBBY-EZUGI.webp" }
];

export default function LobbyCarousel() {
  const [lobbyIndex, setLobbyIndex] = useState(0);
  const [catIndex, setCatIndex] = useState(0);

  // Auto slide lobby
  useEffect(() => {
    const lobbyTimer = setInterval(() => {
      setLobbyIndex((prev) => (prev >= lobbyItems.length - 4 ? 0 : prev + 1));
    }, 4500);

    const catTimer = setInterval(() => {
      setCatIndex((prev) => (prev >= categoryItems.length - 4 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(lobbyTimer);
      clearInterval(catTimer);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 w-full max-w-[1240px] mx-auto overflow-hidden px-2 py-4">
      
      {/* Carousel 1: Lobby Cards */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out gap-[10px] md:gap-[8px]"
          style={{
            transform: `translateX(calc(-${lobbyIndex * 25}% - ${lobbyIndex * 7.5}px))`
          }}
        >
          {lobbyItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[calc(25%-7.5px)] sm:w-[calc(50%-4px)] flex-shrink-0 rounded-lg overflow-hidden border border-white/10 hover:border-ra-gold shadow-md hover:scale-[1.02] transition-all duration-200"
            >
              <a href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID" target="_blank" rel="noopener noreferrer">
                <img src={item.src} alt={item.alt} className="w-full h-auto object-cover select-none" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel 2: Category Lobbies */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out gap-[10px] md:gap-[8px]"
          style={{
            transform: `translateX(calc(-${catIndex * 25}% - ${catIndex * 7.5}px))`
          }}
        >
          {categoryItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[calc(25%-7.5px)] sm:w-[calc(50%-4px)] flex-shrink-0 rounded-lg overflow-hidden border border-white/10 hover:border-ra-gold shadow-md hover:scale-[1.02] transition-all duration-200"
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
