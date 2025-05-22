'use client';
import React, { useEffect } from 'react';
import MuxPlayer from '@mux/mux-player-react';
import Image from 'next/image';
import styles from './video.module.css';

const Video = () => {
  useEffect(() => {
    const enableAudio = () => {
      const player = document.querySelector('mux-player') as HTMLVideoElement;
      if (player) {
        player.muted = false;
        player.play().catch((err) => console.error('Playback failed:', err));
      }
    };

    window.addEventListener('click', enableAudio, { once: true });
    window.addEventListener('keydown', enableAudio, { once: true });

    return () => {
      window.removeEventListener('click', enableAudio);
      window.removeEventListener('keydown', enableAudio);
    };
  }, []);

  return (
    <>
       <div className={styles.videoContainer}>
      <div className={styles.videoWrapper}>
        <MuxPlayer
          playbackId="AIrSJ101oR300hSvCi857RPHtyORvOhS00Fm02WZa9a8Oy00"
          metadata={{
            video_title: 'eventVideo',
            viewer_user_id: 'user123',
          }}
          streamType="on-demand"
          autoPlay
          loop
          muted
          className={styles.customVideo}
        />
      </div>
    </div>

      <div className={styles.championshipContainer}>
        <div className={styles.championshipWrapper}>
          <div className={styles.championshipBox}>
            <h1 className={styles.championshipTitle}>Football Championship</h1>
            <div className={styles.eventDetails}>
              <ul>
                <li>Date: July 15, 2025</li>
                <li>Location: Stadium XYZ</li>
                <li>Teams: Team A vs Team B</li>
              </ul>
            </div>
          </div>

          <div className={styles.cup}>
            <Image
              src="/image_fx__61preview 1.png" 
              alt="cup"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;