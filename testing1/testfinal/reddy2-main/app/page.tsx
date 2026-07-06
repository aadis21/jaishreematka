"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import BannerCarousel from "../components/BannerCarousel";
import LobbyCarousel from "../components/LobbyCarousel";
import SportsCategories from "../components/SportsCategories";
import QuickWhatsAppGrid from "../components/QuickWhatsAppGrid";
import CricketOdds from "../components/CricketOdds";
import FootballOdds from "../components/FootballOdds";
import AccordionItem from "../components/Accordion";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="w-full flex-grow bg-[#f4f6f9] py-6 flex flex-col gap-8 font-sans">
        
        {/* Banner Carousels */}
        <section className="px-4">
          <BannerCarousel />
        </section>

        {/* Lobby Carousels */}
        <section className="px-4">
          <LobbyCarousel />
        </section>

        {/* Sports Categories Carousels */}
        <section className="px-4">
          <SportsCategories />
        </section>

        {/* Quick WhatsApp Grid */}
        <section className="px-4">
          <QuickWhatsAppGrid />
        </section>

        {/* Cricket Live Odds widget */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <CricketOdds />
        </section>

        {/* Football Live Odds widget */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <FootballOdds />
        </section>

        {/* Official Provider section */}
        <section className="px-4 py-16 bg-white border-y border-gray-200">
          <div className="max-w-[1100px] mx-auto text-center flex flex-col gap-6">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[28px] tracking-[1.5px] uppercase">
              Official Reddy Anna Book ID Provider Website
            </h2>
            <p className="text-gray-600 text-[16px] leading-[1.8] max-w-[850px] mx-auto font-sans">
              Reddy Anna Book is one of the most trusted platforms for online betting and gaming in India, offering a smooth and secure experience for users. By getting your ID from an official provider, you ensure fast access, safe transactions, and uninterrupted betting during major events like IPL and international matches.
            </p>
            <p className="text-gray-600 text-[16px] leading-[1.8] max-w-[850px] mx-auto font-sans">
              The platform provides instant ID creation, easy login, and full support through WhatsApp and dedicated customer service. Whether you want to download the app, get your ID instantly, or connect with support, everything is designed for user convenience with fast withdrawals and real-time betting.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-[14px] font-bold">
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c40000] text-white hover:bg-black px-6 py-3.5 rounded-md shadow-md transition-all duration-200 uppercase tracking-wide"
              >
                Download Reddy Anna App
              </a>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white hover:bg-black px-6 py-3.5 rounded-md shadow-md transition-all duration-200 uppercase tracking-wide"
              >
                Get ID on WhatsApp
              </a>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333] text-white hover:bg-[#c40000] px-6 py-3.5 rounded-md shadow-md transition-all duration-200 uppercase tracking-wide"
              >
                Contact Reddy Anna Support
              </a>
            </div>

            <div className="mt-4">
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-[#c40000] text-white px-8 py-4 text-[18px] font-bold rounded-md shadow-[0_0_15px_rgba(255,0,0,0.4)] hover:brightness-110 active:scale-98 transition-all uppercase tracking-wide"
              >
                💬 Chat Support on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Core Trusted Banner card */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://reddysports.co/wp-content/uploads/2026/05/Reddy-Anna-Book-–-Indias-Most-Trusted-Online-Betting-Platform-1024x597.jpg"
                alt="Reddy Anna Book – India's Most Trusted Online Betting Platform"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-5 items-start">
              <h1 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] leading-[1.3] uppercase">
                Reddy Anna Book – India’s Most Trusted Online Betting Platform
              </h1>
              <h3 className="text-gray-800 font-rajdhani font-bold text-[20px] md:text-[18px] tracking-[1.5px] uppercase">
                Create Your Reddy Anna ID & Start Betting Instantly
              </h3>
              <p className="text-gray-600 text-[15px] leading-[1.8] font-sans">
                Welcome to <b>Reddy Anna Book</b>, India’s most reliable destination for <b>sports betting, live casino gaming, and cricket entertainment</b>. With Reddy Book over a decade of trust, Reddy Anna has redefined online betting for Indian players — offering <b>instant ID creation</b>, <b>fast UPI withdrawals</b>, and <b>24/7 customer support</b>.
              </p>
              <p className="text-gray-600 text-[15px] leading-[1.8] font-sans">
                Whether you’re here for <b>cricket, football, Teen Patti, or roulette</b>, Reddy Anna gives you the safest, fastest, and most rewarding experience in online betting.
              </p>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all mt-2"
              >
                Get Your Reddy Anna ID Today
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Reddy Anna Book */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] tracking-[1.5px] uppercase">
              Why Choose Reddy Anna Book?
            </h2>
            <p className="text-gray-600 text-[16px] max-w-[700px] mx-auto leading-relaxed">
              When it comes to online betting in India, <b>Reddy Anna</b> stands out for its legacy, security, and seamless experience. Here’s why thousands of players trust us daily:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
              {[
                { title: "Established Reputation", desc: "Backed by over 10 years of excellence in the betting industry." },
                { title: "Instant Reddy Anna ID", desc: "Register and start betting in under 2 minutes." },
                { title: "Fast Withdrawals", desc: "Same-day UPI and wallet transfers with no hidden fees." },
                { title: "Wide Betting Coverage", desc: "Cricket, football, kabaddi, tennis, esports, and live casinos." },
                { title: "100% Secure Platform", desc: "SSL encryption, OTP verification, and full KYC compliance." },
                { title: "Mobile-Friendly Access", desc: "Play on the go with the Reddy Anna App." },
                { title: "Exciting Bonuses", desc: "Welcome offers, cashback rewards, and festival promotions." },
                { title: "24/7 Support", desc: "Reach us anytime via WhatsApp, Telegram, or live chat." },
                { title: "Responsible Gaming", desc: "Tools for setting limits, self-exclusion, and safe betting practices." }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-100 hover:border-ra-gold shadow-md hover:scale-[1.02] transition-all text-left flex flex-col gap-2 relative before:content-['✅'] before:absolute before:right-4 before:top-4 before:text-green-500 before:text-lg"
                >
                  <h3 className="font-rajdhani font-bold text-[18px] text-[#1a1a2e] uppercase tracking-[0.5px]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-gray-800 text-[16px] font-bold mt-6 tracking-wide">
              👉 Join India’s most trusted betting community today — where every bet is backed by trust and transparency.
            </p>
          </div>
        </section>

        {/* What Is Reddy Anna ID */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col gap-5 items-start order-2 lg:order-1">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] leading-[1.3] uppercase">
                What Is Reddy Anna ID?
              </h2>
              <p className="text-gray-600 text-[15px] leading-[1.8] font-sans">
                Your <b>Reddy Anna ID</b> is your personal key to access all games and betting markets on our platform. With one verified ID, you can:
              </p>
              <ul className="flex flex-col gap-2.5 text-gray-600 text-[15px] font-semibold">
                <li className="flex items-center gap-2">
                  <span className="text-[#c40000] text-[18px]">🏏</span> Bet on cricket, football, kabaddi, and tennis.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c40000] text-[18px]">🎰</span> Play live casino games like Teen Patti, Poker, and Roulette.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c40000] text-[18px]">📈</span> Access your betting dashboard to manage funds, bonuses, and bet history.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c40000] text-[18px]">💸</span> Deposit and withdraw money instantly via UPI or NetBanking.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c40000] text-[18px]">🎁</span> Receive exclusive promotions linked to your Reddy Anna account.
                </li>
              </ul>
              <p className="text-gray-600 text-[15px] leading-[1.8] font-sans">
                Every Reddy Anna ID is secured through OTP and KYC, ensuring that your account and funds stay protected at all times.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md order-1 lg:order-2">
              <img
                src="https://reddysports.co/wp-content/uploads/2026/05/What-Is-Reddy-Anna-ID-1024x597.jpg"
                alt="What Is Reddy Anna ID"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* How to Verify Reddy Anna ID */}
        <section className="px-4 max-w-[1100px] w-full mx-auto py-8">
          <div className="bg-white p-8 md:p-6 rounded-2xl shadow-xl border border-gray-150 flex flex-col gap-6">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] text-center uppercase tracking-[1px]">
              How to Verify Reddy Anna ID for Secure Betting Access
            </h2>
            
            <div className="bg-[#fff5f5] p-6 border-l-4 border-[#c40000] rounded-r-lg flex flex-col gap-3">
              <p className="text-gray-600 text-[15.5px] leading-relaxed">
                Verifying your Reddy Anna ID is an important step to ensure safe and uninterrupted access to your betting account. A verified ID helps protect your funds, allows smooth deposits and withdrawals, and gives full access to all features including sports betting, live casino, and promotional offers.
              </p>
              <p className="text-gray-600 text-[15.5px] leading-relaxed">
                Without proper verification, users may face restrictions on withdrawals or limited account functionality. That’s why completing the verification process early is highly recommended for all Reddy Anna users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col gap-3">
                <h3 className="font-rajdhani font-bold text-[18px] text-[#c40000] uppercase tracking-[0.5px]">
                  Step-by-Step Process to Verify
                </h3>
                <ol className="list-decimal pl-5 flex flex-col gap-2.5 text-gray-600 text-[14.5px] leading-relaxed font-semibold">
                  <li>Login to your account using your Reddy Anna ID and password.</li>
                  <li>Go to the account or profile section from the dashboard.</li>
                  <li>Provide basic details such as name and contact information if required.</li>
                  <li>Submit verification details through the official support or WhatsApp.</li>
                  <li>Wait for confirmation from the support team once verification is complete.</li>
                </ol>
              </div>

              <div className="bg-[#fff5f5] p-6 border-l-4 border-[#c40000] rounded-r-lg flex flex-col gap-3">
                <h3 className="font-rajdhani font-bold text-[18px] text-[#c40000] uppercase tracking-[0.5px]">
                  Benefits of Verifying
                </h3>
                <ul className="list-disc pl-5 flex flex-col gap-2.5 text-gray-600 text-[14.5px] leading-relaxed font-semibold">
                  <li>Secure account access and protection from unauthorized use.</li>
                  <li>Faster withdrawals and smooth transactions.</li>
                  <li>Full access to betting markets and casino games.</li>
                  <li>Eligibility for bonuses and promotional offers.</li>
                  <li>Better support assistance for account-related issues.</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-2 flex flex-col gap-2">
              <h3 className="font-rajdhani font-bold text-[18px] text-[#c40000] uppercase tracking-[0.5px]">
                Important Tips for Safe Verification
              </h3>
              <p className="text-gray-600 text-[14.5px] leading-relaxed">
                Always verify your Reddy Anna ID through official channels only. Avoid sharing your login details with unknown sources. Make sure you are communicating with verified support to prevent any security risks. Keeping your account verified and secure ensures a smooth betting experience without interruptions.
              </p>
            </div>

            <div className="text-center mt-4">
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[15px] tracking-wider transition-all inline-flex items-center gap-2"
              >
                Verify Reddy Anna ID on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Get Cricket ID now with image */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col gap-5 items-start">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] leading-[1.3] uppercase">
                Get Your Official Reddy Anna Book Cricket ID Now
              </h2>
              <p className="text-gray-600 text-[15.5px] leading-[1.8] font-sans">
                Ready to experience seamless access to live cricket action? The <b>Official Reddy Anna Book Cricket ID Provider</b> gives you a fast, secure, and hassle-free way to get started instantly.
              </p>
              <p className="text-gray-600 text-[15.5px] leading-[1.8] font-sans">
                With a trusted ID, you unlock a smooth platform experience where everything is optimized for speed, performance, and real-time updates—especially during high-demand events like IPL 2026.
              </p>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#ffcc00] hover:bg-black text-black hover:text-white font-bold uppercase rounded-full shadow-md text-[14px] tracking-wide transition-all mt-2"
              >
                Get Online Cricket ID
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://reddysports.co/wp-content/uploads/2026/03/Get-Your-Official-Reddy-Anna-Book-IPL-2026-Now-1024x683.jpg"
                alt="Get Your Official Reddy Anna Book Cricket ID Now"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Top Platforms Grid */}
        <section className="px-4 py-16 bg-[#050505] border-t border-[#ffcc00]/25 rounded-2xl max-w-[1240px] w-full mx-auto">
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-[#ffcc00] font-poppins font-black text-[38px] md:text-[28px] uppercase tracking-wide leading-tight">
              Top Platforms for Cricket ID & Betting ID on Reddy Anna Book
            </h2>
            <p className="text-gray-300 text-[16px] max-w-[850px] mx-auto leading-relaxed">
              Get instant access to India’s top platforms using one secure <strong className="text-[#ffcc00]">Online Cricket ID</strong>. Enjoy fast login, smooth performance, and exclusive bonuses across Cricbet99, Gold365, Lotus365, Laser247 and more.
            </p>

            <a
              href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4.5 bg-gradient-to-r from-[#ffcc00] to-[#ffaa00] text-black font-extrabold rounded-full shadow-[0_0_15px_rgba(255,204,0,0.3)] hover:bg-none hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-[15px] mt-2 mb-10"
            >
              GET ONLINE CRICKET ID
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
              {[
                { name: "Cricbet99 ID", bonus: "₹500 - ₹2000", min: "₹100", border: "border-[#ffcc00]", desc: ["Ultra-fast live match updates", "Best for cricket lovers", "Seamless mobile experience"], tagline: "Real-time speed & smooth control" },
                { name: "Gold365 ID", bonus: "₹1000 - ₹3000", min: "₹200", border: "border-[#ffcc00]", desc: ["Premium design interface", "Lightning fast performance", "Multi-sports access"], tagline: "Premium experience with speed" },
                { name: "Lotus365 ID", bonus: "₹800 - ₹2500", min: "₹100", border: "border-[#00cc66]", desc: ["Simple & beginner-friendly", "Stable and secure system", "Easy navigation"], tagline: "Perfect for new users" },
                { name: "Reddybook ID", bonus: "₹500 - ₹1500", min: "₹100", border: "border-[#ffcc00]", desc: ["Trusted platform", "Fast Cricket ID login", "Reliable performance"], tagline: "Trusted by thousands" },
                { name: "Reddy Book Club", bonus: "₹1500 - ₹5000", min: "₹500", border: "border-[#8b0000]", desc: ["VIP level experience", "Advanced features", "Premium performance"], tagline: "Elite gaming experience", vip: true },
                { name: "Laser247 ID", bonus: "₹1000 - ₹4000", min: "₹200", border: "border-[#ff0033]", desc: ["Ultra-fast real-time updates", "No lag performance", "Mobile optimized"], tagline: "Speed gives you advantage" },
                { name: "Betbhai9 ID", bonus: "₹500 - ₹2000", min: "₹100", border: "border-[#ff3333]", desc: ["Simple clean interface", "Quick access", "Beginner friendly"], tagline: "Simple & effective platform" },
                { name: "11xplay ID", bonus: "₹800 - ₹3000", min: "₹200", border: "border-[#0066ff]", desc: ["Wide sports options", "Smooth dashboard", "Stable performance"], tagline: "All-in-one sports platform" }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className={`bg-white p-6 rounded-2xl flex flex-col gap-3 relative transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] border-t-[5px] ${card.border}`}
                >
                  <h3 className="font-rajdhani font-bold text-[20px] text-black tracking-[0.5px]">
                    {card.name}
                  </h3>
                  <div className="flex flex-col gap-0.5 font-bold text-[13px]">
                    <span className="text-[#00aa88]">Bonus {card.bonus}</span>
                    <span className="text-[#ff6600]">Min ID {card.min}</span>
                  </div>
                  
                  <ul className="list-disc pl-5 flex flex-col gap-1.5 text-gray-700 text-[13px] leading-relaxed my-2">
                    {card.desc.map((pt, pIdx) => <li key={pIdx}>{pt}</li>)}
                  </ul>

                  <p className="font-bold text-[13px] text-gray-500 italic mt-auto mb-2 border-t border-gray-100 pt-3">
                    {card.tagline}
                  </p>

                  <a
                    href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 bg-black hover:bg-[#ffcc00] hover:text-black border-2 border-black hover:border-[#ffcc00] text-white font-bold rounded-full text-[13px] uppercase tracking-wide transition-all duration-300 shadow-sm"
                  >
                    {card.vip ? "Get VIP ID" : "Get ID"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Create Your Reddy Anna Account */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col gap-5 items-start">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] leading-[1.3] uppercase">
                How to Create Your Reddy Anna Account
              </h2>
              <p className="text-gray-600 text-[15.5px] leading-relaxed font-sans">
                Getting started with Reddy Anna is quick, easy, and beginner-friendly.
              </p>
              <ol className="list-decimal pl-5 flex flex-col gap-2.5 text-gray-600 text-[14.5px] leading-relaxed font-semibold">
                <li>
                  <b>Visit the Official Website</b> &ndash; Go to the home page or download the app.
                </li>
                <li>
                  <b>Click on &ldquo;Sign Up / Get ID&rdquo;</b> &ndash; You&rsquo;ll find the registration button.
                </li>
                <li>
                  <b>Enter Your Details</b> &ndash; Name, phone number, email, and password.
                </li>
                <li>
                  <b>Verify via OTP</b> &ndash; Confirm details to activate your Reddy Anna ID.
                </li>
                <li>
                  <b>Deposit Funds</b> &ndash; Add money via UPI or NetBanking.
                </li>
                <li>
                  <b>Start Betting!</b> &ndash; Explore sports, live casinos, and exclusive markets instantly.
                </li>
              </ol>
              <p className="text-gray-800 text-[14px] font-bold mt-1">
                🎯 Pro Tip: Always sign up via the official website or app to avoid fake agents.
              </p>
              <a
                href="/signup"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all mt-2"
              >
                Create Your Reddy Anna ID Now
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://reddysports.co/wp-content/uploads/2026/05/How-to-Create-Your-Reddy-Anna-Account-1024x597.jpg"
                alt="How to Create Your Reddy Anna Account"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Reddy Anna Login Quick secure access */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="rounded-xl overflow-hidden shadow-md order-2 lg:order-1">
              <img
                src="https://reddysports.co/wp-content/uploads/2026/05/Reddy-Anna-Login-—-Reddybook-login-securely-1024x597.jpg"
                alt="Reddy Anna Login"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-5 items-start order-1 lg:order-2">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] leading-[1.3] uppercase">
                Reddy Anna Login &mdash; Quick &amp; Secure Access
              </h2>
              <p className="text-gray-600 text-[15.5px] leading-relaxed font-sans">
                Already have your Reddy Anna ID? Log in within seconds and access your betting dashboard instantly.
              </p>
              
              <div className="flex flex-col gap-2 text-gray-700 text-[14.5px] font-semibold leading-relaxed">
                <span className="font-bold text-gray-900">How to Login:</span>
                <span>1️⃣ Visit the Official Reddy Anna Login Page</span>
                <span>2️⃣ Enter your Mobile Number / User ID</span>
                <span>3️⃣ Enter your Password and verify OTP if asked</span>
                <span>4️⃣ Tap Reddy Anna Login and start betting</span>
              </div>

              <a
                href="/login"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all mt-2"
              >
                Reddy Anna Login
              </a>
            </div>
          </div>
        </section>

        {/* Reddy Anna App */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col gap-5 items-start">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] leading-[1.3] uppercase">
                Reddy Anna App &ndash; Betting on the Go
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Experience seamless betting anytime, anywhere with the <b>Reddy Anna App</b> &mdash; available for both Android and iOS.
              </p>
              <div className="flex flex-col gap-2.5 text-gray-600 text-[14.5px] font-semibold">
                <span className="font-bold text-gray-900 uppercase tracking-wide">App Features:</span>
                <li className="list-disc pl-1">One-tap login using your Reddy Anna ID.</li>
                <li className="list-disc pl-1">Live score updates and push notifications.</li>
                <li className="list-disc pl-1">Secure UPI and wallet transactions.</li>
                <li className="list-disc pl-1">Access to all sports &amp; casino games.</li>
                <li className="list-disc pl-1">Easy withdrawals within minutes.</li>
              </div>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all mt-2"
              >
                Download the Reddy Anna App
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md flex justify-center">
              <img
                src="https://reddysports.co/wp-content/uploads/2025/11/Reddy-Anna-App-–-Betting-on-the-Go.webp"
                alt="Reddy Anna App"
                className="w-full max-w-[450px] h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Cricket Betting guide with image */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="rounded-xl overflow-hidden shadow-md flex justify-center order-2 lg:order-1">
              <img
                src="https://reddysports.co/wp-content/uploads/2025/11/Cricket-Betting-with-Reddy-Anna-Book.webp"
                alt="Cricket Betting with Reddy Anna Book"
                className="w-full max-w-[450px] h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-5 items-start order-1 lg:order-2">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] leading-[1.3] uppercase">
                Cricket Betting with Reddy Anna Book
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Cricket is India’s favorite sport &mdash; and at Reddy Anna, it’s the heartbeat of our platform. You can bet on every major tournament, including:
              </p>
              <div className="flex flex-col gap-2.5 text-gray-600 text-[14.5px] font-semibold">
                <li className="list-none flex items-center gap-2">🏆 <b>IPL (Indian Premier League)</b></li>
                <li className="list-none flex items-center gap-2">🌍 <b>ICC T20 &amp; ODI World Cups</b></li>
                <li className="list-none flex items-center gap-2">🏏 <b>BPL, CPL, and The Hundred</b></li>
                <li className="list-none flex items-center gap-2">🏠 <b>Domestic Leagues &amp; Test Matches</b></li>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed mt-2">
                Bet on live matches ball-by-ball, predict runs, wickets, or even the <b>Man of the Match</b> &mdash; all in real time with <b>live odds updates</b>.
              </p>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all mt-2"
              >
                Start Cricket Betting Now
              </a>
            </div>
          </div>
        </section>

        {/* Popular Sports Guides lists */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] tracking-[1.5px] uppercase">
              Popular Sports on Reddy Anna &mdash; Bet on Every Match You Love
            </h2>
            <p className="text-gray-600 text-[15.5px] max-w-[850px] mx-auto leading-relaxed">
              Sports betting on <b>Reddy Anna</b> is designed to give users access to a wide range of tournaments, leagues, and live match markets throughout the year. Whether you follow cricket passionately or enjoy global sports like football, tennis, or esports, the platform focuses on delivering <b>real-time odds updates, quick betting execution, and instant settlement features</b> to keep the experience smooth and exciting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10 text-left">
              {[
                { title: "Cricket Betting", desc: "Cricket remains the most popular betting category on Reddy Anna because of the massive fan base and tournament calendar. Place live bets on IPL, ICC, session runs, and top wicket takers.", img: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-Betting-1024x683.jpg" },
                { title: "Kabaddi Betting", desc: "Kabaddi betting is gaining huge traction due to Pro Kabaddi League. Betting options include match winner, total raid points, and live performance during rapid raids.", img: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-1024x683.jpg" },
                { title: "Football Betting", desc: "Football provides an amazing consistent global calendar. Bet on Premier League, Champions League, goal totals, corners, and penalty shootouts.", img: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Football-Betting-1024x683.jpg" },
                { title: "Tennis Betting", desc: "Tennis matches settle faster than team sports. Bet on Wimbledon, US Open, total games, and live sets drifts with HD streaming.", img: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Tennis-Betting-1024x683.png" },
                { title: "Basketball Betting", desc: "Basketball leagues like the NBA offer point spreads, scoring runs, and high speed table actions.", img: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Basketball-Betting-1024x683.jpg" },
                { title: "Esports Betting", desc: "Esports betting covers major titles like BGMI, CS:GO, Dota 2, and Valorant, giving dynamic new-age digital competitive play.", img: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-book-Esports-Betting-1024x683.jpg" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-150 shadow-md flex flex-col gap-4">
                  <img src={item.img} alt={item.title} className="w-full h-[180px] object-cover select-none" />
                  <div className="px-5 pb-5 flex flex-col gap-2">
                    <h3 className="font-rajdhani font-bold text-[20px] text-[#c40000] uppercase tracking-[0.5px]">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-[13.5px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 border border-gray-100 rounded-xl max-w-[800px] mt-6 flex flex-col gap-2 text-left">
              <h3 className="font-rajdhani font-bold text-[18px] text-[#c40000] uppercase">
                Why Sports Betting on Reddy Anna Feels Different:
              </h3>
              <ul className="list-disc pl-5 text-[14px] text-gray-600 flex flex-col gap-1.5 font-semibold">
                <li>Real-time odds updates during live matches.</li>
                <li>Quick UPI deposits and fast withdrawal processing.</li>
                <li>Multiple sports coverage throughout the year.</li>
                <li>Mobile-friendly betting interface.</li>
                <li>Dedicated support for user queries.</li>
              </ul>
            </div>

            <a
              href="/sports-betting"
              className="px-8 py-3.5 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all mt-4"
            >
              Explore Sports Betting Now
            </a>
          </div>
        </section>

        {/* Casino Games section */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] tracking-[1.5px] uppercase">
              Casino Games on Reddy Anna
            </h2>
            <p className="text-gray-600 text-[15.5px] max-w-[850px] leading-relaxed">
              The casino section on <b>Reddy Anna</b> is designed for users who enjoy skill-based card games, high-speed table action, and slot gameplay. With real dealers, interactive tables, and instant results, the platform aims to recreate the excitement of physical casinos in a digital environment.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 mt-4 max-h-[400px]">
              <img
                src="https://reddysports.co/wp-content/uploads/2026/04/Casino-Games-on-Reddy-Anna.jpg"
                alt="Casino Games on Reddy Anna"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Casino games features grid cards */}
        <section className="px-4 max-w-[1100px] w-full mx-auto py-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] text-center uppercase tracking-[1px]">
              Reddy Anna Live Casino Games &amp; Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-left">
              {[
                { title: "Teen Patti — India’s Favourite", desc: "Teen Patti remains one of the most popular casino games among Indian users. On Reddy Anna, live tables allow players to compete with real opponents and experience authentic gameplay, featuring side bets and higher limits.", bg: "bg-[#fff5f5] border-[#c40000]" },
                { title: "Poker — Strategy & Skill", desc: "Poker tables feature Texas Hold’em and Omaha. Users can join multiplayer tables, participate in VIP tournaments, or practice bluffing skills in lower-stake beginner tables.", bg: "bg-gray-50 border-gray-300" },
                { title: "Roulette — Classic Casino Thrill", desc: "Roulette betting offers red/black, number grids, and combinations. Live dealer HD streaming lets you watch the wheel spin in real-time with instant settlements.", bg: "bg-[#fff5f5] border-[#c40000]" },
                { title: "Blackjack — Fast Smart Play", desc: "Compete against live dealers to reach closest to 21. Smart moves like splitting pairs and doubling down influence real-time payout chances.", bg: "bg-gray-50 border-gray-300" },
                { title: "Slot Games — High Rewards", desc: "Spin slot machines with themes ranging from mythology to adventure, featuring free spins, bonus rounds, and instant jackpots.", bg: "bg-[#fff5f5] border-[#c40000]" },
                { title: "Andar Bahar & Baccarat", desc: "Quick simple table favorites. Predict which side matches the card first in Andar Bahar, or bet on Banker/Player in Baccarat.", bg: "bg-gray-50 border-gray-300" }
              ].map((card, idx) => (
                <div key={idx} className={`p-6 rounded-xl border-l-4 shadow-md flex flex-col gap-2 ${card.bg}`}>
                  <h3 className="font-rajdhani font-bold text-[18px] text-[#c40000] uppercase tracking-[0.5px]">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 border-2 border-[#c40000] rounded-xl flex flex-col gap-3 mt-6">
              <h3 className="font-rajdhani font-bold text-[19px] text-[#c40000] uppercase text-center">
                Key Casino Advantages on Reddy Anna:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-5 text-[14px] text-gray-600 font-semibold mt-2">
                <li>💸 Instant deposits and fast UPI withdrawals</li>
                <li>🎥 Real dealers with HD streaming tables</li>
                <li>🕒 24/7 gaming lobbies available anytime</li>
                <li>🔐 Secure and verified platform environment</li>
                <li>🎁 Exclusive welcome cashback and rewards</li>
              </ul>
            </div>

            <div className="text-center mt-6">
              <a
                href="/casino"
                className="px-8 py-3.5 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all"
              >
                Play Live Casino Now
              </a>
            </div>
          </div>
        </section>

        {/* How Reddy Anna Book Works complete guide */}
        <section className="px-4 max-w-[1100px] w-full mx-auto py-8">
          <div className="bg-white p-8 md:p-6 rounded-2xl shadow-xl border border-gray-150 flex flex-col gap-6">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] text-center uppercase tracking-[1px]">
              How Reddy Anna Book Works &ndash; Complete Platform Guide
            </h2>
            <div className="bg-[#fff5f5] p-6 border-l-4 border-[#c40000] rounded-r-lg">
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Reddy Anna Book is a user-friendly online betting platform that allows users to access sports betting, live casino games, and real-time gaming features from a single account. The platform is designed for smooth navigation, fast transactions, and instant betting access, making it suitable for both beginners and experienced users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
              {[
                { step: "1. Get Reddy Anna ID", desc: "Register and receive your secure credentials from our official provider link." },
                { step: "2. Login to Account", desc: "Access the user dashboard to explore hundreds of daily sports matching arrays." },
                { step: "3. Add Funds Securely", desc: "Deposit instantly via verified UPI wallets and local netbanking channels." },
                { step: "4. Start Betting", desc: "Choose cricket or casino games, click the drift odds and confirm your slip." }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 border-t-4 border-[#c40000] p-5 rounded-lg shadow-sm flex flex-col gap-2 hover:-translate-y-1 transition-all">
                  <h3 className="font-rajdhani font-bold text-[17px] text-[#c40000] uppercase">
                    {item.step}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all"
              >
                Get Reddy Anna ID Now
              </a>
            </div>
          </div>
        </section>

        {/* Reddy Anna Bonuses */}
        <section className="px-4 max-w-[1200px] w-full mx-auto py-8">
          <div className="bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-6 text-center">
            <h2 className="text-[#8b0000] font-rajdhani font-extrabold text-[42px] md:text-[32px] uppercase">
              Reddy Anna Bonuses
            </h2>
            <p className="text-gray-500 max-w-[700px] mx-auto text-[15.5px] leading-relaxed">
              Reward your gameplay with exciting deposits and cashback offers. Unlock up to 100% welcome match bonus on your first ID deposit today!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 font-bold text-[13.5px]">
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white uppercase rounded-md transition-all duration-200"
              >
                Claim First Deposit Bonus
              </a>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-black text-white uppercase rounded-md transition-all duration-200"
              >
                Claim WhatsApp Bonus Code
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 max-w-[850px] w-full mx-auto py-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] text-center uppercase tracking-[1px]">
              Frequently Asked Questions (FAQ)
            </h2>
            
            <div className="bg-white p-6 md:p-4 rounded-xl shadow-md border border-gray-150 flex flex-col gap-1">
              {[
                { q: "What is Reddy Anna Book?", a: "Reddy Anna Book is India’s trusted online sports betting and live casino platform where players can bet on cricket, football, kabaddi, casino games and much more with fast UPI withdrawals and 24/7 support." },
                { q: "How do I create my Reddy Anna ID?", a: "Click Sign Up / Get ID, enter your details, verify via OTP and deposit funds. Your account gets activated instantly and you can start betting within minutes." },
                { q: "Is Reddy Anna legal and safe?", a: "Yes. Reddy Anna operates responsibly under international gaming standards and follows SSL security, OTP verification and full KYC compliance to protect users and ensure safe gaming." },
                { q: "Can I bet on IPL and cricket matches?", a: "Absolutely. Reddy Anna provides live cricket odds for IPL, T20 World Cup, ODI World Cup and all major cricket leagues and tournaments." },
                { q: "How do I deposit and withdraw money?", a: "You can deposit and withdraw through UPI, NetBanking, IMPS, e-wallets and debit/credit cards. Verified users enjoy same-day UPI withdrawals with no hidden fees." },
                { q: "Is there a Reddy Anna mobile app?", a: "Yes. The Reddy Anna App for Android and iOS allows live betting, casino games, instant transactions and push notification updates." },
                { q: "What should I do if I face login or payment issues?", a: "You can contact WhatsApp support, live chat or email Support@reddysports.co for immediate help — assistance is available 24/7." },
                { q: "What is the minimum age to use Reddy Anna?", a: "You must be 18 years or older to register, deposit or bet on the Reddy Anna platform." }
              ].map((faq, idx) => (
                <AccordionItem key={idx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* Ready to start Journey call-out */}
        <section className="px-4 py-16 bg-white border-t border-gray-200">
          <div className="max-w-[850px] mx-auto text-center flex flex-col gap-6">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] tracking-[1px] uppercase">
              Ready to Start Your Betting Journey with Reddy Anna Today
            </h2>
            <p className="text-gray-600 text-[15.5px] leading-relaxed font-sans">
              Join thousands of players across India who trust <b>Reddy Anna Book</b> for fast withdrawals, secure betting and 24/7 support. Whether you want to bet on cricket, explore live casino tables or enjoy sports action from around the world, the excitement begins with a single step &mdash; your Reddy Anna ID.
            </p>
            <p className="text-gray-600 text-[15.5px] leading-relaxed font-sans">
              With <b>instant account activation, safe UPI payments, live odds and a smooth app experience</b>, Reddy Anna is built to give you the safest and most rewarding online betting journey.
            </p>
            
            <div className="bg-gray-50 border border-gray-100 p-6 rounded-lg text-left max-w-[600px] mx-auto flex flex-col gap-2 text-[14.5px] font-semibold text-gray-700 mt-2">
              <h3 className="font-rajdhani font-bold text-[#c40000] text-[18px] uppercase">Your Winning Moment Starts Now</h3>
              <span>✔ Create your Reddy Anna ID</span>
              <span>✔ Login anytime from mobile or desktop</span>
              <span>✔ Bet live on cricket, football, kabaddi, casino games &amp; more</span>
              <span>✔ Withdraw your winnings instantly through UPI</span>
            </div>

            <p className="text-gray-800 font-bold text-[16px] italic mt-4">
              Don&rsquo;t wait &mdash; the next big match and the next big win are already live.
            </p>

            <div className="mt-4">
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4.5 bg-[#c40000] hover:bg-black text-white font-extrabold uppercase rounded-md shadow-lg text-[15px] tracking-wider transition-all"
              >
                Get Reddy Anna ID Now
              </a>
            </div>

            <p className="text-gray-400 text-[13px] italic mt-4">
              Bet smart. Bet responsibly. Ready Bet with India&rsquo;s most trusted Book platform &mdash; Reddy Anna.
            </p>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
