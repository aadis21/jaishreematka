"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import CricketOdds from "../../components/CricketOdds";
import FootballOdds from "../../components/FootballOdds";
import SportsCategories from "../../components/SportsCategories";

export default function SportsBettingLobby() {
  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#f4f6f9] py-8 flex flex-col gap-10 font-sans">
        
        {/* Lobby Hero section */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="bg-[#0f1923] text-white rounded-3xl overflow-hidden border border-ra-gold/20 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ra-crimson/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-10 md:p-6">
              <div className="flex flex-col gap-5 items-start relative z-10">
                <span className="bg-[#c40000] text-white text-[11px] uppercase tracking-[2px] font-extrabold px-3 py-1.5 rounded-full shadow-sm">
                  Live Sports Betting Lobby
                </span>
                <h1 className="text-ra-gold font-poppins font-black text-[38px] md:text-[28px] leading-[1.2] uppercase">
                  Reddy Anna Sports Betting &mdash; Premium Exchange
                </h1>
                <p className="text-gray-300 text-[15.5px] leading-relaxed">
                  Welcome to India&apos;s ultimate sports betting exchange dashboard. Place live bets on hundreds of active matches daily across Cricket, Football, Tennis, Kabaddi, and more. Benefit from high-liquidity matches, real-time live-updating drift odds, and absolute withdrawal guarantees.
                </p>
                <div className="flex flex-wrap gap-4 text-[13.5px] font-bold uppercase tracking-wider mt-2 w-full sm:w-auto">
                  <a
                    href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20get%20a%20Sports%20Betting%20ID%20now."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-gradient-to-r from-ra-gold to-ra-gold-dark hover:from-white hover:to-white hover:text-ra-crimson text-black font-extrabold rounded-lg shadow-lg hover:shadow-none transition-all flex-grow sm:flex-grow-0 text-center"
                  >
                    Get Active Sports ID
                  </a>
                  <a
                    href="/login"
                    className="px-8 py-3.5 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-extrabold rounded-lg transition-all flex-grow sm:flex-grow-0 text-center"
                  >
                    Secure Login
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 flex justify-center">
                <img
                  src="https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-Betting-1024x683.jpg"
                  alt="Sports Betting Hub Live"
                  className="w-full max-w-[500px] h-auto object-cover select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Slider */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[28px] uppercase tracking-[1px]">
              Browse Sports Categories
            </h2>
            <p className="text-gray-600 text-[14px]">
              Tap on any sport to access specialized tournament charts and custom odds slips.
            </p>
          </div>
          <SportsCategories />
        </section>

        {/* Live Cricket Odds */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[28px] uppercase tracking-[1px] flex items-center gap-2">
              🏏 Cricket Live Odds Board
            </h2>
            <p className="text-gray-600 text-[14px]">
              Real-time odds updating every 4 seconds. Cells flash <span className="text-yellow-600 font-bold bg-yellow-100 px-1 py-0.5 rounded">yellow</span> when rates rise and <span className="text-red-600 font-bold bg-red-100 px-1 py-0.5 rounded">red</span> when rates fall.
            </p>
          </div>
          <CricketOdds />
        </section>

        {/* Live Football Odds */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[28px] uppercase tracking-[1px] flex items-center gap-2">
              ⚽ Football Live Odds Board
            </h2>
            <p className="text-gray-600 text-[14px]">
              Active soccer tables including Live Match cards, Virtual Leagues, and Premium arrays.
            </p>
          </div>
          <FootballOdds />
        </section>

        {/* SEO Guide Section */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-6">
          <div className="bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-150 flex flex-col gap-6 text-left">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[28px] uppercase tracking-[1px]">
              Why Place Your Sports Bets on Reddy Anna Book?
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              When it comes to online sports betting in India, <b>Reddy Anna Book</b> stands as the market leader with over 10 years of trusted legacy. We focus on providing highly fluid exchanges with deep books, allowing our users to bet comfortably during peak traffic windows like the IPL cricket tournament or football World Cups.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 flex flex-col gap-2">
                <h3 className="font-rajdhani font-bold text-[18px] text-gray-900 uppercase">
                  📈 Advanced Odds Algorithm
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  Our systems monitor worldwide betting volumes dynamically, updating rate margins in real-time to offer you the absolute best value across all matches.
                </p>
              </div>
              <div className="p-5 bg-[#fff5f5] rounded-xl border border-[#c40000]/10 flex flex-col gap-2">
                <h3 className="font-rajdhani font-bold text-[18px] text-[#c40000] uppercase">
                  ⚡ 100% Slip Guarantee
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  Every slip confirmed on our interface is securely verified and settled within minutes of final whistle. Zero risk of phantom slips or cancellations.
                </p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 flex flex-col gap-2">
                <h3 className="font-rajdhani font-bold text-[18px] text-gray-900 uppercase">
                  🕒 24/7 WhatsApp Support
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  Get immediate assistance for deposits, ID creation, withdrawals, or general queries in under 5 minutes from our verified support agents.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
