import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";

export const metadata: Metadata = {
  title: "Login | Reddy Anna Book",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
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
          <section className="w-full bg-[#0c1322] border border-[#F0901A]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-black items-center text-center max-w-md mx-auto">
            <h1 className="text-[#FFD13F] font-black text-2xl tracking-wide">
              Reddy Anna Book Login
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              To guarantee maximum account security, all logins, password resets, and wallet payouts are managed directly and securely through our verified WhatsApp support agents.
            </p>
            <div className="bg-[#05080f] p-4 rounded-xl border border-[#F0901A]/5 text-xs text-gray-400 font-semibold leading-relaxed w-full">
              Simply send a message saying <strong>'Login to my account'</strong> to receive your authorized access link or credential changes instantly. No risk of database leaks.
            </div>
            <div className="pt-2 w-full">
              <ConicButton text="Login via WhatsApp Agent" />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
