"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";

export default function ResponsibleGamingPage() {
  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#f4f6f9] py-12 px-4 font-sans text-gray-700">
        <article className="max-w-[850px] mx-auto bg-white p-10 md:p-6 rounded-2xl shadow-md border border-gray-150 flex flex-col gap-6">
          
          <div className="flex flex-col gap-3 border-b border-gray-100 pb-5">
            <span className="text-[#c40000] text-[12px] uppercase tracking-[2px] font-extrabold">
              Fair Play
            </span>
            <h1 className="text-gray-900 font-rajdhani font-black text-[38px] md:text-[28px] uppercase tracking-wide">
              Responsible Gaming
            </h1>
            <p className="text-gray-400 text-[13px] font-semibold">
              Last Updated: May 2026
            </p>
          </div>

          <div className="flex flex-col gap-5 text-[14.5px] leading-[1.7] text-gray-600">
            <p>
              At <b>Reddy Anna Book</b>, online betting and live casino gaming are designed to be an exciting form of recreational entertainment. We are committed to fostering a safe, transparent, and highly supportive environment for all our users.
            </p>

            <div className="bg-[#fff5f5] p-5 border-l-4 border-[#c40000] rounded-r-lg text-gray-600 font-semibold text-[13.5px] leading-relaxed">
              ⚠️ <b>Core Principle:</b> Betting should always be treated strictly as a leisure activity, not as a primary source of income or a method to resolve personal financial difficulties. Please stay within your limits and bet responsibly.
            </div>

            {/* Section 1 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[20px] uppercase border-l-4 border-[#c40000] pl-3">
                1. Safe Betting Best Practices
              </h2>
              <p>
                To maintain full control over your wagers and prevent negative habits, we highly recommend following these best practices:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2.5 font-semibold">
                <li><b>Set a Budget Cap:</b> Establish a strict daily, weekly, or monthly deposit budget. Only wager funds you can comfortably afford to lose.</li>
                <li><b>Never Chase Losses:</b> If you encounter a losing streak, accept the result and step away. Chasing losses almost always leads to higher risk wagers.</li>
                <li><b>Track Your Time:</b> Limit the length of your live gaming sessions. Take regular breaks to maintain clear analytical judgment.</li>
                <li><b>Avoid Betting Under Influence:</b> Never place bets or play casino card games under the influence of alcohol, stress, or intense emotional distress.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-900 font-rajdhani font-bold text-[20px] uppercase border-l-4 border-gray-300 pl-3">
                2. Self-Assessment Check
              </h2>
              <p>
                Review these questions honestly to verify if your gaming habits are healthy:
              </p>
              <ul className="list-decimal pl-5 flex flex-col gap-2 text-gray-500 font-semibold">
                <li>Do you skip work, study, or family commitments to follow match odds or play slots?</li>
                <li>Have you ever borrowed money, sold possessions, or skipped bills to finance your deposits?</li>
                <li>Do you bet larger and riskier amounts to recapture lost credits?</li>
                <li>Have friends or family members expressed concerns about your betting activity?</li>
              </ul>
              <p className="text-gray-600 font-semibold">
                👉 If you answered &ldquo;Yes&rdquo; to any of these questions, we highly advise using our Self-Exclusion options immediately.
              </p>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-900 font-rajdhani font-bold text-[20px] uppercase border-l-4 border-gray-300 pl-3">
                3. Self-Exclusion &amp; Account Freezing
              </h2>
              <p>
                We provide our players the power to restrict their account activities anytime:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 font-semibold">
                <li><b>Temporary Freeze:</b> Freeze your verified ID logins for 1 week, 1 month, or 3 months to take a healthy break.</li>
                <li><b>Permanent Self-Exclusion:</b> Request our audits team to permanently delete your gaming ID and remove your details from all exchange catalogs.</li>
              </ul>
              <p>
                To trigger account limits or self-exclusion, simply connect with your relationship manager on WhatsApp support and specify: <i>&ldquo;I want to self-exclude my account.&rdquo;</i>
              </p>
            </div>

            {/* Section 4 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-900 font-rajdhani font-bold text-[20px] uppercase border-l-4 border-gray-300 pl-3">
                4. Youth Protection
              </h2>
              <p>
                We enforce a strict <b>18+ age limit</b>. We carry out regular profile checks and reserve the right to freeze any accounts failing to provide clear proof of majority. We advise parents to use filtering software (like Net Nanny or CyberPatrol) to block youth access to sports betting exchange networks.
              </p>
            </div>

          </div>

        </article>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
