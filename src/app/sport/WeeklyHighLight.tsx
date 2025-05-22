// components/WeeklyRoundup.tsx
import { Zen_Dots } from 'next/font/google';
import styles from './sport.module.css';
import { MdFullscreen } from 'react-icons/md'; // Material Design වලින් Fullscreen icon එක
import { MdShare } from 'react-icons/md';
import Image from 'next/image';


// const antafont = Anta({ subsets: ['latin'], weight: '400' });
const zenfont = Zen_Dots({ subsets: ['latin'], weight: '400' });
interface Props {
  imageSrc: string;
}

export default function WeeklyRoundup({ imageSrc }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.header} ${zenfont.className}`}>WEEKLY HIGHLIGHTS</div>
      <div className={styles.content}>
        <div className={styles.videoSection}>
          <div className={styles.videoThumbnail}>
            <Image width={200} height={200} src={imageSrc} alt="Super League 2025" className={styles.thumbnailImage} />
            <div className={styles.playButton}>&#9658;</div>
          </div>
          <div className={styles.videoTitle}>
            <p>Super League 2025</p>
            <div className={styles.actions}>
              <MdShare className="icon" />
              <MdFullscreen className="icon" />
            </div>
          </div>

        </div>
        <div className={styles.textSection}>
          <p >
            Football is one of the most popular games played around the world.
            Several football tournaments are held each year and various teams 
            belonging to different nations take part in it enthusiastically. 
             </p>The level of enthusiasm of..<p>
          </p>
        </div>
      </div>
    </div>
  );
}
