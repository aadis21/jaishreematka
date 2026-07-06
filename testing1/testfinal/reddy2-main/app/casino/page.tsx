"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";

export default function CasinoLobby() {
  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#0f0f10] py-8 flex flex-col gap-10 font-sans text-white">
        
        {/* Casino Hero */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="bg-[#191919] border border-white/10 text-white rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-ra-crimson/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-ra-gold/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-10 md:p-6">
              <div className="flex flex-col gap-5 items-start relative z-10">
                <span className="bg-[#ffcc00] text-black text-[11px] uppercase tracking-[2px] font-extrabold px-3 py-1.5 rounded-full shadow-sm">
                  ♠️ Live Dealer Lobbies Active
                </span>
                <h1 className="text-[#ffcc00] font-poppins font-black text-[38px] md:text-[28px] leading-[1.2] uppercase">
                  Reddy Anna Live Casino &mdash; Real Dealers
                </h1>
                <p className="text-gray-300 text-[15.5px] leading-relaxed font-sans">
                  Immerse yourself in India&apos;s most luxurious digital casino rooms. Play classic table games like Teen Patti, Andar Bahar, Poker, Roulette, Slots, and Blackjack with professional live dealers in full HD streaming.
                </p>
                <div className="flex flex-wrap gap-4 text-[13.5px] font-bold uppercase tracking-wider mt-2 w-full sm:w-auto">
                  <a
                    href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20get%20a%20Casino%20ID%20now."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-gradient-to-r from-ra-gold to-ra-gold-dark hover:from-white hover:to-white hover:text-ra-crimson text-black font-extrabold rounded-lg shadow-lg hover:shadow-none transition-all flex-grow sm:flex-grow-0 text-center"
                  >
                    Get Premium Casino ID
                  </a>
                  <a
                    href="/signup"
                    className="px-8 py-3.5 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-extrabold rounded-lg transition-all flex-grow sm:flex-grow-0 text-center"
                  >
                    Create Account
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 flex justify-center max-h-[380px]">
                <img
                  src="https://reddysports.co/wp-content/uploads/2026/04/Casino-Games-on-Reddy-Anna.jpg"
                  alt="Live Casino Rooms"
                  className="w-full max-w-[500px] h-auto object-cover select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Live Dealer Game Rooms Grid */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="flex flex-col gap-2 text-center mb-10">
            <h2 className="text-[#ffcc00] font-poppins font-black text-[32px] md:text-[26px] uppercase tracking-wide">
              Live Dealer Game Rooms
            </h2>
            <p className="text-gray-400 text-[15px] max-w-[700px] mx-auto leading-relaxed">
              Join active multiplayer tables in real-time. Connect with our live managers to deposit and unlock secure credits instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Slots Lobbies", desc: "Enjoy thousands of multi-theme video slots loaded with scatter bonuses, wild cards, and dynamic cash jackpots.", route: "/casino/slots", emoji: "🎰", border: "border-ra-gold" },
              { title: "Live Roulette", desc: "Bet red/black or configure single number cards. Spin European or American wheels in ultra HD streaming lobbies.", route: "/casino/roulette", emoji: "🎡", border: "border-ra-crimson" },
              { title: "Premium Poker", desc: "Compete against live tables in Texas Hold&apos;em or Omaha. Join high-limits VIP tourneys or practice on small-stakes boards.", route: "/casino/poker", emoji: "🃏", border: "border-ra-gold" },
              { title: "Teen Patti Live", desc: "India&apos;s ultimate card game favorite. Place high side-bets, see real dealers, and secure swift card values.", route: "/casino/teen-patti", emoji: "👑", border: "border-ra-crimson" },
              { title: "Andar Bahar Live", desc: "Predict which spot gets matched first in this quick indigenous Indian casino classic. Settle rounds in seconds.", route: "/casino/andar-bahar", emoji: "⚜️", border: "border-ra-gold" },
              { title: "Blackjack & Baccarat", desc: "Test your skill cards directly against live house dealers to reach closest to 21, or place fast Banker/Player bets.", route: "/casino/blackjack", emoji: "🎯", border: "border-ra-crimson" }
            ].map((game, idx) => (
              <div
                key={idx}
                className="bg-[#191919] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-2.5 transition-all duration-300 relative overflow-hidden group shadow-lg"
              >
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-white/5 rounded-bl-[80px] flex items-center justify-center text-[28px] font-black group-hover:bg-[#ffcc00]/10 transition-colors">
                  <span className="mr-[-10px] mt-[-10px]">{game.emoji}</span>
                </div>

                <h3 className="font-rajdhani font-black text-[22px] text-white tracking-[0.5px] uppercase border-b border-white/5 pb-2 pr-8">
                  {game.title}
                </h3>
                
                <p className="text-gray-400 text-[13.5px] leading-relaxed">
                  {game.desc}
                </p>

                <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
                  <a
                    href={game.route}
                    className="flex-grow text-center py-2.5 bg-transparent border border-white/20 hover:border-ra-gold hover:text-ra-gold text-white font-bold rounded-lg text-[13px] uppercase tracking-wide transition-all"
                  >
                    View Details
                  </a>
                  <a
                    href={`https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20play%20${encodeURIComponent(game.title)}%20now.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow text-center py-2.5 bg-[#ffcc00] hover:bg-white text-black font-extrabold rounded-lg text-[13px] uppercase tracking-wide transition-all"
                  >
                    Direct Play
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Casino Key Information Guides */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="bg-[#191919] border border-white/10 p-8 md:p-6 rounded-3xl shadow-xl flex flex-col gap-6 text-left">
            <h2 className="text-[#ffcc00] font-poppins font-black text-[26px] uppercase tracking-[0.5px]">
              Key Live Casino Rules &amp; Safe Access Guidelines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[14px]">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col gap-3">
                <h3 className="font-rajdhani font-bold text-[18px] text-[#ffcc00] uppercase">
                  ⭐ How To Join Lobbies
                </h3>
                <ul className="list-disc pl-5 flex flex-col gap-2.5 text-gray-300 font-semibold leading-relaxed">
                  <li>Secure your casino credentials through official WhatsApp agents.</li>
                  <li>Login to your Reddy Anna Book profile page and enter the Casino Room launcher.</li>
                  <li>Choose your preferred dealer table and configure your chip values.</li>
                  <li>Winnings are instantly compiled and ready for 1-click UPI payout.</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col gap-3">
                <h3 className="font-rajdhani font-bold text-[18px] text-[#ffcc00] uppercase">
                  🔒 Fairness &amp; SSL Guarantees
                </h3>
                <ul className="list-disc pl-5 flex flex-col gap-2.5 text-gray-300 font-semibold leading-relaxed">
                  <li>Our dealer feeds operate on zero-delay high frequency HD signals.</li>
                  <li>All virtual slots use RNG (Random Number Generators) audited by third parties.</li>
                  <li>SSL encryptions safeguard all profile logs and payment pathways.</li>
                  <li>24/7 dedicated support to assist with table limit updates or inquiries.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
