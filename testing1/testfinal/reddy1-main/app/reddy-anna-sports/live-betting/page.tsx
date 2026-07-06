import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";
import { MatchList } from "@/components/MatchList";

export const metadata: Metadata = {
  title: "Live Betting | In-Play Sports Odds | Reddy Anna Book",
  description: "Bet in real-time on live sports with Reddy Anna Book. In-play cricket, football and tennis with live odds updated every second.",
  alternates: { canonical: "https://reddynow.com/reddy-anna-sports/live-betting" },
  openGraph: {
    title: "Live Betting | Reddy Anna Book",
    description: "Bet in real-time on live sports with in-play odds on Reddy Anna Book.",
    url: "https://reddynow.com/reddy-anna-sports/live-betting",
    type: "website",
  },
};

export default function LiveBettingPage() {
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
              Live Betting Online — Real-Time Sports Trading
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Experience the absolute thrill of real-time sports betting. With live-in-play betting, odds update dynamically with every ball bowled, goal scored, or point won. We cover live events across Cricket, Football, Tennis, Basketball, Volleyball, Badminton, and esports.
            </p>
            <div className="pt-2">
              <ConicButton text="Start Live Betting Now" />
            </div>
          </section>

          {/* Active Live Matches Grid */}
          <MatchList
            category="cricket"
            iconUrl="https://reddybookwinin.in/wp-content/uploads/2026/04/cricketicon.webp"
            title="Live Active Matches"
          />

          {/* Info Panels */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4">
            <h3 className="text-[#FFD13F] font-black text-xl md:text-2xl">
              Live Sports Trading & Payouts
            </h3>
            <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2 font-semibold pl-4 list-disc">
              <li>Ball-by-ball session live updates and match winner trends.</li>
              <li>Pulsating responsive badges and fast exchange trading capabilities.</li>
              <li>Instant deposits with local payment systems starting from ₹100.</li>
              <li>Withdraw your live winnings and receive funds within 2-4 hours.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
