"use client";

import React, { useState, useEffect } from "react";

const images = [
  { src: "https://reddysports.co/wp-content/uploads/2026/03/ipl-2026-reddy-anna-book-id.jpg", alt: "IPL 2026 Reddy Anna Book ID" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/psl-2026-reddy-anna-book-betting.jpg", alt: "PSL 2026 Reddy Anna Book Betting" },
  { src: "https://reddysports.co/wp-content/uploads/2026/03/west-bengal-assembly-election-2026-reddy-anna-betting.jpg", alt: "West Bengal Assembly Election 2026" },
  { src: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-sports-exchange.webp", alt: "Reddy Anna Sports Exchange" },
  { src: "https://reddysports.co/wp-content/uploads/2026/02/zhandu-shootout-reddy-anna-casino.webp", alt: "Zhandu Shootout Reddy Anna Casino" },
  { src: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-casino-2.webp", alt: "Reddy Anna Casino 2" },
  { src: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-sports-betting.webp", alt: "Reddy Anna Sports Betting" },
  { src: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-greyhound-racing.webp", alt: "Reddy Anna Greyhound Racing" },
  { src: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-casino-marble-racing.webp", alt: "Reddy Anna Casino Marble Racing" },
  { src: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-casino-games-mac88.webp", alt: "Reddy Anna Casino Games Mac88" },
  { src: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-casino-crash-games.webp", alt: "Reddy Anna Casino Crash Games" },
  { src: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-casino-5.webp", alt: "Reddy Anna Casino 5" },
  { src: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-casino-4.webp", alt: "Reddy Anna Casino 4" },
  { src: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-casino-3.webp", alt: "Reddy Anna Casino 3" },
  { src: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-casino-1.webp", alt: "Reddy Anna Casino 1" },
  { src: "https://reddysports.co/wp-content/uploads/2026/02/penalty-shootout-reddy-anna-casino.webp", alt: "Penalty Shootout Reddy Anna Casino" },
  { src: "https://reddysports.co/wp-content/uploads/2026/02/Khadda-market-reddy-anna-casino.webp", alt: "Khadda Market Reddy Anna Casino" }
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full max-w-[1240px] mx-auto overflow-hidden rounded-lg shadow-xl border border-white/10 group">
      
      {/* Slider viewports wrapper */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            <a href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID" target="_blank" rel="noopener noreferrer">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover max-h-[480px] md:max-h-[300px] select-none"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-[#ffcc00]/90 hover:text-black text-white p-3 md:p-2 cursor-pointer transition-all opacity-0 group-hover:opacity-100 focus:outline-none"
        aria-label="Previous banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-[#ffcc00]/90 hover:text-black text-white p-3 md:p-2 cursor-pointer transition-all opacity-0 group-hover:opacity-100 focus:outline-none"
        aria-label="Next banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination bullets indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
              currentIndex === idx ? "bg-[#ffcc00] scale-120" : "bg-white/50"
            }`}
            aria-label={`Go to banner slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
