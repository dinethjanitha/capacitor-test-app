import styles from './about.module.css';
import { Zen_Dots } from 'next/font/google';
import Image from 'next/image';

const zenfont = Zen_Dots({ subsets: ['latin'], weight: '400' });

export default function Expertise() {
  return (
    <section className={styles.expertiseSection}>
      <div className={`${styles.title} ${zenfont.className}`}>OUR-EXPERTISE</div>
      <div className={styles.divider3}></div>
      <div className={`${styles.expertiseList} ${zenfont.className}`}>
        <span>STREAMING</span><span>HIGHLIGHT</span><span>EVENTS</span><span>ROUND-UP</span>
      </div>
      <div className={styles.expertiseImages}>
        {['/image_fx (48).png', '/image_fx (21).png', '/image_fx (18).png', '/image_fx (13).png'].map((src, i) => (
          <div key={i} className={styles.expertiseBox}>
            <Image width={200} height={200} src={src} alt={`expertise-${i}`} className={styles.expertiseImage} />
          </div>
        ))}
      </div>
    </section>
  );
}
