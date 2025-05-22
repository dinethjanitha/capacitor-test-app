import React from 'react';
import styles from './footer.module.css';
import { FaFacebookF, FaTiktok, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Social Icons */}
 <div className={styles.socialLinks}>
  <div className={styles.iconWrapper}><a href="http://facebook.com/share/16Pv5FoKgd" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></div>
  <div className={styles.iconWrapper}><a href="http://tiktok.com/@local.stvn" target="_blank" rel="noopener noreferrer"><FaTiktok /></a></div>
  <div className={styles.iconWrapper}><a href="http://instagram.com/local.stvn" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></div>
  <div className={styles.iconWrapper}><a href="http://x.com/local_STVN" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a></div>
  <div className={styles.iconWrapper}><a href="https://linkedin.com/company/local-stvn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></div>
  <div className={styles.iconWrapper}><a href="http://youtube.com/@sportstv.network" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></div>
  <div className={styles.iconWrapper}><a href="http://whatsapp.com/channel/0029Vb5dMyPKWEKk0d0yqd0m" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></div>
  <div className={styles.iconWrapper}><a href="http://m.me/cm/AbaKYmed0Fo8fLAl" target="_blank" rel="noopener noreferrer"><FaFacebookMessenger /></a></div>
</div>

      {/* Footer Links */}
      <div className={styles.footerLinks}>
        <a href="/blog" className={styles.footerLink}>Blog</a>
        <a href="/contact" className={styles.footerLink}>Contact info</a>
        <a href="/privacy" className={styles.footerLink}>Privacy policy</a>
      </div>
    </footer>
  );
};

export default Footer;