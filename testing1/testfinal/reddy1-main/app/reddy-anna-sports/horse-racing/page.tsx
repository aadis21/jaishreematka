import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";

export const metadata: Metadata = {
  title: "Horse Racing Betting | Live Odds | Reddy Anna Book",
  description: "Bet on live horse racing events with competitive odds on Reddy Anna Book. India's trusted sports betting platform with instant payout guarantee.",
  alternates: { canonical: "https://reddynow.com/reddy-anna-sports/horse-racing" },
  openGraph: {
    title: "Horse Racing Betting | Reddy Anna Book",
    description: "Bet on live horse racing with competitive odds on Reddy Anna Book.",
    url: "https://reddynow.com/reddy-anna-sports/horse-racing",
    type: "website",
  },
};

export default function HorseRacingPage() {
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
              Horse Racing Betting Online — Premium Global Racing Events
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Bet on the most prestigious horse racing events from around the world. We offer comprehensive coverage and highly competitive odds on races in India (Mumbai, Pune, Bangalore, Kolkata, Hyderabad, Chennai) and global tracks across the UK, USA, Australia, and South Africa. Wager on Win, Place, Forecast, and Each-Way outcomes.
            </p>
            <div className="pt-2">
              <ConicButton text="Start Horse Racing Betting" />
            </div>
          </section>

          {/* Info Panels */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4">
            <h3 className="text-[#FFD13F] font-black text-xl md:text-2xl">
              Racing Markets & Payout Security
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-semibold">
              Enjoy top-tier racing features and secure transactions with your Reddy Anna Book ID:
            </p>
            <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2 font-semibold pl-4 list-disc">
              <li>Comprehensive coverage of domestic and international racing cards.</li>
              <li>Real-time win/place pools and stable odds grids.</li>
              <li>Instant deposits with UPI starting at just ₹100.</li>
              <li>Secure, fee-free withdrawals processed inside 2-4 hours.</li>
            </ul>
          </section>

          {/* Promotional Banner */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 text-center flex flex-col items-center gap-4">
            <h3 className="text-[#FFD13F] font-black text-xl md:text-2xl uppercase tracking-wider">
              Get Your Racing ID Created Instantly
            </h3>
            <p className="text-gray-200 text-sm md:text-base max-w-xl font-semibold leading-relaxed">
              Wager live on active race cards starting with just a ₹100 deposit. Contact our official WhatsApp agents and get your betting credentials inside 60 seconds!
            </p>
            <div className="pt-2">
              <ConicButton text="Get Your Verified ID Now" />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
