import WhatsAppButton from "./WhatsAppButton";
import styles from "./Features.module.css";

const featuresData = [
  {
    title: "60 Seconds ID",
    description: "Your unique Reddy Anna ID, temporary password, and welcome bonus arrive in under a minute via WhatsApp.",
    icon: "⏱️"
  },
  {
    title: "Instant Withdrawals",
    description: "Withdraw via UPI (Google Pay, PhonePe, Paytm) and get your winnings in under 30 minutes. Guaranteed.",
    icon: "💸"
  },
  {
    title: "500% Welcome Bonus",
    description: "Deposit ₹1,000 and play with ₹6,000! Highest welcome bonus in the Indian cricket betting space.",
    icon: "🎁"
  },
  {
    title: "15% Daily Cashback",
    description: "Every day at midnight, 15% of your net losses is automatically credited back. No questions asked.",
    icon: "🔄"
  },
  {
    title: "₹100 Minimum Deposit",
    description: "Start small. You only need ₹100 to begin your betting journey with live IPL matches and casino games.",
    icon: "🔰"
  },
  {
    title: "24/7 Human Support",
    description: "No bots. Talk to a real human team directly on WhatsApp for any account queries or withdrawal requests.",
    icon: "🎧"
  }
];

export default function Features() {
  return (
    <section className={`section-padding ${styles.featuresSection}`} id="services">
      <div className="container">
        <h2 className="section-title text-center">
          Why Choose <span>Reddy Anna</span>
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          Experience the premium difference with India's most trusted betting platform.
        </p>

        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <WhatsAppButton className={styles.largeCta}>
            Simple & Quick Registration Process
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
