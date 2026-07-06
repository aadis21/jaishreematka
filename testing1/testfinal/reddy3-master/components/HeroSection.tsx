import WhatsAppButton from "./WhatsAppButton";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.content}`}>
        <h1 className={`${styles.title} animate-fade-in`}>
          <span className={styles.accent}>{SITE_CONFIG.brand.name}</span> – Get Your Official {SITE_CONFIG.brand.name} ID Instantly
        </h1>
        
        <div className={`${styles.bannerWrapper} animate-fade-in animate-delay-1`}>
          <Image 
            src="/banners/banner1.png" 
            alt={`${SITE_CONFIG.brand.name} Official Platform`} 
            width={1698}
            height={608}
            priority
            className={styles.mainBanner}
          />
        </div>
        
        <p className={`${styles.subtitle} animate-fade-in animate-delay-2`}>
          Join India’s leading cricket betting ID platform since 2010. Enjoy instant access, safe payments, special bonuses & 24/7 support.
        </p>
        
        <div className={`${styles.ctaGroup} animate-fade-in animate-delay-3`}>
          <WhatsAppButton className={styles.mainCta}>
            👉 Get Reddy Anna ID Here 👈
          </WhatsAppButton>
          <WhatsAppButton variant="outline" className={styles.secondaryCta}>
            👉 Get Online Betting ID 👈
          </WhatsAppButton>
        </div>
        
        <div className={`${styles.stats} animate-fade-in animate-delay-3`}>
          <div className={styles.statItem}>
            <h3>50,000+</h3>
            <p>Active Users</p>
          </div>
          <div className={styles.statItem}>
            <h3>200+</h3>
            <p>Offline Branches</p>
          </div>
          <div className={styles.statItem}>
            <h3>60 Sec</h3>
            <p>ID Activation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
