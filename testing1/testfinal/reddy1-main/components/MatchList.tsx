import React from "react";
import { CONFIG } from "@/utils/config";

interface Match {
  teams: string;
  tournament: string;
  date: string;
  live: boolean;
  bm?: boolean;
}

interface MatchListProps {
  category: "cricket" | "football" | "tennis";
  iconUrl: string;
  title: string;
}

export const MatchList: React.FC<MatchListProps> = ({ category, iconUrl, title }) => {
  const matches: Match[] = CONFIG.matches[category] || [];

  return (
    <div className="w-full flex flex-col gap-4 mt-6 select-none">
      {/* Category Header */}
      <div className="flex items-center gap-3 bg-[#0c1322] border border-[#F0901A]/10 rounded-2xl p-4 shadow-sm">
        <img src={iconUrl} alt={title} className="w-8 h-8 object-contain" />
        <h3 className="text-white font-extrabold text-lg md:text-xl tracking-wide">{title}</h3>
      </div>

      {/* Matches Grid */}
      <div className="flex flex-col gap-3.5">
        {matches.length === 0 ? (
          <div className="bg-[#0c1322] border border-dashed border-[#F0901A]/10 text-gray-400 text-center py-8 rounded-2xl">
            No live events currently listed
          </div>
        ) : (
          matches.map((match, idx) => (
            <div
              key={idx}
              className="bg-[#0c1322] hover:bg-[#10192b] border border-[#F0901A]/10 hover:border-[#F0901A]/20 transition-all duration-300 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.15)] group"
            >
              {/* Left Details */}
              <div className="flex-1 flex flex-col gap-1.5 text-left">
                <h4 className="text-white font-extrabold text-base md:text-lg tracking-wide group-hover:text-amber-300 transition-colors duration-200">
                  {match.teams}
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-semibold">
                  {match.tournament}
                </p>
              </div>

              {/* Status and Action Panel */}
              <div className="flex items-center justify-between md:justify-end gap-5">
                {/* Live Badge */}
                {match.live && (
                  <div className="live-badge select-none">
                    <span /> Live
                  </div>
                )}

                {/* Date */}
                <div className="text-gray-400 font-bold text-xs md:text-sm bg-[#05080f] px-3 py-1.5 rounded-lg border border-[#F0901A]/5">
                  📅 {match.date}
                </div>

                {/* Badges and Bets */}
                <div className="flex items-center gap-3">
                  {match.bm && (
                    <div className="game-bm font-black">
                      BM
                    </div>
                  )}
                  <a
                    href={CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bet-fancy-btn"
                  >
                    <span>make Bet</span>
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
