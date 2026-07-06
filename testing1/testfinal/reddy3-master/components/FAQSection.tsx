"use client";
import { useState } from "react";
import styles from "./FAQSection.module.css";
import { SITE_CONFIG } from "@/config/constants";

const faqs = [
  {
    q: `What is ${SITE_CONFIG.brand.name}?`,
    a: `${SITE_CONFIG.brand.name} is India’s most trusted online cricket betting ID platform, active since 2010. It provides members with instant ID activation, live sports betting markets, and fast withdrawals.`
  },
  {
    q: `How do I get a ${SITE_CONFIG.brand.name} ID?`,
    a: `Click “Get New ID”, enter your WhatsApp number, and receive your ID within 60 seconds. No documents required for registration.`
  },
  {
    q: "What is the minimum deposit?",
    a: "The minimum deposit is ₹100 – the lowest minimum in the Indian market."
  },
  {
    q: "How fast are withdrawals?",
    a: "UPI withdrawals process in under 30 minutes. Bank transfers complete in 1 to 2 hours. Crypto payouts take 5 to 15 minutes. Available 24/7."
  },
  {
    q: "Can I access it on mobile?",
    a: "Yes. It works on any mobile browser. No app download is required. The platform is fully optimised for mobile screens."
  },
  {
    q: "What age is required to use this platform?",
    a: "18 years and above only. Age is verified during the registration process."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          Frequently Asked Questions
        </h2>
        
        <div className={styles.faqWrapper}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
            >
              <div 
                className={styles.faqQuestion} 
                onClick={() => toggleFaq(index)}
              >
                <h3>{faq.q}</h3>
                <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
              </div>
              <div className={styles.faqAnswer}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
