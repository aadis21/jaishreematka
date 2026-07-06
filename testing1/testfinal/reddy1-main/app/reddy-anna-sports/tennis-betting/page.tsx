import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";
import { MatchList } from "@/components/MatchList";

export const metadata: Metadata = {
  title: "Tennis Betting Online | Live Grand Slam Odds | Reddy Anna Book",
  description: "Bet on Wimbledon, US Open, Australian Open and ATP matches with Reddy Anna Book. Live tennis odds and fast withdrawals.",
  alternates: { canonical: "https://reddynow.com/reddy-anna-sports/tennis-betting" },
  openGraph: {
    title: "Tennis Betting | Reddy Anna Book",
    description: "Bet on Wimbledon, US Open and ATP matches with Reddy Anna Book.",
    url: "https://reddynow.com/reddy-anna-sports/tennis-betting",
    type: "website",
  },
};

export default function TennisBettingPage() {
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
              Tennis Betting Online — Grand Slams, ATP, & WTA Tournaments
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Bet on global professional tennis tournaments with highly competitive odds. Whether it's Wimbledon, the US Open, French Open, Australian Open, ATP Tours, or WTA events, we provide extensive tennis betting coverage. Place your bets on Match Winner, Set Winner, Total Games, Handicap, and live point-by-point outcomes.
            </p>
            <div className="pt-2">
              <ConicButton text="Start Tennis Betting Now" />
            </div>
          </section>

          {/* Active Tennis Matches Grid */}
          <MatchList
            category="tennis"
            iconUrl="https://reddybookwinin.in/wp-content/uploads/2026/04/tennisicon.webp"
            title="Tennis Matches"
          />

          {/* Info Panels */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4">
            <h3 className="text-[#FFD13F] font-black text-xl md:text-2xl">
              Tennis Betting Exchange Features
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-semibold">
              Enjoy active live tennis trading and swift withdrawals with your Reddy Anna account:
            </p>
            <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2 font-semibold pl-4 list-disc">
              <li>Comprehensive live-in-play tennis odds updating point-by-point.</li>
              <li>Peer-to-peer backing and laying on major tennis match exchanges.</li>
              <li>Instant deposit capabilities and swift bank transfers starting from ₹100.</li>
              <li>No processing fees on standard withdrawals inside 2-4 hours.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
