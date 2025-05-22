'use client';
import React from 'react';
import styles from './first.module.css';
import Image from 'next/image';


const Nav = () => {

  return (
    <nav className={styles.navbar}>

      <div className={styles.overlay}>
       
        <h1>FINAL SHOWDOWN</h1>

        <div className={styles.matchBanner}>
          <div className={styles.slImage}>
            <Image
              src="/R (7) (1).png"
              alt="UOM"
              width={90}
              height={90}
              sizes="(max-width: 768px) 60px, 90px"
            />
            <p>UOM</p>
          </div>
          <div className={styles.vsImg}>
            <Image src="/image_fx__36_-removebg-preview.png" alt="vs" width={100} height={60} />
          </div>
          <div className={styles.team}>
            <Image
              src="/logo-color-300x344 (1).png"
              alt="UOC"
              width={90}
              height={90}
              sizes="(max-width: 768px) 60px, 90px"
            />
            <p>UOC</p>
          </div>
        </div>

<div className={styles.par}>
        <div className={styles.watch}>WATCH</div>
        <div className={styles.live}>LIVE</div>
      </div>

      </div>

    
    </nav>
  );
};

export default function Page() {
  return <Nav />;
}