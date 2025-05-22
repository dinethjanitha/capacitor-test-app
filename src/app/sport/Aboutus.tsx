// components/AboutUs.tsx
import { Zen_Dots } from 'next/font/google';
import styles from './sport.module.css';
import { FaFacebookF } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdPhoneAndroid } from 'react-icons/md'; // Import icons
import Image from 'next/image';

const zenfont = Zen_Dots({ subsets: ['latin'], weight: '400' });


export default function AboutUs() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.header} ${zenfont.className}`}>ABOUT US</div>
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <Image width={500} height={500} src="/image_fx__28_-removebg-preview.png" alt="Player" className={styles.playerImage} />
        </div>
        <div className={styles.textCard}>
          <p >
            your premier destination for local sports coverage.
            we are passionate about dinging communities together through the power of 
            sport, delivering unparalleled coverage and enrertainment to fans of all backgrounds .
            
          </p>
        </div>
      </div>
      <div className={styles.icons}>
        <div ><Image width={200} height={200} src="/Rectangle 6.png" alt="Player" className={styles.playerImage1} /></div>
        <div className={styles.icon}><FaFacebookF /></div>
  <div className={styles.icon}><IoMdClose /></div>
  <div className={styles.icon}><MdPhoneAndroid /></div>
      </div>
    </div>
  );
}
