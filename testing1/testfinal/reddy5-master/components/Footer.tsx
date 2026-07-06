import Link from "next/link";
import styles from "./Footer.module.css";
import { SITE_CONFIG } from "@/config/constants";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={`container ${styles.footerTop}`}>
        <div className={styles.grid}>
          
          <div className={styles.col}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoReddy}>{SITE_CONFIG.brand.logoText1}</span>
              <span className={styles.logoAnna}>{SITE_CONFIG.brand.logoText2}</span>
            </Link>
            <p className={styles.desc}>
              Experience secure online gaming, fast cricket betting IDs, instant deposits, quick withdrawals, and premium customer support with a trusted gaming platform designed for Indian users since 2010.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href={SITE_CONFIG.whatsappLink}>Contact Support</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Legal</h4>
            <ul className={styles.linksList}>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">Responsible Gaming</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Get Started</h4>
            <p className={styles.desc} style={{ marginBottom: '1rem' }}>
              Message us on WhatsApp to get your official betting ID instantly.
            </p>
            <WhatsAppButton variant="primary">
              Contact on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <p>
            All users must be 18 years or older to access gaming services. Please play responsibly and follow your local laws before using online gaming platforms.
          </p>
          <p style={{ marginTop: '10px', color: '#666' }}>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.brand.name} Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
