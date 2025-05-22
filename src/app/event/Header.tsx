'use client';
import React from 'react';
import styles from './nav.module.css';
import Image from 'next/image';

const Header: React.FC = () => {
 
  return (
    <nav className={styles.navbar}>
      <div className={styles.overlay}>
        <h2>
          ICC MEN&apos;S T20<br />
          WORLD CUP
        </h2>
        <h1>FINAL SHOWDOWN</h1>

        <div className={styles.matchBanner}>
          <div className={styles.slImage}>
            <Image
              src="/Sri_Lanka_National_Cricket_Team-removebg-preview (1).png"
              alt="UOM"
              width={90}
              height={90}
            />
            <p>SL</p>
          </div>
          <div className={styles.vsImg}>
            <Image src="/image_fx__36_-removebg-preview (1).png" alt="vs" width={100} height={60} />
          </div>
          <div className={styles.team}>
            <Image src="/India-Cricket-Team-Logo-Vector.png" alt="UOC" width={90} height={90} />
            <p>INDIA</p>
          </div>
        </div>
      </div>

      <div className={styles.containerA}></div>
    </nav>
  );
};

export default Header;