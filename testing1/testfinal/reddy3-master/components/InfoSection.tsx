import WhatsAppButton from "./WhatsAppButton";
import styles from "./InfoSection.module.css";

export default function InfoSection() {
  return (
    <section className={`section-padding ${styles.infoSection}`} id="about">
      <div className="container">
        <div className={styles.card}>
          <h2 className="section-title text-center">
            What Is <span>Reddy Anna</span> ? Everything You Need to Know
          </h2>
          <p className={styles.text}>
            Before you register, you deserve a clear and honest answer to this question. Reddy Anna is an online cricket betting exchange and sports wagering platform that has been operating since 2010. It is not a new entrant trying to build a reputation – it is a platform that already has one.
          </p>
          <p className={styles.text}>
            The platform operates under the Reddy Anna Network brand and runs three widely recognised sub-brands: Anna Book, Reddy Book, and Reddy Anna Book Club. Each serves the same community of cricket fans and bettors, with the same speed, the same reliability, and the same commitment to paying out winnings without delay.
          </p>
          <p className={styles.highlightText}>
            All registrations, deposits, withdrawals, and customer support at Reddy Anna happen through WhatsApp. There are no long forms, no call centre queues, and no bureaucratic processes. You send a message, you get your ID, and you start betting.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <h3>The <span>Platform</span> Behind the Name</h3>
            <p>
              Reddy Anna is personally involved in the management of this platform. That personal ownership matters because it means accountability sits with a real person, not a faceless corporation. When a member has a problem, it gets solved. When a withdrawal needs processing, it happens. That is what 13 years of trusted operation looks like in practice.
            </p>
          </div>
          <div className={styles.gridItem}>
            <h3>Who Uses <span>Reddy Anna</span> ?</h3>
            <p>
              The Reddy Anna community spans all kinds of cricket fans. Some members are experienced bettors who have been with the platform since its early years. Others are first-timers who joined because a friend recommended the platform. The minimum deposit is ₹100, which means anyone can get started without committing large sums upfront.
            </p>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <WhatsAppButton>
            GET REDDY ANNA ID INSTANT & FAST BY WHATSAPP
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
