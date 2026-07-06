import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";
import { MatchList } from "@/components/MatchList";

export const metadata: Metadata = {
  title: "Cricket Betting Online | Live IPL Odds | Reddy Anna Book",
  description: "Bet on live cricket matches with Reddy Anna Book. Best IPL, T20 and Test match odds with instant payouts and 24/7 support.",
  alternates: { canonical: "https://reddynow.com/reddy-anna-sports/cricket-betting" },
  openGraph: {
    title: "Cricket Betting | Reddy Anna Book",
    description: "Bet on live cricket with best IPL odds on Reddy Anna Book.",
    url: "https://reddynow.com/reddy-anna-sports/cricket-betting",
    type: "website",
  },
};

export default function CricketBettingPage() {
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
              Cricket Betting Online — Premium Odds & Live Feeds
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Place your cricket bets with India's most trusted betting exchange. We provide competitive pre-match and live ball-by-ball odds across every single professional cricket league on earth. Enjoy high limits, zero commission fees on standard winnings, and instant deposits starting at just ₹100.
            </p>
            <div className="pt-2">
              <ConicButton text="Start Cricket Betting Now" />
            </div>
          </section>

          {/* Active Cricket Matches Grid */}
          <MatchList
            category="cricket"
            iconUrl="https://reddybookwinin.in/wp-content/uploads/2026/04/cricketicon.webp"
            title="Live Cricket Matches"
          />

          {/* Info Panels */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4">
            <h3 className="text-[#FFD13F] font-black text-xl md:text-2xl">
              Why Bet on Cricket at Reddy Anna Book?
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-semibold">
              Our betting engine updates session odds and ball outcomes in real-time, giving you the edge on:
            </p>
            <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2 font-semibold pl-4 list-disc">
              <li>IPL ball-by-ball match sessions & player outcome props.</li>
              <li>T20, ODI, and Test series pre-match winner predictions.</li>
              <li>Peer-to-peer live trading on Reddy Anna Tiger & Sky Exchanges.</li>
              <li>Fast payouts back to your bank account or UPI inside 2-4 hours.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
