"use client";

import React, { useState, useEffect, useRef } from "react";

interface Match {
  name: string;
  cat: string;
  date: string;
  time: string;
  status: "LIVE" | "UPCOMING";
  odds: (number | null)[];
  stakes?: (number | null)[];
}

interface Group {
  label: string;
  type: "live" | "upcoming";
  matches: Match[];
}

const initialGroups: Group[] = [
  {
    label: "🔴  LIVE NOW — 25 MAR 2026",
    type: "live",
    matches: [
      {
        name: "NEW ZEALAND V SOUTH AFRICA",
        cat: "South Africa Tour of New Zealand — 5th T20I • Christchurch",
        date: "25 MAR",
        time: "11:45 AM",
        status: "LIVE",
        odds: [1.82, 1.84, null, null, 2.14, 2.18],
        stakes: [12340.50, 4820.75, null, null, 5610.20, 8930.40]
      },
      {
        name: "NZ WOMEN V SA WOMEN",
        cat: "SA Women Tour of New Zealand — 5th T20I • Christchurch",
        date: "25 MAR",
        time: "01:45 AM",
        status: "LIVE",
        odds: [1.55, 1.57, null, null, 2.72, 2.76],
        stakes: [3210.00, 1540.25, null, null, 2890.60, 1230.80]
      },
      {
        name: "GHANA V SEYCHELLES",
        cat: "ICC Men's T20 WC Africa Sub-Regional Qualifier B • Accra",
        date: "25 MAR",
        time: "09:00 AM",
        status: "LIVE",
        odds: [1.18, 1.20, null, null, 5.80, 6.00],
        stakes: [870.00, 320.00, null, null, 430.00, 210.00]
      },
      {
        name: "ESWATINI V TANZANIA",
        cat: "ICC Men's T20 WC Africa Sub-Regional Qualifier B • Accra",
        date: "25 MAR",
        time: "12:30 PM",
        status: "LIVE",
        odds: [2.90, 2.95, null, null, 1.52, 1.54],
        stakes: [520.00, 180.00, null, null, 740.00, 290.00]
      }
    ]
  },
  {
    label: "⏳  UPCOMING TODAY — 25 MAR 2026",
    type: "upcoming",
    matches: [
      {
        name: "ST HELENA V SEYCHELLES",
        cat: "ICC Men's T20 WC Africa Sub-Regional Qualifier B • Accra",
        date: "25 MAR",
        time: "03:30 PM",
        status: "UPCOMING",
        odds: [3.40, null, null, null, 1.38, null]
      },
      {
        name: "KONARK SURYAS ODISHA V LEGENDS",
        cat: "Legends League Cricket 2026 • India",
        date: "25 MAR",
        time: "07:30 PM",
        status: "UPCOMING",
        odds: [1.92, null, null, null, 2.02, null]
      }
    ]
  },
  {
    label: "📅  PSL 2026 KICKS OFF — 26 MAR",
    type: "upcoming",
    matches: [
      {
        name: "LAHORE QALANDARS V HYDERABAD KINGSMEN",
        cat: "HBL Pakistan Super League 2026 — Match 1 • Gaddafi Stadium, Lahore",
        date: "26 MAR",
        time: "08:00 PM",
        status: "UPCOMING",
        odds: [1.68, null, null, null, 2.40, null]
      },
      {
        name: "KARACHI KINGS V QUETTA GLADIATORS",
        cat: "HBL Pakistan Super League 2026 — Match 2 • National Stadium, Karachi",
        date: "26 MAR",
        time: "08:00 PM",
        status: "UPCOMING",
        odds: [1.95, null, null, null, 1.98, null]
      },
      {
        name: "PESHAWAR ZALMI V RAWALPINDI PINDIZ",
        cat: "HBL Pakistan Super League 2026 — Match 3 • Gaddafi Stadium, Lahore",
        date: "27 MAR",
        time: "03:00 PM",
        status: "UPCOMING",
        odds: [1.78, null, null, null, 2.20, null]
      },
      {
        name: "ISLAMABAD UNITED V MULTAN SULTANS",
        cat: "HBL Pakistan Super League 2026 — Match 4 • National Stadium, Karachi",
        date: "27 MAR",
        time: "08:00 PM",
        status: "UPCOMING",
        odds: [2.10, null, null, null, 1.82, null]
      }
    ]
  },
  {
    label: "🏏  IPL 2026 — TATA IPL SEASON 19",
    type: "upcoming",
    matches: [
      {
        name: "ROYAL CHALLENGERS BENGALURU V SUNRISERS HYD",
        cat: "TATA IPL 2026 — Match 1 (Opener) • M. Chinnaswamy Stadium, Bengaluru",
        date: "28 MAR",
        time: "07:30 PM",
        status: "UPCOMING",
        odds: [1.90, null, null, null, 2.08, null]
      },
      {
        name: "MUMBAI INDIANS V KOLKATA KNIGHT RIDERS",
        cat: "TATA IPL 2026 — Match 2 • Wankhede Stadium, Mumbai",
        date: "29 MAR",
        time: "07:30 PM",
        status: "UPCOMING",
        odds: [1.86, null, null, null, 2.12, null]
      },
      {
        name: "RAJASTHAN ROYALS V CHENNAI SUPER KINGS",
        cat: "TATA IPL 2026 — Match 3 • Barsapara Stadium, Guwahati",
        date: "30 MAR",
        time: "07:30 PM",
        status: "UPCOMING",
        odds: [2.20, null, null, null, 1.78, null]
      },
      {
        name: "PUNJAB KINGS V GUJARAT TITANS",
        cat: "TATA IPL 2026 — Match 4 • Mullanpur Stadium, New Chandigarh",
        date: "31 MAR",
        time: "07:30 PM",
        status: "UPCOMING",
        odds: [2.05, null, null, null, 1.88, null]
      },
      {
        name: "LUCKNOW SUPER GIANTS V DELHI CAPITALS",
        cat: "TATA IPL 2026 — Match 5 • Ekana Cricket Stadium, Lucknow",
        date: "01 APR",
        time: "07:30 PM",
        status: "UPCOMING",
        odds: [1.96, null, null, null, 1.96, null]
      }
    ]
  }
];

export default function CricketOdds() {
  const [activeTab, setActiveTab] = useState<"+ LIVE" | "+ VIRTUAL" | "+ PREMIUM">("+ LIVE");
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  
  // Track cell flashing states: key = "groupIndex-matchIndex-cellIndex", value = "up" | "down" | null
  const [flashes, setFlashes] = useState<Record<string, "up" | "down" | null>>({});

  const fmt = (v: number | null) => (v === null ? "-" : v.toFixed(2));

  // Drift simulation
  const driftOdds = (current: number | null, isLive: boolean) => {
    if (current === null) {
      return Math.random() < 0.03 ? parseFloat((Math.random() * 3 + 1.2).toFixed(2)) : null;
    }
    // Live drifts aggressively; upcoming drifts slowly
    const maxDrift = isLive ? 0.08 : 0.03;
    const drift = (Math.random() - 0.49) * maxDrift;
    let next = parseFloat((current + drift).toFixed(2));
    if (next < 1.01) next = 1.01;
    if (next > 15.0) next = 15.0;
    if (Math.random() < 0.008) return null; // Small chance to turn dormant
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
            // Drift odds for LIVE matches aggressively, upcoming drifts slowly
            match.odds = match.odds.map((oldVal, cIdx) => {
              if (!isLive && oldVal === null) return null; // dormant stays dormant for upcoming
              const newVal = driftOdds(oldVal, isLive);

              if (newVal !== null && oldVal !== null && newVal !== oldVal) {
                const key = `${gIdx}-${mIdx}-${cIdx}`;
                nextFlashes[key] = newVal > oldVal ? "up" : "down";
              }
              return newVal;
            });
          });
        });

        // Trigger flash animations
        setFlashes(nextFlashes);
        // Clear flashes after animation completes
        setTimeout(() => {
          setFlashes({});
        }, 600);

        return nextGroups;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reddy-anna-body bg-[#eef1f7] text-[#1a1a2e] font-sans p-3 rounded-lg shadow-sm border border-[#dde3ef]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#c0162c] to-[#96101f] rounded-t-lg px-4.5 py-3 gap-2 shadow-md">
          <div className="flex items-center gap-2 font-rajdhani font-bold text-[19px] text-white tracking-[1.5px] uppercase">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            CRICKET
          </div>
          <div className="flex gap-1.5">
            {(["+ LIVE", "+ VIRTUAL", "+ PREMIUM"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`border-[1.5px] border-white/50 rounded-full px-3 py-1.5 text-[11px] font-bold text-white tracking-[0.5px] cursor-pointer hover:bg-white/20 transition-all ${
                  activeTab === tab ? "bg-white/20" : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Column Headers (Desktop) */}
        <div className="hidden sm:grid grid-cols-[1fr_90px_390px] bg-[#1a1a2e] border-b-2 border-[#c0162c]">
          <div className="padding py-2.5 px-3.5 text-[11px] text-white/50 font-semibold tracking-[0.5px] uppercase">
            MATCH
          </div>
          <div></div>
          <div className="grid grid-cols-3">
            {[1, "X", 2].map((groupNum) => (
              <div key={groupNum} className="grid grid-cols-2 border-l border-white/8">
                <div className="col-span-2 text-center font-rajdhani font-bold text-[13px] text-white/85 tracking-[2px] py-1 border-b border-white/8">
                  {groupNum}
                </div>
                <div className="text-center text-[10px] text-white/45 font-medium tracking-[0.3px] py-0.5 uppercase">
                  Back
                </div>
                <div className="text-center text-[10px] text-white/45 font-medium tracking-[0.3px] py-0.5 uppercase">
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
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_90px_390px] bg-gradient-to-r from-[#1a1a2e] to-[#252545] py-2 px-3.5 items-center border-b border-white/6">
                <div className={`font-rajdhani font-bold text-[12px] tracking-[2px] uppercase flex items-center gap-1.5 text-white/55 before:content-[''] before:inline-block before:w-[3px] before:h-[12px] before:rounded-[2px] ${
                  group.type === "live" ? "before:bg-[#00b140]" : "before:bg-[#f5a623]"
                }`}>
                  {group.label}
                </div>
              </div>

              {/* Match Rows */}
              {group.matches.map((match, mIdx) => (
                <div
                  key={match.name}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_90px_390px] border-b border-[#dde3ef] last:border-b-0 hover:bg-[#eef4ff] transition-all"
                >
                  {/* Match Info */}
                  <div className="py-2.5 px-3.5 flex flex-col justify-center gap-1 min-w-0">
                    <div className="font-rajdhani font-bold text-[14px] text-[#1a1a2e] tracking-[0.2px] truncate">
                      {match.name}
                    </div>
                    <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-[0.3px] truncate">
                      {match.cat}
                    </div>
                  </div>

                  {/* Badges / Time Meta */}
                  <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-2 py-2 px-3.5 sm:px-1.5 border-l border-r border-[#dde3ef] bg-gray-50/50 sm:bg-transparent">
                    {match.status === "LIVE" ? (
                      <div className="bg-[#00b140] text-white text-[9.5px] font-bold tracking-[1px] px-1.5 py-0.5 rounded-sm uppercase inline-flex items-center gap-1 before:content-[''] before:inline-block before:w-[5px] before:h-[5px] before:bg-white before:rounded-full before:animate-ping">
                        LIVE
                      </div>
                    ) : (
                      <div className="bg-[#f5a623] text-[#1a1a2e] text-[9.5px] font-bold tracking-[1px] px-1.5 py-0.5 rounded-sm uppercase">
                        SOON
                      </div>
                    )}
                    <div className="text-[10px] text-gray-500 font-semibold text-right sm:text-center leading-[1.3]">
                      {match.date}
                      <br className="hidden sm:inline" /> {match.time}
                    </div>
                  </div>

                  {/* Mobile Odds Header labels */}
                  <div className="grid grid-cols-6 sm:hidden bg-[#1a1a2e] border-t border-white/8">
                    {["1 Back", "1 Lay", "X Back", "X Lay", "2 Back", "2 Lay"].map((lbl, idx) => (
                      <div
                        key={lbl}
                        className={`text-center text-[9px] font-bold tracking-[0.5px] py-1 ${
                          idx % 2 === 0 ? "bg-[#3a6ea8] text-[#cde7ff]" : "bg-[#a84466] text-[#ffe0eb]"
                        }`}
                      >
                        {lbl}
                      </div>
                    ))}
                  </div>

                  {/* Odds Grid */}
                  <div className="grid grid-cols-6 border-t sm:border-t-0 border-[#dde3ef]">
                    {match.odds.map((val, cIdx) => {
                      const isLay = cIdx % 2 !== 0;
                      const stake = match.stakes ? match.stakes[cIdx] : null;
                      const key = `${gIdx}-${mIdx}-${cIdx}`;
                      const flashStatus = flashes[key];

                      return (
                        <div
                          key={cIdx}
                          className={`flex flex-col items-center justify-center py-1.5 px-1 cursor-pointer transition-all duration-300 border-l first:border-l-0 border-[#dde3ef]/40 min-h-[48px] select-none hover:brightness-105 active:scale-95 ${
                            isLay ? "bg-ra-lay-pink text-[#1a1a2e] hover:bg-[#f891a6]" : "bg-ra-back-blue text-[#1a1a2e] hover:bg-[#5aaade]"
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
