import React from 'react';
import styles from './about.module.css';
import { FaFacebookF, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';


const About: React.FC = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.headerSection}>
        <h1>About Us</h1>
      </div>
      
      <div className={styles.contentSection}>
        <div className={styles.imageContainer}>
          <img
            src="./image_fx__28_-removebg-preview.png"
            alt="Basketball player spinning basketball"
            className={styles.basketballImage}
          />
        </div>
        
        <div className={styles.descriptionContainer}>
          <p>
            Your premier destination for local sports
            coverage. We are passionate about bringing
            communities together through the power of
            sport, delivering unparalleled coverage and
            entertainment to fans of all backgrounds.
          </p>
        </div>
      </div>
      
     <div className={styles.socialIcons}>
  <a
    href="http://facebook.com/share/16Pv5FoKgd"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.socialIcon1}
  >
    <FaFacebookF />
  </a>

  <a
    href="http://x.com/local_STVN"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.socialIcon1}
  >
    <FaXTwitter />
  </a>

  <a
    href="http://whatsapp.com/channel/0029Vb5dMyPKWEKk0d0yqd0m"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.socialIcon1}
  >
    <FaWhatsapp />
  </a>
</div>

    </div>
  );
};

export default About;