import styles from "./RegistrationSteps.module.css";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";

export default function RegistrationSteps() {
  return (
    <section className={`section-padding ${styles.section}`} id="steps">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.contentCol}>
            <h2 className="section-title">
              {SITE_CONFIG.brand.name} ID – How to Get Yours in 60 Seconds
            </h2>
            <p className={styles.intro}>
              The {SITE_CONFIG.brand.name} ID is your personal access key to the entire platform. It connects your wallet, your bets, your bonuses, and your withdrawal history in one place.
            </p>
            
            <div className={styles.stepsList}>
              <div className={styles.step}>
                <h3>Step 1 – Visit the Official Website</h3>
                <p>Go to {SITE_CONFIG.url} – always verify the URL before entering any details. The official domain is {SITE_CONFIG.url}.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 2 – Click "Get New ID"</h3>
                <p>The registration button is prominently placed on the homepage. Tap it to start the process.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 3 – Submit Your WhatsApp Number</h3>
                <p>Enter the mobile number you use for WhatsApp. Your ID and login credentials will be delivered to this number within 60 seconds.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 4 – Receive Your ID on WhatsApp</h3>
                <p>Check your WhatsApp. Your unique ID, temporary password, and a welcome bonus code will arrive within one minute. No documents required. No waiting period. No KYC for deposits under ₹50,000.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/banners/banner2.png" 
                alt="Registration Steps" 
                width={848}
                height={1264}
                className={styles.stepImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
