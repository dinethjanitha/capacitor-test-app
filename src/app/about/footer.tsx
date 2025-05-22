import styles from './about.module.css';
import { Actor } from 'next/font/google';

const actorfont = Actor({ subsets: ['latin'], weight: '400' });

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footerLinks} ${actorfont.className}`}>
        <a href="/bolg">Blog</a>
        <a href="/contact-infor">Contact Infor</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </div>
  );
}
