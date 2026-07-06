import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Terms and Conditions | Reddy Anna Book",
  description: "Read the Reddy Anna Book terms and conditions governing use of our official cricket betting platform.",
  alternates: { canonical: "https://reddynow.com/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
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
              Terms & Conditions — Reddy Anna Book
            </h1>
            <p className="text-gray-400 text-xs md:text-sm font-bold bg-[#05080f] px-3 py-1.5 rounded-lg border border-[#F0901A]/5 self-start">
              Last Updated: May 14, 2026
            </p>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed flex flex-col gap-4">
              <p>
                Welcome to Reddy Anna Book!
              </p>
              <p>
                These terms and conditions outline the rules and regulations for the use of Reddy Anna Book's Website, located at reddybookwinin.in.
              </p>
              <p>
                By accessing this website we assume you accept these terms and conditions. Do not continue to use Reddy Anna Book if you do not agree to take all of the terms and conditions stated on this page.
              </p>
              <h3 className="text-white font-extrabold text-base md:text-lg mt-2">1. License</h3>
              <p>
                Unless otherwise stated, Reddy Anna Book and/or its licensors own the intellectual property rights for all material on Reddy Anna Book. All intellectual property rights are reserved. You may access this from Reddy Anna Book for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
              <p>You must not:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>Republish material from Reddy Anna Book</li>
                <li>Sell, rent or sub-license material from Reddy Anna Book</li>
                <li>Reproduce, duplicate or copy material from Reddy Anna Book</li>
                <li>Redistribute content from Reddy Anna Book</li>
              </ul>
              <h3 className="text-white font-extrabold text-base md:text-lg mt-2">2. Hyperlinking to our Content</h3>
              <p>
                The following organizations may link to our Website without prior written approval: government agencies, search engines, news organizations, online directory distributors, and system-wide accredited businesses.
              </p>
              <p>
                No use of Reddy Anna Book's logo or other artwork will be allowed for linking absent a trademark license agreement.
              </p>
              <h3 className="text-white font-extrabold text-base md:text-lg mt-2">3. Disclaimer</h3>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>limit or exclude our or your liability for death or personal injury;</li>
                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
              </ul>
              <p>
                The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
              </p>
              <p>
                As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
