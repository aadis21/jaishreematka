import React from "react";
import { CONFIG } from "@/utils/config";

interface ConicButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
}

export const ConicButton: React.FC<ConicButtonProps> = ({ text, href = CONFIG.whatsappUrl, onClick }) => {
  if (onClick) {
    return (
      <button onClick={onClick} className="reddy-conic-btn group relative select-none">
        <span className="relative z-10 transition-colors duration-200 group-hover:text-amber-300">
          {text}
        </span>
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="reddy-conic-btn group relative select-none"
    >
      <span className="relative z-10 transition-colors duration-200 group-hover:text-amber-300">
        {text}
      </span>
    </a>
  );
};
