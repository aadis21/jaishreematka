import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";
import { MatchList } from "@/components/MatchList";

export const metadata: Metadata = {
  title: "Football Betting Online | Live Odds | Reddy Anna Book",
  description: "Bet on Premier League, Champions League and international football with Reddy Anna Book. Best live odds, instant withdrawals and trusted platform.",
  alternates: { canonical: "https://reddynow.com/reddy-anna-sports/football-betting" },
  openGraph: {
    title: "Football Betting | Reddy Anna Book",
    description: "Bet on Premier League and international football with best live odds on Reddy Anna Book.",
    url: "https://reddynow.com/reddy-anna-sports/football-betting",
    type: "website",
  },
};

export default function FootballBettingPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 select-none">
      <div className="w-full flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar */}
        <div className="hidden lg:block lg:w-1/4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-8 text-left">
          
          {/* Main Title Banner */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h1 className="text-[#FFD13F] font-black text-2xl md:text-3xl tracking-wide leading-tight">
              Football Betting Online — Global Leagues & High Payouts
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Place your football bets on major domestic and international football leagues. From the English Premier League (EPL), Spanish La Liga, UEFA Champions League, to the Indian Super League (ISL), we provide the widest selection of football betting markets. Wager on match result, total goals, over/under, both teams to score (BTTS), and player performance props.
            </p>
            <div className="pt-2">
              <ConicButton text="Start Football Betting Now" />
            </div>
          </section>

          {/* Active Football Matches Grid */}
          <MatchList
            category="football"
            iconUrl="https://reddybookwinin.in/wp-content/uploads/2026/04/footballicon.webp"
            title="Live Football Matches"
          />

          {/* Info Panels */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4">
            <h3 className="text-[#FFD13F] font-black text-xl md:text-2xl">
              Football Markets & Exchange Features
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-semibold">
              Wager on your favorite football teams with the fastest odds engines on our platforms:
            </p>
            <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2 font-semibold pl-4 list-disc">
              <li>Comprehensive live-in-play betting with ball-by-ball updates.</li>
              <li>High-stakes exchanges supporting peer-to-peer lay and back trades.</li>
              <li>Instant deposits with UPI, Paytm, GPay, and Net Banking.</li>
              <li>Zero payout fees with processing speeds inside 2-4 hours.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
