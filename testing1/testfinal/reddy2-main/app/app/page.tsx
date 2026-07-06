"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";

export default function AppDownloadPage() {
  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#f4f6f9] py-8 flex flex-col gap-10 font-sans">
        
        {/* App Hero Section */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-6 shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="flex flex-col gap-6 items-start">
              <span className="bg-[#c40000]/10 text-[#c40000] text-[11px] uppercase tracking-[2px] font-extrabold px-3.5 py-1.5 rounded-full">
                ⚡ Mobile Gaming Redefined
              </span>
              <h1 className="text-[#c40000] font-rajdhani font-extrabold text-[36px] md:text-[28px] leading-[1.2] uppercase">
                Download Official Reddy Anna App
              </h1>
              <h3 className="text-gray-800 font-rajdhani font-bold text-[20px] md:text-[17px] tracking-[1.5px] uppercase">
                Fast Live Odds, Same-day UPI Withdrawals, Zero Lag
              </h3>
              <p className="text-gray-600 text-[15px] leading-[1.8]">
                Get the ultimate online betting experience directly in the palm of your hand. The official <b>Reddy Anna App</b> is lightweight, fully optimized for low bandwidth, and loaded with advanced security features like biometrics and OTP logins. Bet on live cricket, football leagues, kabaddi, or spin slot games instantly without opening any browser.
              </p>

              <div className="flex flex-wrap gap-4 w-full text-[13.5px] font-bold uppercase tracking-wider mt-2">
                <a
                  href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20download%20the%20Official%20Betting%20App."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#c40000] hover:bg-black text-white rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 flex-grow sm:flex-grow-0"
                >
                  🤖 Download Android APK
                </a>
                <a
                  href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20download%20the%20iOS%20Betting%20App."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-black hover:bg-[#c40000] text-white rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 flex-grow sm:flex-grow-0"
                >
                  🍏 Download iOS Version
                </a>
              </div>
            </div>

            <div className="flex justify-center select-none">
              <img
                src="https://reddysports.co/wp-content/uploads/2025/11/Reddy-Anna-App-–-Betting-on-the-Go.webp"
                alt="Reddy Anna Mobile App Screenshot"
                className="w-full max-w-[380px] h-auto object-cover filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
                loading="lazy"
              />
            </div>

          </div>
        </section>

        {/* Step-by-Step Installation Guide */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="bg-[#0f1923] text-white rounded-3xl p-10 md:p-6 border border-ra-gold/20 shadow-2xl">
            <h2 className="text-ra-gold font-poppins font-black text-[30px] md:text-[24px] uppercase text-center mb-8 tracking-wide">
              How To Install Reddy Anna App on Your Device
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Step 1 */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col gap-4">
                <span className="w-10 h-10 bg-ra-gold text-black rounded-full flex items-center justify-center font-black text-[18px]">
                  1
                </span>
                <h3 className="font-rajdhani font-bold text-[19px] uppercase text-white">
                  Download File
                </h3>
                <p className="text-gray-400 text-[13.5px] leading-relaxed">
                  Click the Android or iOS download action. Connect on WhatsApp to get the verified direct download link securely from our customer service thread.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col gap-4">
                <span className="w-10 h-10 bg-ra-gold text-black rounded-full flex items-center justify-center font-black text-[18px]">
                  2
                </span>
                <h3 className="font-rajdhani font-bold text-[19px] uppercase text-white">
                  Allow Unknown Sources
                </h3>
                <p className="text-gray-400 text-[13.5px] leading-relaxed">
                  Go to your mobile device <b>Settings</b> &rarr; <b>Security</b> and check <b>&ldquo;Allow Installation of Apps from Unknown Sources&rdquo;</b> for the APK sheet.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col gap-4">
                <span className="w-10 h-10 bg-ra-gold text-black rounded-full flex items-center justify-center font-black text-[18px]">
                  3
                </span>
                <h3 className="font-rajdhani font-bold text-[19px] uppercase text-white">
                  Install &amp; Log In
                </h3>
                <p className="text-gray-400 text-[13.5px] leading-relaxed">
                  Open the downloaded <b>.apk</b> file, click Install, open the Reddy Anna App launcher, and use your secure Reddy Anna Book Login credentials!
                </p>
              </div>

            </div>

            <div className="text-center mt-10">
              <a
                href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20get%20my%20ID%20and%20App%20now."
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gradient-to-r from-ra-gold to-ra-gold-dark text-black font-extrabold rounded-full text-[14px] uppercase tracking-widest hover:brightness-110 transition-all inline-block"
              >
                📲 Connect with Support on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Exclusive App Features */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] tracking-[1px] uppercase">
              Exclusive In-App Features
            </h2>
            <p className="text-gray-600 text-[15px] max-w-[700px] mx-auto">
              Our mobile platform provides dynamic functionalities that aren&apos;t fully supported on standard browser lobbies:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-6 text-left">
              {[
                { emoji: "🔔", title: "Real-time Alerts", desc: "Get immediate sound flashes on important cricket match odds variations and score changes." },
                { emoji: "⚡", title: "Rapid Slip Placement", desc: "Lock in live match odds instantly without dealing with buffering or loading spinners." },
                { emoji: "💳", title: "1-Click UPI Transactions", desc: "Initiate deposits and request same-day withdrawals directly through secure integrated wallets." },
                { emoji: "💬", title: "24/7 Native Chat support", desc: "Access verified direct WhatsApp customer service threads anytime within the application launcher." }
              ].map((ft, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex flex-col gap-3">
                  <span className="text-[32px]">{ft.emoji}</span>
                  <h3 className="font-rajdhani font-bold text-[18px] text-gray-900 uppercase">
                    {ft.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    {ft.desc}
                  </p>
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
