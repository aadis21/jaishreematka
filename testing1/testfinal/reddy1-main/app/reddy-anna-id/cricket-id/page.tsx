import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";

export const metadata: Metadata = {
  title: "Cricket Betting ID | Official Reddy Anna Cricket ID | Instant Delivery",
  description: "Get your official Reddy Anna Cricket Betting ID instantly via WhatsApp. Bet on live cricket, IPL and T20 World Cup with India's most trusted platform.",
  alternates: { canonical: "https://reddynow.com/reddy-anna-id/cricket-id" },
  openGraph: {
    title: "Cricket Betting ID | Reddy Anna Book",
    description: "Get your official Reddy Anna Cricket Betting ID instantly via WhatsApp.",
    url: "https://reddynow.com/reddy-anna-id/cricket-id",
    type: "website",
  },
};

export default function CricketIdPage() {
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
              Official Reddy Anna Cricket Betting ID Provider
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Cricket isn't just a sport in India it is a national passion. And when it comes to online cricket betting, nothing matches the trust, security, and performance of a verified Reddy Anna Cricket ID. Millions of Indian fans rely on Reddy Anna Book for instant cricket betting accounts, high betting limits, ball-by-ball odds coverage, and lightning-fast withdrawal processing.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Your cricket ID gives you instant access to all major local and international cricket tournaments, including the Indian Premier League (IPL), T20 World Cup, ICC Cricket World Cup, Ashes Series, Big Bash League (BBL), Pakistan Super League (PSL), and many others.
            </p>
            <div className="pt-2">
              <ConicButton text="Get Your Cricket ID Now" />
            </div>
          </section>

          {/* Section: Cricket Betting Markets */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2">
              🏏 Extensive Cricket Betting Markets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Pre-Match Markets",
                  desc: "Place your bets on Match Winner, Top Batsman, Top Bowler, Total Sixes, and First Over Runs well before the game starts with competitive odds."
                },
                {
                  title: "Live Session Betting",
                  desc: "Wager live on active sessions (e.g. 6-overs, 10-overs runs), player-by-player runs, ball-by-ball events, and live fall of wickets."
                },
                {
                  title: "Betting Exchange",
                  desc: "Utilize backing and laying models on our Tiger and Sky Exchange environments to lock in profits by trading live cricket odds."
                },
                {
                  title: "IPL Special Promotions",
                  desc: "Get reload match cashbacks, daily free betting tokens, and special tournament leadership board multipliers."
                }
              ].map((mkt, idx) => (
                <div key={idx} className="bg-[#05080f] p-5 rounded-2xl border border-[#F0901A]/5 shadow-md">
                  <h4 className="text-white font-extrabold text-base mb-2">{mkt.title}</h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{mkt.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Deposit & Start */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 text-center md:text-left">
            <h3 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide mb-2">
              Start Your Cricket Betting Journey
            </h3>
            <p className="text-gray-200 text-sm md:text-base max-w-xl font-semibold leading-relaxed">
              Deposits are instant starting at just ₹100, and withdrawals arrive back in your local bank account within 2-4 hours. Contact our official WhatsApp support agents now and get your verified ID created in under 60 seconds!
            </p>
            <div className="pt-2">
              <ConicButton text="Claim Your Cricket ID Now" />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
