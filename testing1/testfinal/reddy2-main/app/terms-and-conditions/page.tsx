"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#f4f6f9] py-12 px-4 font-sans text-gray-700">
        <article className="max-w-[850px] mx-auto bg-white p-10 md:p-6 rounded-2xl shadow-md border border-gray-150 flex flex-col gap-6">
          
          <div className="flex flex-col gap-3 border-b border-gray-100 pb-5">
            <span className="text-[#c40000] text-[12px] uppercase tracking-[2px] font-extrabold">
              Legal Guidelines
            </span>
            <h1 className="text-gray-900 font-rajdhani font-black text-[38px] md:text-[28px] uppercase tracking-wide">
              Terms &amp; Conditions
            </h1>
            <p className="text-gray-400 text-[13px] font-semibold">
              Last Updated: May 2026
            </p>
          </div>

          <div className="flex flex-col gap-5 text-[14.5px] leading-[1.7] text-gray-600">
            <p>
              Welcome to the official <b>Reddy Anna Book</b> website (https://reddysports.co). By creating a gaming ID, signing up, logging in, or placing bets on any sports exchange and dealer table partner utilizing our credentials, you agree to be legally bound by these Terms &amp; Conditions.
            </p>

            {/* Section 1 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[20px] uppercase border-l-4 border-[#c40000] pl-3">
                1. Eligibility &amp; Representation
              </h2>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 font-semibold">
                <li>You must be at least <b>18 years of age</b> or the legal age of majority in your jurisdiction to register a gaming ID. We operate a zero-tolerance underage policy.</li>
                <li>You represent that all information provided during registration (Name, Phone Number, Email) is fully accurate and belongs to you.</li>
                <li>Accounts registered with dummy phone numbers, spoofed credentials, or third-party identities are subject to immediate suspension and ledger freezing.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-900 font-rajdhani font-bold text-[20px] uppercase border-l-4 border-gray-300 pl-3">
                2. Gaming ID Security
              </h2>
              <p>
                Your gaming ID username, session cookies, and login passwords are for your personal, non-commercial use only. You are solely responsible for all bets, deposits, and withdrawal requests initiated using your account credentials.
              </p>
              <p>
                If you suspect that your profile has been compromised, please connect with our WhatsApp support manager immediately to lock your credentials and protect your credit balance.
              </p>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-900 font-rajdhani font-bold text-[20px] uppercase border-l-4 border-gray-300 pl-3">
                3. Financial Transactions &amp; Payouts
              </h2>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 font-semibold">
                <li>Deposits must originate from accounts or UPI wallets directly registered under your verified name. Third-party deposits are rejected.</li>
                <li>Withdrawal requests are processed dynamically within 30 minutes, subject to final match odds confirmation and settlement audits.</li>
                <li>We reserves the right to request KYC verification (e.g. Identity slip, Bank details check) to comply with Indian anti-money laundering policies.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-900 font-rajdhani font-bold text-[20px] uppercase border-l-4 border-gray-300 pl-3">
                4. Prohibited Behaviors &amp; Fair Play
              </h2>
              <p>
                We maintain an absolute fair-play ledger. The following actions are strictly prohibited and result in immediate account deletion without payout:
              </p>
              <ul className="list-decimal pl-5 flex flex-col gap-1.5 font-semibold">
                <li>Using virtual software bots, automated clickers, scrapers, or exploits on our odds boards.</li>
                <li>Colluding with other players or creating multi-account syndicates to hedge risks artificially.</li>
                <li>Exploiting odds feed lag or errors. In case of clear clerical mistakes or odds feed bugs, the affected wagers will be declared null and void.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[20px] uppercase border-l-4 border-[#c40000] pl-3">
                5. Limitation of Liability &amp; Risk Acknowledgement
              </h2>
              <div className="bg-[#fff5f5] p-5 border-l-4 border-[#c40000] rounded-r-lg text-gray-600 font-semibold text-[13.5px]">
                ⚠️ <b>Warning:</b> Sports betting and live casino card games involve significant financial risks and the potential for losing your wagers. All bets placed on our platform are at your sole discretion and risk. Reddy Anna Book shall not be held liable for any financial losses or damages incurred.
              </div>
            </div>

          </div>

        </article>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
