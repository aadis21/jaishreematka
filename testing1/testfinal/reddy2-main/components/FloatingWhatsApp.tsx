"use client";

import React from "react";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
  label?: string;
}

export default function FloatingWhatsApp({
  phoneNumber = "916026703858",
  message = "Hello, Want Online ID",
  label = "Get Reddy Anna ID Now",
}: FloatingWhatsAppProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp fixed left-1/2 bottom-[30px] z-[9999] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-[35px] py-[12px] text-[16px] font-bold text-white shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.8),_0_0_40px_rgba(18,140,126,0.6)] animate-wa-float whitespace-nowrap inline-flex items-center justify-center gap-[10px] md:px-[28px] md:py-[12px] md:text-[15px] md:bottom-[20px] md:gap-[8px]"
    >
      <svg
        className="w-[22px] h-[22px] md:w-[20px] md:h-[20px] fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 2.568 1.489 4.321 1.49 5.487.002 9.947-4.417 9.95-9.87.003-2.642-1.02-5.127-2.883-6.993C16.173 1.916 13.682.894 11.04.892c-5.493 0-9.953 4.415-9.957 9.871-.001 1.914.502 3.393 1.341 4.88L1.398 22.181l6.762-1.773-.013-.23.1.218z" />
        <path d="M15.42 12.355c-.29-.145-1.72-.848-1.985-.945-.267-.098-.462-.147-.657.147-.197.29-.757.945-.929 1.14-.17.195-.342.218-.633.073-.29-.145-1.229-.453-2.34-1.444-.863-.77-1.447-1.72-1.616-2.01-.17-.29-.018-.448.127-.592.13-.13.29-.34.437-.508.145-.17.195-.29.29-.484.098-.195.048-.364-.025-.508-.073-.145-.657-1.583-.9-2.17-.236-.57-.478-.493-.657-.502-.17-.008-.364-.01-.557-.01-.194 0-.51.072-.777.362-.267.29-1.02.997-1.02 2.433 0 1.437 1.045 2.822 1.19 3.016.145.194 2.055 3.138 4.978 4.4 1.25.54 1.944.693 2.61.8.694.11 1.347.08 1.854.004.565-.084 1.72-.703 1.96-1.383.243-.68.243-1.263.17-1.38-.07-.12-.26-.195-.55-.34z" />
      </svg>
      {label}
    </a>
  );
}
