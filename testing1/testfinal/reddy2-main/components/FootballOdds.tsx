"use client";

import React, { useState, useEffect } from "react";

interface Match {
  name: string;
  cat: string;
  date: string;
  time: string;
  badge: "live" | "soon" | "wc";
  wcNote?: string;
  odds: (number | null)[];
  stakes?: (number | null)[];
}

interface Group {
  label: string;
  flag: string;
  type: "live" | "upcoming" | "wc";
  matches: Match[];
}

const initialGroups: Group[] = [
  {
    label: "🔴  LIVE NOW — 25 MAR 2026",
    flag: "🟢",
    type: "live",
    matches: [
      {
        name: "NORTH MACEDONIA V WALES",
        cat: "FIFA WC 2026 Qualifier — UEFA Group J",
        date: "25 MAR",
        time: "09:45 PM",
        badge: "live",
        odds: [4.20, 4.40, 3.60, 3.80, 1.95, 1.97],
        stakes: [3210.50, 1820.00, 2840.75, 1300.00, 6120.80, 4230.60]
      },
      {
        name: "MOLDOVA V ESTONIA",
        cat: "FIFA WC 2026 Qualifier — UEFA Group I",
        date: "25 MAR",
        time: "06:00 PM",
        badge: "live",
        odds: [2.60, 2.65, 3.30, 3.40, 2.52, 2.56],
        stakes: [1420.00, 680.00, 1850.00, 790.00, 2340.00, 1120.00]
      },
      {
        name: "LIECHTENSTEIN V KAZAKHSTAN",
        cat: "FIFA WC 2026 Qualifier — UEFA Group J",
        date: "25 MAR",
        time: "06:00 PM",
        badge: "live",
        odds: [7.00, 7.40, 5.00, 5.20, 1.40, 1.42],
        stakes: [820.00, 280.00, 1080.00, 430.00, 3200.00, 1450.00]
      }
    ]
  },
  {
    label: "⏳  UPCOMING TODAY — 25 MAR 2026",
    flag: "🟡",
    type: "upcoming",
    matches: [
      {
        name: "COLOMBIA — DEPORTIVO PEREIRA V CUCUTA",
        cat: "Colombia Primera A",
        date: "25 MAR",
        time: "10:00 PM",
        badge: "soon",
        odds: [2.10, null, 3.20, null, 3.60, null]
      },
      {
        name: "COLOMBIA — JUNIOR FC V BUCARAMANGA",
        cat: "Colombia Primera A",
        date: "25 MAR",
        time: "12:30 AM",
        badge: "soon",
        odds: [1.95, null, 3.40, null, 3.90, null]
      }
    ]
  },
  {
    label: "🏆  FIFA WC 2026 PLAYOFFS — 26 MAR (UEFA Semis)",
    flag: "🌍",
    type: "wc",
    matches: [
      {
        name: "ITALY V NORTHERN IRELAND",
        cat: "FIFA WC 2026 UEFA Playoff Path A Semi-Final • Bergamo",
        date: "26 MAR",
        time: "09:15 PM",
        badge: "wc",
        wcNote: "WC PATH A",
        odds: [1.28, 1.30, 5.80, 6.00, 10.0, 10.5],
      },
      {
        name: "WALES V BOSNIA & HERZEGOVINA",
        cat: "FIFA WC 2026 UEFA Playoff Path A Semi-Final • Cardiff",
        date: "26 MAR",
        time: "09:15 PM",
        badge: "wc",
        wcNote: "WC PATH A",
        odds: [2.10, 2.14, 3.40, 3.50, 3.60, 3.70]
      },
      {
        name: "UKRAINE V SWEDEN",
        cat: "FIFA WC 2026 UEFA Playoff Path B Semi-Final • Valencia",
        date: "26 MAR",
        time: "09:15 PM",
        badge: "wc",
        wcNote: "WC PATH B",
        odds: [1.95, 1.98, 3.60, 3.70, 4.00, 4.10]
      }
    ]
  }
];

export default function FootballOdds() {
  const [activeTab, setActiveTab] = useState<"+ LIVE" | "+ VIRTUAL" | "+ PREMIUM">("+ LIVE");
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [flashes, setFlashes] = useState<Record<string, "up" | "down" | null>>({});

  const fmt = (v: number | null) => (v === null ? "-" : v.toFixed(2));

  // Drift simulation
  const driftOdds = (current: number | null, isLive: boolean) => {
    if (current === null) return null;
    const maxDrift = isLive ? 0.10 : 0.04;
    const drift = (Math.random() - 0.49) * maxDrift;
    let next = parseFloat((current + drift).toFixed(2));
    if (next < 1.01) next = 1.01;
    if (next > 50.0) next = 50.0;
    if (Math.random() < 0.008) return null; // turn dormant
    return next;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGroups((prevGroups) => {
        const nextGroups = JSON.parse(JSON.stringify(prevGroups)) as Group[];
        const nextFlashes: Record<string, "up" | "down" | null> = {};

        nextGroups.forEach((group, gIdx) => {
          const isLive = group.type === "live";
          group.matches.forEach((match, mIdx) => {
            match.odds = match.odds.map((oldVal, cIdx) => {
              if (oldVal === null) return null;
              const newVal = driftOdds(oldVal, isLive);

              if (newVal !== null && newVal !== oldVal) {
                const key = `${gIdx}-${mIdx}-${cIdx}`;
                nextFlashes[key] = newVal > oldVal ? "up" : "down";
              }
              return newVal;
            });
          });
        });

        setFlashes(nextFlashes);
        setTimeout(() => {
          setFlashes({});
        }, 600);

        return nextGroups;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reddy-anna-football-body bg-[#e8edf5] text-[#0f1923] font-sans p-3 rounded-lg shadow-sm border border-[#dde4ef]">
      <div className="max-w-[1220px] mx-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#1a6b2f] to-[#22883c] rounded-t-lg px-4.5 py-3 gap-2 shadow-md">
          <div className="flex items-center gap-2.5 font-rajdhani font-bold text-[19px] text-white tracking-[1.5px] uppercase">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93V16l-3-3H6.07A8.03 8.03 0 0 1 4 12c0-.68.09-1.35.26-1.99L7 13v1l1 3-2.93-.07zM18.92 17A8.03 8.03 0 0 1 13 19.93V18l2-2 3.5.5.42-.5zm.82-2.5L17 14l-1-3 2-2h2.74A8.04 8.04 0 0 1 21 12c0 .87-.15 1.71-.41 2.5zM8.5 8H11V6.07A8.02 8.02 0 0 1 14 6.07V8h2.5l1 2L16 12H8l-1.5-2 2-2z" />
            </svg>
            FOOTBALL
          </div>
          <div className="flex gap-1.5">
            {(["+ LIVE", "+ VIRTUAL", "+ PREMIUM"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`border-[1.5px] border-white/55 rounded-full px-3 py-1.5 text-[11px] font-bold text-white tracking-[0.5px] cursor-pointer hover:bg-white/20 transition-all ${
                  activeTab === tab ? "bg-white/20" : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Column Headers (Desktop) */}
        <div className="hidden sm:grid grid-cols-[1fr_88px_396px] bg-[#0f1923] border-b-2 border-[#1a6b2f]">
          <div className="padding py-2.5 px-3.5 text-[11px] text-white/45 font-semibold tracking-[1px] uppercase">
            Match
          </div>
          <div></div>
          <div className="grid grid-cols-3">
            {["1", "X", "2"].map((groupNum) => (
              <div key={groupNum} className="grid grid-cols-2 border-l border-white/7">
                <div className="col-span-2 text-center font-rajdhani font-bold text-[13px] text-white/85 tracking-[2px] py-1 border-b border-white/7">
                  {groupNum}
                </div>
                <div className="text-center text-[10px] text-white/40 font-medium tracking-[0.3px] py-0.5 uppercase">
                  Back
                </div>
                <div className="text-center text-[10px] text-white/40 font-medium tracking-[0.3px] py-0.5 uppercase">
                  Lay
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table Body */}
        <div className="bg-white rounded-b-lg overflow-hidden shadow-md">
          {groups.map((group, gIdx) => (
            <React.Fragment key={group.label}>
              {/* Section Divider */}
              <div className="flex items-center gap-2.5 bg-gradient-to-r from-[#0f1923] to-[#1a2535] py-2 px-3.5 border-b border-white/5 border-t-2 border-white/4">
                <span className="text-[14px] leading-none">{group.flag}</span>
                <span className={`font-rajdhani font-bold text-[12px] tracking-[1.8px] uppercase flex items-center gap-1.5 text-white/55 before:content-[''] before:inline-block before:w-[3px] before:h-[13px] before:rounded-[2px] ${
                  group.type === "live" ? "before:bg-[#00b140]" : group.type === "wc" ? "before:bg-[#e8c44a]" : "before:bg-[#f5a623]"
                }`}>
                  {group.label}
                </span>
                <span className="ml-auto text-[9.5px] font-bold text-white/30 tracking-[0.5px] uppercase whitespace-nowrap">
                  {group.matches.length} MATCH{group.matches.length > 1 ? "ES" : ""}
                </span>
              </div>

              {/* Match Rows */}
              {group.matches.map((match, mIdx) => (
                <div
                  key={match.name}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_88px_396px] border-b border-[#dde4ef] last:border-b-0 hover:bg-[#eaf3ff] transition-all"
                >
                  {/* Match Info */}
                  <div className="py-2.5 px-3.5 flex flex-col justify-center gap-1 min-w-0">
                    <div className="font-rajdhani font-bold text-[14px] text-[#0f1923] tracking-[0.2px] truncate">
                      {match.name}
                    </div>
                    <div className="text-[10px] text-[#8a94a8] font-semibold uppercase tracking-[0.3px] truncate">
                      {match.cat}
                    </div>
                  </div>

                  {/* Badges / Time Meta */}
                  <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-2 py-2 px-3.5 sm:px-1.5 border-l border-r border-[#dde4ef] bg-gray-50/50 sm:bg-transparent">
                    {match.badge === "live" ? (
                      <div className="bg-[#00b140] text-white text-[9.5px] font-bold tracking-[1px] px-1.5 py-0.5 rounded-sm uppercase inline-flex items-center gap-1 before:content-[''] before:inline-block before:w-[5px] before:h-[5px] before:bg-white before:rounded-full before:animate-ping">
                        LIVE
                      </div>
                    ) : match.badge === "wc" ? (
                      <div className="bg-gradient-to-r from-[#c9a227] to-[#e8c44a] text-black text-[9px] font-extrabold tracking-[0.5px] px-1.5 py-0.5 rounded-sm uppercase text-center leading-[1.3]">
                        {match.wcNote || "WC"}
                      </div>
                    ) : (
                      <div className="bg-[#f5a623] text-black text-[9.5px] font-bold tracking-[1px] px-1.5 py-0.5 rounded-sm uppercase">
                        SOON
                      </div>
                    )}
                    <div className="text-[10px] text-[#8a94a8] font-semibold text-right sm:text-center leading-[1.3]">
                      {match.date}
                      <br className="hidden sm:inline" /> {match.time}
                    </div>
                  </div>

                  {/* Mobile Odds Header labels */}
                  <div className="grid grid-cols-6 sm:hidden bg-[#0f1923] border-t border-white/7">
                    {["1 Back", "1 Lay", "X Back", "X Lay", "2 Back", "2 Lay"].map((lbl, idx) => (
                      <div
                        key={lbl}
                        className={`text-center text-[9px] font-bold tracking-[0.5px] py-1 ${
                          idx % 2 === 0 ? "bg-[#2c5f8a] text-[#cde7ff]" : "bg-[#8a2c46] text-[#ffe0eb]"
                        }`}
                      >
                        {lbl}
                      </div>
                    ))}
                  </div>

                  {/* Odds Grid */}
                  <div className="grid grid-cols-6 border-t sm:border-t-0 border-[#dde4ef]">
                    {match.odds.map((val, cIdx) => {
                      const isLay = cIdx % 2 !== 0;
                      const stake = match.stakes ? match.stakes[cIdx] : null;
                      const key = `${gIdx}-${mIdx}-${cIdx}`;
                      const flashStatus = flashes[key];

                      return (
                        <div
                          key={cIdx}
                          className={`flex flex-col items-center justify-center py-1.5 px-1 cursor-pointer transition-all duration-300 border-l first:border-l-0 border-[#dde4ef]/40 min-h-[48px] select-none hover:brightness-105 active:scale-95 ${
                            isLay ? "bg-ra-lay-pink text-[#0f1923] hover:bg-[#f891a6]" : "bg-ra-back-blue text-[#0f1923] hover:bg-[#5aaade]"
                          } ${val === null ? "opacity-35 cursor-not-allowed pointer-events-none" : ""} ${
                            flashStatus === "up" ? "flash-up-active" : flashStatus === "down" ? "flash-down-active" : ""
                          }`}
                        >
                          <div className="font-rajdhani font-bold text-[14.5px] leading-none">
                            {fmt(val)}
                          </div>
                          {stake && val !== null && (
                            <div className="text-[9px] text-black/45 font-medium mt-0.5">
                              {stake.toFixed(2)}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
}
