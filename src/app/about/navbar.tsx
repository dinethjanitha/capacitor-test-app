import Link from 'next/link';
import Image from 'next/image';
import { FiPhoneCall } from 'react-icons/fi';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import styles from './about.module.css';
import { Actor, ADLaM_Display, Inter } from 'next/font/google';

const interfont = Inter({ subsets: ['latin'], weight: '400' });
const adlamfont = ADLaM_Display({ subsets: ['latin'], weight: '400' });
const actorfont = Actor({ subsets: ['latin'], weight: '400' });

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <Image src="/LOGO with Silver dude.png"
                  alt="Logo"
                  width={619}
                  height={170} />
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/"><FaHome /><span className={interfont.className}>Home</span></Link></li>
          <li><Link href="/contact"><FiPhoneCall /><span className={interfont.className}>Contact</span></Link></li>
          <li><Link href="/signin"><FaUser /><span className={interfont.className}>Sign In</span></Link></li>
          <li className={styles.searchItem}>
            <input type="text" placeholder="Search" className={styles.searchInput} />
            <FaSearch className={styles.searchIcon} />
          </li>
        </ul>
      </div>

      <div className={styles.overlay}>
        <h1 className={adlamfont.className}>ICC MEN&apos;S T20</h1>
        <h1 className={adlamfont.className}> WORLD CUP</h1>
        <p className={adlamfont.className}>FINAL SHOWDOWN</p>

        <div className={styles.matchBanner}>
          <div className={styles.slImage}>
            <Image
              src="/Sri_Lanka_National_Cricket_Team-removebg-preview.png"
              alt="Sri Lanka"
              width={100}
              height={100}
            />
            <p className={actorfont.className}>SL</p>
          </div>
          <div className={styles.vs}>
            <Image
              src="/image_fx__36_-removebg-preview.png"
              alt="VS"
              width={80}
              height={80}
            />
          </div>
          <div className={styles.team}>
            <Image
              src="/India-Cricket-Team-Logo-Vector.png"
              alt="India"
              width={100}
              height={100}
            />
            <p className={actorfont.className}>IND</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
