import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";

export const metadata: Metadata = {
  title: "About Us | Reddy Anna Book",
  description: "Learn about Reddy Anna Book – India's trusted cricket betting ID platform. Instant ID delivery, secure payments & 24/7 WhatsApp support since 2010.",
  alternates: { canonical: "https://reddynow.com/about-us" },
  openGraph: {
    title: "About Us | Reddy Anna Book",
    description: "Learn about Reddy Anna Book – India's trusted cricket betting ID platform.",
    url: "https://reddynow.com/about-us",
    type: "website",
  },
};

export default function AboutUsPage() {
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
              About Reddy Anna Book — India's Most Trusted Betting Hub
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Founded in 2010, Reddy Anna Book is India's pioneer and premier online cricket betting ID provider and sports exchange network. Operating through an authorized network of 200+ physical branches and trusted support nodes across India, we have served over millions of active punters.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              We stand for speed, fairness, and transparent operations. Our platform supports local payment methods (UPI, Paytm, Net Banking), processes all withdrawals back to local bank accounts in 2-4 hours fee-free, and provides verified account credentials via WhatsApp inside 60 seconds with no hefty documentation or KYC blockades.
            </p>
            <div className="pt-2">
              <ConicButton text="Join Reddy Anna Book Today" />
            </div>
          </section>

          {/* Section: Our Values */}
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6">
            <h2 className="text-[#FFD13F] font-black text-xl md:text-2xl tracking-wide border-b border-[#F0901A]/10 pb-2">
              🎯 Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Absolute Payout Guarantee",
                  desc: "We process every single legit payout without delays. Winnings are processed fee-free inside 2-4 hours, 24 hours a day, 365 days a year."
                },
                {
                  title: "India-First Ecosystem",
                  desc: "Built exclusively for the Indian bettor, supporting standard Indian banking networks, local payment apps, and localized customer support."
                },
                {
                  title: "Transparency & Security",
                  desc: "All transactions are fully SSL encrypted. All slots and casino systems operate on certified fair random-number-generator (RNG) cards."
                }
              ].map((val, idx) => (
                <div key={idx} className="bg-[#05080f] p-5 rounded-2xl border border-[#F0901A]/5 shadow-md">
                  <h4 className="text-white font-extrabold text-base mb-2">{val.title}</h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
