import styles from './about.module.css';
import { Zen_Dots } from 'next/font/google';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiMessenger } from 'react-icons/si'; // Messenger icon

const zenfont = Zen_Dots({ subsets: ['latin'], weight: '400' });

export default function SocialZone() {
  return (
    <section className={styles.socialSection}>
      <div className={`${styles.title} ${zenfont.className}`}>OUR-SOCIAL-ZONE</div>
      <div className={styles.divider4}></div>
      <div className={styles.socialIcons}>
        <a href="http://facebook.com/share/16Pv5FoKgd" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Share on Facebook"><FaFacebookF /></a>
        <a href="http://tiktok.com/@local.stvn" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Visit our TikTok page"><FaTiktok /></a>
        <a href="http://instagram.com/local.stvn" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Visit our Instagram page"><FaInstagram /></a>
        <a href="http://x.com/local_STVN" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Visit our X (formerly Twitter) page"><FaXTwitter /></a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Chat with us on WhatsApp"><FaWhatsapp /></a>
        <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Watch us on YouTube"><FaYoutube /></a>
        <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Message us on Messenger"><SiMessenger /></a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Connect on LinkedIn"><FaLinkedinIn /></a>
      </div>
    </section>
  );
}
