'use client';

import { Anta, Zen_Dots } from 'next/font/google';
import styles from './score.module.css';
import Image from 'next/image';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const zenfont = Zen_Dots({ subsets: ['latin'], weight: '400' });
const antafont = Anta({ subsets: ['latin'], weight: '400' });

export default function UpcomingTournaments() {
  return (
    <div className={styles.UpcomingTournamentsU}>
      <div className={styles.containerU}>
        <h1 className={`${styles.titleU} ${zenfont.className}`}>UP COMING TOURNAMENT</h1>
        <p className={` ${styles.subtitleU} ${antafont.className}`}>Mark your calendars.</p>

        {[1, 2].map((_, i) => (
          <div key={i} className={styles.cardU}>
            <div className={styles.cardImageWrapperU}>
              <Image
                src="/Vector 11.png"
                alt="tournament"
                layout="fill"
                objectFit="cover"
                className={styles.cardImageU}
              />
              <div className={styles.overlayU}></div>
              <div className={styles.cardContentU}>
                <h2 className={antafont.className}>Turbo League 2025</h2>
                <div className={styles.infoRowU}>
                  <div className={styles.infoU}>
                    <FaCalendarAlt style={{ marginRight: '6px' }} />
                    <span className={antafont.className}>June 20, 2025</span>
                  </div>
                  <div className={styles.infoU}>
                    <FaClock style={{ marginRight: '6px' }} />
                    <span className={antafont.className}>21:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}