"use client";
import React from "react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./InfoSection.module.css";

export default function InfoSection() {
  return (
    <section className={`section-padding ${styles.infoSection}`} id="about">
      <div className="container">
        
        {/* ==========================================
            PART 1: OFFICIAL REDDY ANNA BOOK ID PROVIDER (Screenshot 3)
            ========================================== */}
        <div className={styles.introBox}>
          <h2 className={styles.introTitle}>
            Official Reddy Anna Book ID Provider Website
          </h2>
          <div className={styles.introTextWrapper}>
            <p className={styles.introParagraph}>
              Reddy Anna Book is one of the most trusted platforms for online betting and gaming in India, offering a smooth and secure experience for users. By getting your ID from an official provider, you ensure fast access, safe transactions, and uninterrupted betting during major events like IPL and international matches.
            </p>
            <p className={styles.introParagraph}>
              The platform provides instant ID creation, easy login, and full support through WhatsApp and dedicated customer service. Whether you want to download the app, get your ID instantly, or connect with support, everything is designed for user convenience with fast withdrawals and real-time betting.
            </p>
          </div>

          {/* Action Buttons Row 1 */}
          <div className={styles.btnRowOne}>
            <WhatsAppButton className="btn-red-action">
              📲 Download Reddy Anna App
            </WhatsAppButton>
            <WhatsAppButton className="btn-green-action">
              💬 Get ID on WhatsApp
            </WhatsAppButton>
            <WhatsAppButton className="btn-gray-action">
              📞 Contact Reddy Anna Support
            </WhatsAppButton>
          </div>

          {/* Action Buttons Row 2 */}
          <div className={styles.btnRowTwo}>
            <WhatsAppButton className={styles.largeChatBtn}>
              💬 Chat Support on WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        {/* ==========================================
            PART 2: WHAT IS REDDY ANNA ID (Screenshot 5)
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.twoColumnGrid}>
            
            {/* Left Column: Image Asset */}
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  src="https://reddysports.co/wp-content/uploads/2026/05/What-Is-Reddy-Anna-ID-1536x896.jpg"
                  alt="What is Reddy Anna ID"
                  width={1536}
                  height={896}
                  className={styles.idImg}
                  priority
                />
              </div>
            </div>

            {/* Right Column: Features Checklist */}
            <div className={styles.textColumn}>
              <div className={styles.headerHighlight}>
                <h3>What Is Reddy Anna ID?</h3>
              </div>
              
              <p className={styles.idLeadText}>
                Your <strong>Reddy Anna ID</strong> is your personal key to access all games and betting markets on our platform.
              </p>
              <p className={styles.idSubLeadText}>
                With one verified ID, you can:
              </p>

              <ul className={styles.checklist}>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span>Bet on <strong>cricket, football, kabaddi, and tennis</strong>.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span>Play <strong>live casino games</strong> like Teen Patti, Poker, and Roulette.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span>Access your <strong>betting dashboard</strong> to manage funds, bonuses, and bet history.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span>Deposit and withdraw money <strong>instantly via UPI or NetBanking</strong>.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span>Receive exclusive <strong>promotions linked to your Reddy Anna account</strong>.</span>
                </li>
              </ul>

              <p className={styles.idFooterText}>
                Every Reddy Anna ID is secured through OTP and KYC, ensuring that your account and funds stay protected at all times.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
