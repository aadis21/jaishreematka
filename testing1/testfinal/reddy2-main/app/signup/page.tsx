"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referral, setReferral] = useState("");
  const [agree, setAgree] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!name || name.trim() === "") {
      setError("Please enter your Full Name.");
      return;
    }

    if (!phone || phone.trim() === "") {
      setError("Please enter your Phone Number.");
      return;
    }

    if (phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid 10-digit Phone Number.");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agree) {
      setError("You must agree to the Terms & Conditions and represent that you are 18+ years of age.");
      return;
    }

    // Success action
    setSuccess(true);

    // Redirect to WhatsApp with prefilled message
    setTimeout(() => {
      const message = encodeURIComponent(
        `Hello Reddy Anna Book, I want to register a new Online Betting ID.\nName: ${name}\nPhone: ${phone}\nPassword: ${password}\nReferral Code: ${referral || "None"}`
      );
      window.open(`https://wa.me/916026703858?text=${message}`, "_blank");
      setSuccess(false);
    }, 1200);
  };

  return (
    <>
      <Header />

      <main className="flex-grow bg-[#0f0f10] min-h-[calc(100vh-75px-360px)] py-12 px-4 flex items-center justify-center relative overflow-hidden font-sans">
        {/* Abstract background highlights */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-ra-crimson/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-ra-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-[450px] bg-[#191919] border border-white/10 rounded-2xl shadow-2xl p-8 relative z-10 flex flex-col gap-5">
          
          {/* Logo & Header */}
          <div className="flex flex-col items-center text-center gap-2">
            <Link href="/" className="mb-1">
              <img
                src="https://reddysports.co/wp-content/uploads/2025/11/reddybook-logo.webp"
                alt="Reddybook Logo"
                className="h-[42px] w-auto"
              />
            </Link>
            <h1 className="text-white font-rajdhani font-bold text-[24px] tracking-wider uppercase">
              Get Online Betting ID
            </h1>
            <p className="text-gray-400 text-[13.5px]">
              Fill the form below to register and obtain your verified Reddy Anna ID.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            
            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-gray-300 text-[12.5px] font-bold uppercase tracking-wider">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-[14px]">👤</span>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 focus:border-ra-gold rounded-lg py-2.5 pl-11 pr-4 text-white text-[13.5px] placeholder-gray-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-gray-300 text-[12.5px] font-bold uppercase tracking-wider">
                WhatsApp Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-[13px] font-bold">+91</span>
                <input
                  id="phone"
                  type="tel"
                  placeholder="10-Digit Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="w-full bg-black/40 border border-white/10 focus:border-ra-gold rounded-lg py-2.5 pl-13 pr-4 text-white text-[13.5px] placeholder-gray-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-gray-300 text-[12.5px] font-bold uppercase tracking-wider">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="At least 6 chars"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 focus:border-ra-gold rounded-lg py-2.5 px-4 text-white text-[13.5px] placeholder-gray-500 outline-none transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="confirmPassword" className="text-gray-300 text-[12.5px] font-bold uppercase tracking-wider">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 focus:border-ra-gold rounded-lg py-2.5 px-4 text-white text-[13.5px] placeholder-gray-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Referral Code */}
            <div className="flex flex-col gap-1">
              <label htmlFor="referral" className="text-gray-300 text-[12.5px] font-bold uppercase tracking-wider">
                Referral Code (Optional)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-[14px]">🎁</span>
                <input
                  id="referral"
                  type="text"
                  placeholder="Enter Referral Code if any"
                  value={referral}
                  onChange={(e) => setReferral(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 focus:border-ra-gold rounded-lg py-2.5 pl-11 pr-4 text-white text-[13.5px] placeholder-gray-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Agree checkbox */}
            <div className="flex items-start gap-2.5 my-1">
              <input
                id="agree"
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-1 accent-ra-gold cursor-pointer"
              />
              <label htmlFor="agree" className="text-gray-400 text-[12px] leading-tight select-none cursor-pointer">
                I represent that I am <b>18+ years of age</b>, and I agree to the{" "}
                <Link href="/terms-and-conditions" className="text-ra-gold hover:underline font-bold">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-ra-gold hover:underline font-bold">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg p-2.5 text-[12.5px] font-semibold flex items-center gap-2">
                <span>⚠️</span> {error}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] rounded-lg p-3 text-[12.5px] font-semibold flex flex-col gap-1 items-center justify-center text-center">
                <span className="text-[16px]">✅ Generating Your Book ID!</span>
                <span className="text-[11px] opacity-80">Connecting to WhatsApp Support to complete OTP verification...</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mt-1">
              <button
                type="submit"
                disabled={success}
                className="w-full py-3.5 bg-gradient-to-r from-ra-gold to-ra-gold-dark hover:from-white hover:to-white hover:text-ra-crimson text-black font-extrabold rounded-lg shadow-[0_4px_15px_rgba(255,204,0,0.15)] hover:shadow-none transition-all duration-300 uppercase tracking-widest text-[13.5px] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>🚀</span> Get OTP on WhatsApp
              </button>

              <div className="flex items-center my-0.5 text-gray-500 text-[11px] uppercase font-bold text-center justify-center before:content-[''] before:flex-grow before:border-b before:border-white/5 before:mr-3 after:content-[''] after:flex-grow after:border-b after:border-white/5 after:ml-3">
                Or signup instantly
              </div>

              <a
                href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna%20Book,%20I%20want%20to%20register%20a%20new%20betting%20ID%20instantly."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold rounded-lg shadow-md transition-all uppercase tracking-widest text-[12.5px] flex items-center justify-center gap-2"
              >
                <span>💬</span> WhatsApp Direct Registration
              </a>
            </div>

          </form>

          {/* Footer Navigation */}
          <div className="border-t border-white/5 pt-4 text-center">
            <p className="text-gray-400 text-[13.5px]">
              Already have a Reddy Anna ID?{" "}
              <Link href="/login" className="text-ra-gold hover:underline font-bold">
                Log In
              </Link>
            </p>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
