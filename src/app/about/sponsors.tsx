import styles from './about.module.css';
import { Zen_Dots } from 'next/font/google';

const zenfont = Zen_Dots({ subsets: ['latin'], weight: '400' });

export default function Sponsors() {
  return (
    <section className={styles.sponsorsSection}>
      <div className={`${styles.title} ${zenfont.className}`}>OUR-SPONSERS</div>
      <div className={styles.divider2}></div>
      <div className={styles.sponsorsGrid}>
        {[...Array(7)].map((_, i) => (
          <div key={i} className={styles.sponsorBox}></div>
        ))}
      </div>
    </section>
  );
}
