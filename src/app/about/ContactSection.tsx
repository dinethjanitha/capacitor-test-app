import styles from './about.module.css';
import { Zen_Dots, Annapurna_SIL } from 'next/font/google';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const zenfont = Zen_Dots({ subsets: ['latin'], weight: '400' });
const annapurna = Annapurna_SIL({ subsets: ['latin'], weight: '400' });

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactInfo}>
        <h2 className={`${styles.subHeading} ${zenfont.className}`}>CONTACT-US</h2>
        <p className={`${styles.contactLine} ${annapurna.className}`}><FaMapMarkerAlt className={styles.icon1} /> 123 Galle Road, Colombo 03</p>
        <p className={`${styles.contactLine} ${annapurna.className}`}><FaEnvelope className={styles.icon1} /> contact@sportstvnetwork.lk</p>
        <p className={`${styles.contactLine} ${annapurna.className}`}><FaPhoneAlt className={styles.icon1} /> +94 11 234 5678 / +94 77 123 4567</p>
      </div>
      <div className={styles.contactRight}>
        <form className={styles.contactForm}>
          <h2 className={`${styles.subHeading} ${zenfont.className}`}>GET-IN-TOUCH</h2>
          <div className={styles.inputRow}>
            <label className={`${styles.label} ${annapurna.className}`}>Full name</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.inputRow}>
            <label className={`${styles.label} ${annapurna.className}`}>Email</label>
            <input type="email" className={styles.input} />
          </div>
          <div className={styles.inputRow}>
            <label className={`${styles.label} ${annapurna.className}`}>Select</label>
            <select className={`${styles.input} ${annapurna.className}`}>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className={`${styles.label1} ${annapurna.className}`}>Message</label>
            <textarea className={styles.textarea1}></textarea>
          </div>
          <div className={styles.buttonWrapper}>
            <button type="submit" className={`${styles.button} ${annapurna.className}`}>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
