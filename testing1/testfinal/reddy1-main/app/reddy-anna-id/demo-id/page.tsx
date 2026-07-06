import React from "react";
import type { Metadata } from "next";
import { CONFIG } from "@/utils/config";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";

export const metadata: Metadata = {
  title: "Free Demo ID | Try Reddy Anna Book Risk-Free",
  description: "Get a free Reddy Anna Demo ID and explore the platform risk-free. Try cricket betting, live casino and sports betting before depositing real money.",
  alternates: { canonical: "https://reddynow.com/reddy-anna-id/demo-id" },
  openGraph: {
    title: "Free Demo ID | Reddy Anna Book",
    description: "Get a free Reddy Anna Demo ID and explore the platform risk-free.",
    url: "https://reddynow.com/reddy-anna-id/demo-id",
    type: "website",
  },
};

export default function DemoIdPage() {
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
              Reddy Anna Demo ID — Explore India's Premier Betting Platform Without Risking a Single Rupee
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              The single biggest barrier for new sports bettors in India is not motivation it is unfamiliarity. The fear of depositing real money onto a platform you have never used before, navigating markets you do not fully understand, and placing bets without first experiencing how the interface works is completely rational. This is exactly why Reddy Anna created the Demo ID—a full-featured, risk-free simulation of the live betting platform that lets you explore everything Reddy Anna offers without committing a single rupee.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Your Reddy Anna Demo ID is not a stripped-down preview or a marketing gimmick. It is a functional replica of the real platform complete with live odds feeds, the full market menu, the Bet Builder, the Statistics Hub, and virtual trial points to let you practice betting.
            </p>
            <div className="pt-2">
              <ConicButton text="Get Your Free Demo ID Now" />
            </div>
          </section>

          {/* Section: Features of Demo ID */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2">
              ⚡ What Can You Do with a Reddy Anna Demo ID?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-semibold">
              The demo ID is loaded with ₹10,000 virtual trial coins allowing you to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Practice IPL Betting",
                  desc: "Learn session bets, ball-by-ball markets, match winners, and prop bets during active IPL live events."
                },
                {
                  title: "Explore Live Casino",
                  desc: "Explore card games like Teen Patti, Andar Bahar, Roulette, and Blackjack tables before placing actual stakes."
                },
                {
                  title: "Test Betting Strategies",
                  desc: "Test backing and laying outcomes on the Reddy Anna Tiger and Sky Exchange environments risk-free."
                }
              ].map((feat, idx) => (
                <div key={idx} className="bg-[#05080f] p-5 rounded-2xl border border-[#F0901A]/5 shadow-md">
                  <h4 className="text-white font-extrabold text-base mb-2">{feat.title}</h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to claim Demo ID */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4">
            <h3 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide mb-2">
              How to Get Your Free Trial Demo ID?
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-semibold">
              Acquiring a practice demo ID takes under 60 seconds. Simply follow these steps:
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-2">
              {[
                { step: "1", title: "Click WhatsApp", desc: "Click the floating WhatsApp or Conic Buttons to connect with an official agent." },
                { step: "2", title: "Request 'Demo ID'", desc: "Send a message saying 'Demo ID'. Our 24/7 support will respond instantly." },
                { step: "3", title: "Get Practice Credentials", desc: "You will receive a trial username and secure password with 10k virtual points." }
              ].map((step, idx) => (
                <div key={idx} className="flex-1 bg-[#05080f] p-5 rounded-2xl border border-[#F0901A]/5 flex flex-col items-center text-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FFD13F] to-[#F0901A] text-black font-black flex items-center justify-center text-sm shadow-md">
                    {step.step}
                  </span>
                  <h4 className="text-white font-extrabold text-sm">{step.title}</h4>
                  <p className="text-gray-400 text-xs leading-normal">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Accordion Callout */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 text-center flex flex-col items-center gap-4">
            <h3 className="text-[#FFD13F] font-black text-xl md:text-2xl uppercase tracking-wider">
              Explore Without Risk Today
            </h3>
            <p className="text-gray-200 text-sm md:text-base max-w-xl font-semibold leading-relaxed">
              No deposit is required. No KYC is needed. Simply explore the original interface, odds, and casino platforms fully before making a decision. Connect to our WhatsApp agent now!
            </p>
            <div className="pt-2">
              <ConicButton text="Claim Free Demo ID Now" />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
