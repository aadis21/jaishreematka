"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import QuickWhatsAppGrid from "../../components/QuickWhatsAppGrid";

export default function ReddybookPage() {
  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#f4f6f9] py-8 flex flex-col gap-10 font-sans">
        
        {/* Hero Banner Section */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="bg-[#0f1923] text-white rounded-3xl overflow-hidden border border-ra-gold/20 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ra-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-ra-crimson/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-10 md:p-6">
              <div className="flex flex-col gap-6 items-start relative z-10">
                <span className="bg-[#c40000] text-white text-[11px] uppercase tracking-[2px] font-extrabold px-3 py-1.5 rounded-full shadow-sm">
                  Official VIP Club Partner
                </span>
                <h1 className="text-ra-gold font-poppins font-black text-[38px] md:text-[30px] leading-[1.2] uppercase">
                  Reddybook ID Provider &mdash; Instant VIP Access
                </h1>
                <p className="text-gray-300 text-[15.5px] leading-relaxed">
                  Welcome to the elite club of online betting in India. <b>Reddybook</b> offers players a highly stable gaming exchange, premium digital interface, and ultra-fast UPI/NetBanking withdrawal support. By registering with the official Reddy Anna provider, you gain instant VIP status, dedicated live managers, and 100% deposit guarantees.
                </p>
                <div className="flex flex-wrap gap-4 text-[13.5px] font-bold uppercase tracking-wider mt-2 w-full sm:w-auto">
                  <a
                    href="https://wa.me/916026703858?text=Hello%20Reddybook,%20I%20want%20to%20get%20my%20VIP%20ID%20now."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-gradient-to-r from-ra-gold to-ra-gold-dark hover:from-white hover:to-white hover:text-ra-crimson text-black font-extrabold rounded-lg shadow-lg hover:shadow-none transition-all flex-grow sm:flex-grow-0 text-center"
                  >
                    Get VIP Reddybook ID
                  </a>
                  <a
                    href="/signup"
                    className="px-8 py-3.5 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-extrabold rounded-lg transition-all flex-grow sm:flex-grow-0 text-center"
                  >
                    Quick Sign Up
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 flex justify-center">
                <img
                  src="https://reddysports.co/wp-content/uploads/2026/05/Reddy-Anna-Login-—-Reddybook-login-securely-1024x597.jpg"
                  alt="Reddybook Premium Gaming Hub"
                  className="w-full max-w-[500px] h-auto object-cover select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick WhatsApp Game Links */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="flex flex-col gap-4 text-center mb-6">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] tracking-[1px] uppercase">
              Play Reddybook Instant Mini Games
            </h2>
            <p className="text-gray-600 text-[15px] max-w-[700px] mx-auto">
              Ready for immediate payouts? Tap on any of our instant micro-games to connect directly on WhatsApp and secure your game sheet.
            </p>
          </div>
          <QuickWhatsAppGrid />
        </section>

        {/* Core Content Grid */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://reddysports.co/wp-content/uploads/2026/05/Reddy-Anna-Book-–-Indias-Most-Trusted-Online-Betting-Platform-1024x597.jpg"
                alt="Reddybook VIP Experience"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-5 items-start">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[30px] md:text-[24px] leading-[1.3] uppercase">
                What Makes Reddybook Club Special?
              </h2>
              <p className="text-gray-600 text-[15px] leading-[1.7] font-sans">
                Reddybook isn&apos;t just another exchange platform; it&apos;s a curated gaming community built for Indian betting enthusiasts who demand high-tier performance, reliable odds grids, and swift transactions.
              </p>
              
              <ul className="flex flex-col gap-3 text-gray-600 text-[14.5px] font-semibold">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#25D366] text-[18px]">⚡</span>
                  <span><b>Instant Automated ID Activation:</b> Get your custom lobby user details in under 2 minutes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#25D366] text-[18px]">⚡</span>
                  <span><b>100% Secure Transactions:</b> Zero risk deposits and direct UPI same-day bank transfers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#25D366] text-[18px]">⚡</span>
                  <span><b>High Drift Odds Rates:</b> Gain maximum value from live cricket leagues like IPL and PSL.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#25D366] text-[18px]">⚡</span>
                  <span><b>24/7 Dedicated Account Managers:</b> Speak to real humans anytime via our VIP WhatsApp channels.</span>
                </li>
              </ul>
              
              <a
                href="https://wa.me/916026703858?text=Hello%20Reddybook,%20I%20want%20to%20register%20an%20account%20instantly."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all mt-2"
              >
                Register Reddybook Account Now
              </a>
            </div>
          </div>
        </section>

        {/* Top Platforms VIP Grid */}
        <section className="px-4 py-16 bg-[#050505] border-t border-ra-gold/25 rounded-3xl max-w-[1240px] w-full mx-auto text-white">
          <div className="flex flex-col gap-6 items-center text-center px-4">
            <h2 className="text-[#ffcc00] font-poppins font-black text-[34px] md:text-[26px] uppercase tracking-wide leading-tight">
              Top Reddybook Verified Platforms
            </h2>
            <p className="text-gray-300 text-[15.5px] max-w-[800px] mx-auto leading-relaxed">
              Use your single verified <b>Reddybook ID</b> to seamlessly login to India&apos;s leading sport exchanges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left mt-8">
              {[
                { name: "Cricbet99 Exchange", bonus: "150% Welcome", min: "₹100", border: "border-[#ffcc00]", desc: "Instant cricket slips, live streaming, ball-by-ball micro-bets." },
                { name: "Laser247 Premium", bonus: "100% Match Offer", min: "₹200", border: "border-[#ff0033]", desc: "Ultra low lag digital boards, global sports calendar, high liquidity." },
                { name: "Lotus365 Classic", bonus: "₹1000 Free Chip", min: "₹100", border: "border-[#00cc66]", desc: "Extremely simplified UI, perfect for beginners, full safe ledger." },
                { name: "Gold365 Exchange", bonus: "Up to ₹5000 Bonus", min: "₹200", border: "border-[#ffaa00]", desc: "VIP design matching theme, multi-odds charts, rapid live settlement." }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className={`bg-white p-6 rounded-2xl flex flex-col gap-3 text-black transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(255,204,0,0.1)] border-t-[5px] ${card.border}`}
                >
                  <h3 className="font-rajdhani font-bold text-[19px] text-black tracking-[0.5px] uppercase">
                    {card.name}
                  </h3>
                  <div className="flex flex-col gap-0.5 font-bold text-[12.5px]">
                    <span className="text-[#00aa88]">{card.bonus}</span>
                    <span className="text-[#ff6600]">Min Deposit {card.min}</span>
                  </div>
                  
                  <p className="text-gray-600 text-[13px] leading-relaxed my-2">
                    {card.desc}
                  </p>

                  <a
                    href="https://wa.me/916026703858?text=Hello%20Reddybook,%20I%20want%20to%20get%20an%20ID%20for%20platform%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 bg-black hover:bg-[#ffcc00] hover:text-black border-2 border-black hover:border-[#ffcc00] text-white font-bold rounded-full text-[13px] uppercase tracking-wide transition-all duration-300 shadow-sm mt-auto"
                  >
                    Get Exchange ID
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
