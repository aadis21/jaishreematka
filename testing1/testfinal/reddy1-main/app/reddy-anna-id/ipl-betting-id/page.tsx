import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";

export const metadata: Metadata = {
  title: "IPL Betting ID | Official Reddy Anna IPL ID | India's #1 Platform",
  description: "Get your official Reddy Anna IPL Betting ID and bet on every IPL match live. Competitive odds, instant payouts and 24/7 support guaranteed.",
  alternates: { canonical: "https://reddynow.com/reddy-anna-id/ipl-betting-id" },
  openGraph: {
    title: "IPL Betting ID | Reddy Anna Book",
    description: "Get your official Reddy Anna IPL Betting ID and bet on every IPL match live.",
    url: "https://reddynow.com/reddy-anna-id/ipl-betting-id",
    type: "website",
  },
};

export default function IplBettingIdPage() {
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
              IPL 2026 Betting ID — The Premier Hub for IPL Betting
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              The Indian Premier League (IPL) is the biggest cricket show on earth. With the rise of IPL 2026, the demand for verified, secure, and fast betting accounts has reached new heights. A verified Reddy Anna IPL Betting ID represents the ultimate portal for Indian punters looking to lock in maximum values, high liquidity, and competitive ball-by-ball odds.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              We cover all IPL matches live. Enjoy real-time session updates, pre-match outcomes, live prop trading, and instant withdrawal processing for your winnings inside 2-4 hours guaranteed.
            </p>
            <div className="pt-2">
              <ConicButton text="Get Your IPL Betting ID Now" />
            </div>
          </section>

          {/* Section: IPL Features */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2">
              🔥 Features of IPL Betting on Reddy Anna Book
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "High Liquidity Exchange",
                  desc: "Trade live odds on the biggest matches with thousands of active players on our peer-to-peer exchanges."
                },
                {
                  title: "Daily Match Promos",
                  desc: "Claim special reload match cashbacks, leadership board bonuses, and daily free-bet coupons throughout the season."
                },
                {
                  title: "Fast Payouts",
                  desc: "Request a withdrawal for your IPL winnings and see the funds hit your bank account inside 2-4 hours, without any processing fees."
                },
                {
                  title: "24/7 VIP Support",
                  desc: "Access dedicated support agents via WhatsApp and Telegram for instant deposits, account setup, and queries."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#05080f] p-5 rounded-2xl border border-[#F0901A]/5 shadow-md">
                  <h4 className="text-white font-extrabold text-base mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <h3 className="text-[#FFD13F] font-black text-xl md:text-2xl">
              Ready for the Next IPL Match?
            </h3>
            <p className="text-gray-300 text-sm md:text-base max-w-xl font-semibold leading-relaxed">
              Don't miss a single ball of IPL 2026. Get your verified ID created via WhatsApp in under 60 seconds starting with just a ₹100 minimum deposit!
            </p>
            <div className="pt-2">
              <ConicButton text="Claim IPL ID Instantly" />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
