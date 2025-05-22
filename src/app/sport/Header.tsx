// components/Navbar.tsx
'use client';
import Image from 'next/image';
import styles from './sport.module.css';
import { ADLaM_Display, Actor } from 'next/font/google';


const adlam = ADLaM_Display({ subsets: ['latin'], weight: '400' });
const actor = Actor({ subsets: ['latin'], weight: '400' });

export default function Header() {
  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.overlay} mt-25`}>
        <p className={adlam.className}>SUPER LEAGUE 2025</p>
        <div className={styles.matchBannerN}>
          <div className={styles.slImage}>
            <Image src="/UOC.png" alt="UOC" width={80} height={70} />
            <p className={actor.className}>UOM</p>
          </div>
          <div className={styles.vs}>
            <Image width={200} height={200} src="/image_fx__36_-removebg-preview.png" alt="VS" />
          </div>
          <div className={styles.team}>
            <Image src="/UOM.png" alt="UOM" width={60} height={60} />
            <p className={actor.className}>UOC</p>
          </div>
        </div>
        <div className={styles.liveMatch}>
          <div className={styles.matchDetails}><span className={styles.time}>WATCH</span></div>
          <button className={styles.live}>LIVE</button>
        </div>
      </div>
    </div>
  );
}