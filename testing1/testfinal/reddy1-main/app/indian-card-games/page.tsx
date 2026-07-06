import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";

export const metadata: Metadata = {
  title: "Indian Card Games Online | Teen Patti & Andar Bahar | Reddy Anna Book",
  description: "Play Teen Patti, Andar Bahar, Rummy and more Indian card games on Reddy Anna Book with live dealers and certified fair-play.",
  alternates: { canonical: "https://reddynow.com/indian-card-games" },
  openGraph: {
    title: "Indian Card Games | Reddy Anna Book",
    description: "Play Teen Patti, Andar Bahar and more Indian card games with live dealers on Reddy Anna Book.",
    url: "https://reddynow.com/indian-card-games",
    type: "website",
  },
};

export default function IndianCardGamesPage() {
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
              Indian Card Games Online — Teen Patti & Andar Bahar Live
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Experience India's most popular traditional card games live on your screen. At Reddy Anna Book, we bring card games like Teen Patti, Andar Bahar, Muflis, and Dragon Tiger to you with real live dealers, transparent RNG card shuffling, and high payouts. Wager live and win instantly!
            </p>
            <div className="pt-2">
              <ConicButton text="Start Playing Card Games" />
            </div>
          </section>

          {/* Grid of Card Games */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2">
              🃏 Traditional Indian Games Selection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Teen Patti Live",
                  desc: "India's beloved 3-card game. Bet on players, dealers, pairs, or premium side bets with live video streams."
                },
                {
                  title: "Andar Bahar Live",
                  desc: "Simple, fast, and highly exciting. Wager on whether the matching card lands on the Andar or Bahar side."
                },
                {
                  title: "Muflis Teen Patti",
                  desc: "A custom twist on Teen Patti where the lowest-ranking card combination wins. Extremely popular among card game fans."
                }
              ].map((game, idx) => (
                <div key={idx} className="bg-[#05080f] p-5 rounded-2xl border border-[#F0901A]/5 shadow-md">
                  <h4 className="text-white font-extrabold text-base mb-2">{game.title}</h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{game.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Info Panels */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4">
            <h3 className="text-[#FFD13F] font-black text-xl md:text-2xl">
              Certified Fair Shuffling & Security
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-semibold">
              Winnings are credited to your Reddy Anna wallet instantly upon round completion and can be withdrawn 24/7:
            </p>
            <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2 font-semibold pl-4 list-disc">
              <li>High-fidelity live stream cards with professional local dealers.</li>
              <li>Certified random-number generator systems ensuring absolute transparency.</li>
              <li>Instant deposits with UPI starting at just ₹100.</li>
              <li>Withdraw your card game winnings and receive bank transfers inside 2-4 hours.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
