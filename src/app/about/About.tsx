import styles from './about.module.css';
import { Zen_Dots, Actor } from 'next/font/google';
import Image from 'next/image';

const zenfont = Zen_Dots({ subsets: ['latin'], weight: '400' });
const actorfont = Actor({ subsets: ['latin'], weight: '400' });

export default function About() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.heading}>
          <h1 className={zenfont.className}>ABOUT US</h1>
        </div>
        <div className={styles.aboutimage}>
          <Image src="/image_fx__22_-removebg-preview.png" width={200} height={200} alt="about" />
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={`${styles.title} ${zenfont.className}`}>SPORTS-TV.NETWORK</div>
        <div className={styles.divider1}></div>
        <div className={`${styles.description} ${actorfont.className}`}>
          Your premier destination for local sports coverage. We are passionate about bringing communities together through the power of sport...
        </div>
      </section>
    </>
  );
}
