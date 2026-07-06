import WhatsAppButton from "./WhatsAppButton";
import styles from "./Features.module.css";

const featuresData = [
  {
    title: "Established Reputation",
    description: "Backed by over 10 years of excellence in the betting industry.",
    icon: "✅"
  },
  {
    title: "Instant Reddy Anna ID",
    description: "Register and start betting in under 2 minutes.",
    icon: "⚡"
  },
  {
    title: "Fast Withdrawals",
    description: "Same-day UPI and wallet transfers with no hidden fees.",
    icon: "💸"
  },
  {
    title: "Wide Betting Coverage",
    description: "Cricket, football, kabaddi, tennis, esports, and live casinos.",
    icon: "🎯"
  },
  {
    title: "100% Secure Platform",
    description: "SSL encryption, OTP verification, and full KYC compliance.",
    icon: "🔒"
  },
  {
    title: "Mobile-Friendly Access",
    description: "Play on the go with the Reddy Anna App.",
    icon: "📱"
  },
  {
    title: "Exciting Bonuses",
    description: "Welcome offers, cashback rewards, and festival promotions.",
    icon: "🎁"
  },
  {
    title: "24/7 Support",
    description: "Reach us anytime via WhatsApp, Telegram, or live chat.",
    icon: "🤝"
  },
  {
    title: "Responsible Gaming",
    description: "Tools for setting limits, self-exclusion, and safe betting practices.",
    icon: "🧠"
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
          Experience the premium difference with India's most trusted online betting platform.
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
            Get Your Reddy Anna ID Instantly
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
