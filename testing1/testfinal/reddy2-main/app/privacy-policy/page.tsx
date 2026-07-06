"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#f4f6f9] py-12 px-4 font-sans text-gray-700">
        <article className="max-w-[850px] mx-auto bg-white p-10 md:p-6 rounded-2xl shadow-md border border-gray-150 flex flex-col gap-6">
          
          <div className="flex flex-col gap-3 border-b border-gray-100 pb-5">
            <span className="text-[#c40000] text-[12px] uppercase tracking-[2px] font-extrabold">
              Data Security
            </span>
            <h1 className="text-gray-900 font-rajdhani font-black text-[38px] md:text-[28px] uppercase tracking-wide">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-[13px] font-semibold">
              Last Updated: May 2026
            </p>
          </div>

          <div className="flex flex-col gap-5 text-[14.5px] leading-[1.7] text-gray-600">
            <p>
              At <b>Reddy Anna Book</b>, we are deeply committed to protecting the privacy, confidentiality, and security of our users&apos; personal data. This Privacy Policy details how we collect, process, utilize, and safeguard your details when you browse our site, register an ID, or communicate with our customer service team.
            </p>

            {/* Section 1 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[20px] uppercase border-l-4 border-[#c40000] pl-3">
                1. Information We Collect
              </h2>
              <p>
                To provide you a smooth, secure, and fully customized betting experience, we collect specific categories of details, including:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 font-semibold">
                <li><b>Registration Details:</b> Your Full Name, WhatsApp mobile number, email, and password.</li>
                <li><b>Transaction Logs:</b> Payment transaction references, UPI addresses, and payout bank sheets used to reconcile your deposits/withdrawals.</li>
                <li><b>Technical Data:</b> IP address, device model, browser configuration, and session cookies used to optimize mobile layouts.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-900 font-rajdhani font-bold text-[20px] uppercase border-l-4 border-gray-300 pl-3">
                2. How We Utilize Your Data
              </h2>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 font-semibold">
                <li>To quickly configure, activate, and manage your verified gaming ID.</li>
                <li>To reconcile, audit, and process instant deposits and same-day withdrawal UPI sheets.</li>
                <li>To resolve account-related inquiries through our dedicated WhatsApp relationship managers.</li>
                <li>To detect, prevent, and block fraudulent multi-account profiles or automated bot usage.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-900 font-rajdhani font-bold text-[20px] uppercase border-l-4 border-gray-300 pl-3">
                3. Data Security &amp; Protection
              </h2>
              <p>
                All personal details collected are stored inside fully encrypted databases protected under multi-layer firewalls. We utilize advanced SSL (Secure Socket Layer) keys to encrypt all network exchanges.
              </p>
              <p>
                We operate a strict internal security protocol: only authorized account auditors are allowed access to payment transaction ledgers to protect your data from leaks.
              </p>
            </div>

            {/* Section 4 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-900 font-rajdhani font-bold text-[20px] uppercase border-l-4 border-gray-300 pl-3">
                4. Third-Party Sharing Rules
              </h2>
              <div className="bg-[#fff5f5] p-5 border-l-4 border-[#c40000] rounded-r-lg text-gray-600 font-semibold text-[13.5px]">
                🔒 <b>Zero Selling Commitment:</b> We NEVER sell, rent, trade, or distribute your personal details or contact information to any third-party marketing companies. Your details are strictly utilized to coordinate your gaming ID balances.
              </div>
            </div>

            {/* Section 5 */}
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-900 font-rajdhani font-bold text-[20px] uppercase border-l-4 border-gray-300 pl-3">
                5. User Rights &amp; Data Erasure
              </h2>
              <p>
                You retain complete control over your details. You may request to check, modify, or completely delete your personal details and close your gaming ID anytime by filing a support ticket with our relationship manager on WhatsApp support.
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
