"use client";
import React, { useState } from "react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./GameLobbies.module.css";

const CASINO_LOBBIES = [
  { name: "SLOT GAMES", label: "Slots Lobby", gradient: "linear-gradient(135deg, #7c162e 0%, #ca4529 100%)", icon: "🎰" },
  { name: "ROYAL GAMING", label: "Royal Table", gradient: "linear-gradient(135deg, #4d1059 0%, #7e1e9a 100%)", icon: "🃏" },
  { name: "LOBBY WINFINITY", label: "Winfinity", gradient: "linear-gradient(135deg, #112a3a 0%, #1e4f6d 100%)", icon: "🎡" },
  { name: "LOBBY VIVO", label: "Vivo Live", gradient: "linear-gradient(135deg, #09477d 0%, #1775c7 100%)", icon: "👸" },
  { name: "FISHING GAMES", label: "Fish Hunter", gradient: "linear-gradient(135deg, #028fc7 0%, #1ad2ff 100%)", icon: "🦈" },
  { name: "KINGMIDAS LOBBY", label: "King Midas", gradient: "linear-gradient(135deg, #224375 0%, #3d79ce 100%)", icon: "🏰" },
  { name: "LOBBY ASIA GAMES", label: "Asia Games", gradient: "linear-gradient(135deg, #4e2920 0%, #7e4638 100%)", icon: "👘" },
  { name: "LOBBY AURA", label: "Aura Gaming", gradient: "linear-gradient(135deg, #0b593f 0%, #1d9d73 100%)", icon: "💎" },
];

const SPORTS_LOBBIES = [
  { name: "TENNIS", image: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-sports-betting.webp", gradient: "linear-gradient(135deg, #8b2b1a 0%, #d46337 100%)", icon: "🎾" },
  { name: "VOLLEYBALL", image: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-sports-betting.webp", gradient: "linear-gradient(135deg, #59551c 0%, #a49646 100%)", icon: "🏐" },
  { name: "BASKETBALL", image: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-sports-betting.webp", gradient: "linear-gradient(135deg, #6c4e20 0%, #b28a47 100%)", icon: "🏀" },
  { name: "E SPORTS", image: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-sports-betting.webp", gradient: "linear-gradient(135deg, #1f6b3e 0%, #4db579 100%)", icon: "🎮" },
  { name: "WINNER CUP", image: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-sports-betting.webp", gradient: "linear-gradient(135deg, #b58d2a 0%, #ffd46f 100%)", icon: "🏆" },
  { name: "ELECTION", image: "https://reddysports.co/wp-content/uploads/2026/03/west-bengal-assembly-election-2026-reddy-anna-betting.jpg", gradient: "linear-gradient(135deg, #0a848c 0%, #29cfdc 100%)", icon: "🗳️", badge: "Live" },
  { name: "CRICKET", image: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-sports-betting.webp", gradient: "linear-gradient(135deg, #5c2020 0%, #a24c4c 100%)", icon: "🏏" },
  { name: "FOOTBALL", image: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-sports-betting.webp", gradient: "linear-gradient(135deg, #0e5b56 0%, #2ea098 100%)", icon: "⚽" },
];

const FUN_LOBBIES = [
  { name: "MINES", label: "Minesweeper Cash", gradient: "linear-gradient(135deg, #31114d 0%, #6f1f8b 100%)", icon: "💣", sub: "Mines" },
  { name: "COLOR PREDICTION", label: "1 Min Color Forecast", gradient: "linear-gradient(135deg, #0e3d74 0%, #1573c7 100%)", icon: "🎲", sub: "Color Prediction" },
  { name: "AVIATOR", label: "Crash Plane Multiplier", gradient: "linear-gradient(135deg, #590924 0%, #c41c58 100%)", icon: "✈️", sub: "Aviator" },
  { name: "FUN GAMES", label: "Instant Quick Games", gradient: "linear-gradient(135deg, #06193d 0%, #113473 100%)", icon: "🎯", sub: "Fun Games" },
];

export default function GameLobbies() {
  const [showPromo, setShowPromo] = useState<string | null>(null);

  const getWhatsAppLink = (lobbyName: string) => {
    const text = encodeURIComponent(`Hi Reddy Anna, I want to access the ${lobbyName} Lobby! Please set up my official betting ID.`);
    return `${SITE_CONFIG.whatsappLink}?text=${text}`;
  };

  return (
    <section className={`section-padding ${styles.section}`} id="lobbies">
      <div className="container">
        <h2 className="section-title text-center">
          Official <span>Reddy Anna Book</span> Exchange Lobbies
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          Click on any lobby banner below to get instant access and start playing with India's most secure book ID.
        </p>

        {/* 1. Casino Lobbies */}
        <h3 className={styles.categoryTitle}>Slot & Casino Lobbies</h3>
        <div className={styles.casinoGrid}>
          {CASINO_LOBBIES.map((lobby, index) => (
            <a
              key={index}
              href={getWhatsAppLink(lobby.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.casinoCard}
              style={{ background: lobby.gradient }}
            >
              <div className={styles.lobbyContent}>
                <span className={styles.lobbyIcon}>{lobby.icon}</span>
                <span className={styles.lobbyName}>{lobby.name}</span>
              </div>
              <span className={styles.joinBadge}>Join Lobby ➜</span>
            </a>
          ))}
        </div>

        {/* 2. Sports Lobbies */}
        <h3 className={styles.categoryTitle} style={{ marginTop: "4rem" }}>Sports Betting Markets</h3>
        <div className={styles.sportsGrid}>
          {SPORTS_LOBBIES.map((lobby, index) => (
            <div
              key={index}
              className={`${styles.sportsCard} ${lobby.name === "ELECTION" ? styles.electionCard : ""}`}
              style={{ background: lobby.gradient }}
              onClick={() => {
                if (lobby.name === "ELECTION") {
                  setShowPromo(showPromo === "election" ? null : "election");
                } else {
                  window.open(getWhatsAppLink(lobby.name), "_blank");
                }
              }}
            >
              {lobby.badge && <span className={styles.badge}>{lobby.badge}</span>}
              <div className={styles.sportsIcon}>{lobby.icon}</div>
              <h4 className={styles.sportsName}>{lobby.name}</h4>
              <span className={styles.actionText}>
                {lobby.name === "ELECTION" ? "View Promo ➜" : "Place Bets ➜"}
              </span>
            </div>
          ))}
        </div>

        {/* Election Promotional Modal / Banner (Triggered by Election Card) */}
        {showPromo === "election" && (
          <div className={styles.promoBannerBox}>
            <div className={styles.promoHeader}>
              <h4>🗳️ Assembly Election 2026 Betting Live!</h4>
              <button onClick={() => setShowPromo(null)} className={styles.closeBtn}>×</button>
            </div>
            <div className={styles.promoBody}>
              <div className={styles.promoImageWrapper}>
                <img
                  src="https://reddysports.co/wp-content/uploads/2026/03/west-bengal-assembly-election-2026-reddy-anna-betting.jpg"
                  alt="West Bengal Election Betting"
                  className={styles.promoImg}
                />
              </div>
              <div className={styles.promoContent}>
                <h5>West Bengal Assembly Election 2026 Live Markets</h5>
                <p>
                  Place your votes and predictions on the upcoming assembly elections. Get the most competitive odds, fast result settlement, and 100% verified payouts.
                </p>
                <div style={{ marginTop: "1rem" }}>
                  <WhatsAppButton className={styles.promoCta}>
                    Place Election Predictions Now
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Fun & Crash Lobbies */}
        <h3 className={styles.categoryTitle} style={{ marginTop: "4rem" }}>Crash & Fun Games</h3>
        <div className={styles.funGrid}>
          {FUN_LOBBIES.map((lobby, index) => (
            <a
              key={index}
              href={getWhatsAppLink(lobby.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.funCard}
              style={{ background: lobby.gradient }}
            >
              <div className={styles.funHeader}>
                <span className={styles.funIcon}>{lobby.icon}</span>
                <span className={styles.funSub}>{lobby.sub}</span>
              </div>
              <h4 className={styles.funLabel}>{lobby.label}</h4>
              <span className={styles.playBadge}>Play Now ➜</span>
            </a>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "4rem" }}>
          <WhatsAppButton className={styles.centralCta}>
            💬 Join Any Game Lobby via WhatsApp 💬
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
