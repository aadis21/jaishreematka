import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FloatingWhatsApp from "../../../components/FloatingWhatsApp";

interface GameDetails {
  title: string;
  emoji: string;
  image: string;
  description: string;
  rulesTitle: string;
  rules: string[];
}

const casinoGamesData: Record<string, GameDetails> = {
  slots: {
    title: "Slots Lobbies",
    emoji: "🎰",
    image: "https://reddysports.co/wp-content/uploads/2026/04/Casino-Games-on-Reddy-Anna.jpg",
    description: "Spin and win real money on thousands of top video slot machines with classic fruits, ancient mythology, adventurous treasure hunts, and progressive jackpots. Get free spins and b[...]",
    rulesTitle: "Slot Machines Guidelines",
    rules: [
      "Browse our active slot lobby categories and pick your favorite theme (e.g. Book of Dead, Gates of Olympus)",
      "Use easy-to-use sliders to set your preferred bet lines and cost per spin",
      "Hit Spin! and collect Scatter payouts as free spins or use Wilds as substitutes for any symbols",
      "Score direct cash bonuses with sets of rare high-value icons"
    ]
  },
  roulette: {
    title: "Live Roulette Game",
    emoji: "🎡",
    image: "https://reddysports.co/wp-content/uploads/2026/04/Casino-Games-on-Reddy-Anna.jpg",
    description: "Watch live as the dealer spins the wheel. Place inside bets on individual numbers or splits, or go big with high-volume outside bets on red/black, odds/evens, or dozens with imme[...]",
    rulesTitle: "Roulette Odds & Betting Arrays",
    rules: [
      "Pick from our European (single zero) and American (double zero) live roulette feed.",
      "Inside bets offer the thrill of a 36x payout on straight-up numbers; only risk your chips when betting a single digit, split, or corner.",
      "Outside bets on evens/odds, reds/blacks, and dozens have more moderate payouts and a better chance of cashing out.",
      "Always set your predictions before the dealer shouts 'No more bets' and drops the white ball on the wheel."
    ]
  },
  poker: {
    title: "Premium Poker",
    emoji: "🃏",
    image: "https://reddysports.co/wp-content/uploads/2026/04/Casino-Games-on-Reddy-Anna.jpg",
    description: "Showcase your skills on dynamic Texas Hold'em and Omaha tables. Experience live tournaments, bluff, compete in cash games and VIP rooms with multi-country players.",
    rulesTitle: "Official Hand Rankings & Rules",
    rules: [
      "Texas Holdem is played using two hole cards and five community cards.",
      "The betting rounds are pre-flop, flop, turn, river. Check, fold, call or raise. Make the best five-card poker hand using your hole cards and the community cards.",
      "The best hand rankings include Royal Flush, Straight Flush, Four of a Kind, Full House, and more."
    ]
  },
  "teen-patti": {
    title: "Teen Patti Live",
    emoji: "👑",
    image: "https://reddysports.co/wp-content/uploads/2026/04/Casino-Games-on-Reddy-Anna.jpg",
    description: "Play popular Indian three-card poker. Teen Patti is highly social and fast-paced. Set up blind and seen bets and unleash high-limit side cards to beat the live dealer.",
    rulesTitle: "Rank Rules & Payouts",
    rules: [
      "Each player and dealer receives 3 cards face down",
      "The possible ranks, from highest to lowest, are: Trio (Three of a Kind), Pure Sequence, Sequence, Color, Pair, and High Card.",
      "Players must decide whether to play Blind (without looking at their cards) or Chaals (looking at their cards to compete against the dealer’s card sequence).",
      "Compete directly against the dealer to beat his card sequence and win payouts."
    ]
  }
};

export default async function CasinoGamePage({ params }: { params: Promise<{ game: string }> }) {
  const resolvedParams = await params;
  const gameKey = resolvedParams.game;

  // Fallback
  const fallbackTitle = gameKey
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const currentGame = casinoGamesData[gameKey] || {
    title: fallbackTitle,
    emoji: "🃏",
    image: "https://reddysports.co/wp-content/uploads/2026/04/Casino-Games-on-Reddy-Anna.jpg",
    description: `Experience the thrill of live ${fallbackTitle} lobbies on Reddy Anna Book. HD streams, certified dealers, and same-day withdrawal guarantees.`,
    rulesTitle: `How to Play ${fallbackTitle} on Reddy Book`,
    rules: [
      `Secure your verified Live Casino ID through our official WhatsApp support channel.`,
      `Login to your dashboard, navigate to the Casino lobbies, and tap the ${fallbackTitle} table launcher.`,
      `Configure your table chip amounts and interact directly with professional dealers.`,
      `Withdraw your winnings safely in under 30 minutes via instant UPI transfer options.`
    ]
  };

  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#0f0f10] py-8 flex flex-col gap-10 font-sans text-white">
        
        {/* Custom Game Hero */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="bg-[#191919] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-ra-crimson/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-10 md:p-6">
              <div className="flex flex-col gap-5 items-start relative z-10">
                <span className="bg-[#ffcc00] text-black text-[11px] uppercase tracking-[2px] font-extrabold px-3 py-1.5 rounded-full shadow-sm">
                  Casino Game Guide
                </span>
                <h1 className="text-[#ffcc00] font-poppins font-black text-[38px] md:text-[28px] leading-[1.2] uppercase flex items-center gap-2">
                  <span>{currentGame.emoji}</span>
                  <span>{currentGame.title}</span>
                </h1>
                <p className="text-gray-300 text-[15.5px] leading-relaxed">
                  {currentGame.description}
                </p>
                <div className="flex flex-wrap gap-4 text-[13.5px] font-bold uppercase tracking-wider mt-2 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20play%20Live%20${encodeURIComponent(currentGame.title)}%20now.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-[#ffcc00] hover:bg-white text-black font-extrabold rounded-lg shadow-lg hover:shadow-none transition-all flex-grow sm:flex-grow-0 text-center"
                  >
                    Play {currentGame.title} Now
                  </a>
                  <a
                    href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20free%20demo%20credits%20for%20casino."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-extrabold rounded-lg transition-all flex-grow sm:flex-grow-0 text-center"
                  >
                    🔑 Get Demo Credits
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 flex justify-center">
                <img
                  src={currentGame.image}
                  alt={currentGame.title}
                  className="w-full max-w-[500px] h-[180px] sm:h-auto object-cover select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rule Sheet */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="bg-[#191919] border border-white/10 p-8 md:p-6 rounded-3xl shadow-xl flex flex-col gap-6 text-left">
            <h2 className="text-[#ffcc00] font-poppins font-black text-[24px] uppercase tracking-[0.5px]">
              {currentGame.rulesTitle}
            </h2>
            <ol className="list-decimal pl-5 flex flex-col gap-3 text-gray-300 text-[14.5px] leading-relaxed font-semibold">
              {currentGame.rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ol>
            <p className="text-gray-500 text-[13px] border-t border-white/5 pt-4 mt-2">
              ♣️ <b>VIP Lounge Limits:</b> Table limits start at ₹100 minimum and ₹1,00,000 maximum per hand. Speak with your personal manager to set custom account limits.
            </p>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
