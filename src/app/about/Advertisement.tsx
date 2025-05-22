import styles from './about.module.css';
import { Zen_Dots } from 'next/font/google';

const zenfont = Zen_Dots({ subsets: ['latin'], weight: '400' });

export default function Advertisement() {
  return (
    <div className={styles.advertisementBanner}>
      <p className={zenfont.className}>ADVERTISEMENT</p>
    </div>
  );
}
