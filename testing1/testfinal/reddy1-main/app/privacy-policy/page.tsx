import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Privacy Policy | Reddy Anna Book",
  description: "Read the Reddy Anna Book privacy policy. Understand how we collect, store and protect your personal information on our official betting platform.",
  alternates: { canonical: "https://reddynow.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy — Reddy Anna Book
            </h1>
            <p className="text-gray-400 text-xs md:text-sm font-bold bg-[#05080f] px-3 py-1.5 rounded-lg border border-[#F0901A]/5 self-start">
              Last Updated: May 14, 2026
            </p>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed flex flex-col gap-4">
              <p>
                At Reddy Anna Book, accessible from reddybookwinin.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Reddy Anna Book and how we use it.
              </p>
              <h3 className="text-white font-extrabold text-base md:text-lg mt-2">1. Log Files</h3>
              <p>
                Reddy Anna Book follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the info is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic info.
              </p>
              <h3 className="text-white font-extrabold text-base md:text-lg mt-2">2. Privacy Policies</h3>
              <p>
                You may consult this list to find the Privacy Policy for each of the advertising partners of Reddy Anna Book.
              </p>
              <p>
                Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Reddy Anna Book, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
              </p>
              <p>
                Note that Reddy Anna Book has no access to or control over these cookies that are used by third-party advertisers.
              </p>
              <h3 className="text-white font-extrabold text-base md:text-lg mt-2">3. Third Party Privacy Policies</h3>
              <p>
                Reddy Anna Book's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
              </p>
              <p>
                You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
