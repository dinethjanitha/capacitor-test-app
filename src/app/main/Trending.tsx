'use client';
import React from 'react';
import styles from './trending.module.css';
import Image from 'next/image';

interface Team {
  name: string;
  logo: string;
  score: number;
}

interface Match {
  title: string;
  team1: Team;
  team2: Team;
  winner: string;
}

const Trending: React.FC = () => {
  const mostViewedMatches: Match[] = [
    {
      title: 'Super League 2025',
      team1: { name: 'UOC', logo: '/UOC.png', score: 2 },
      team2: { name: 'UOM', logo: '/UOM.png', score: 5 },
      winner: 'UOM',
    },
    {
      title: 'Super League 2025d',
      team1: { name: 'UOM', logo: '/UOM.png', score: 1 },
      team2: { name: 'UOC', logo: '/UOC.png', score: 3 },
      winner: 'UOM',
    },
  ];

  const renderCard = (match: Match, index: number) => (
    <div className={styles.cardContainer} key={index}>
      <h1>{match.title}</h1>
      <div className={styles.inside}>
        <div className={styles.text1}>{match.team1.name}</div>
        <Image width={500} height={500} src={match.team1.logo} alt={`${match.team1.name} logo`} className={styles.team1Logo} />
        <div className={styles.text2}>{match.team1.score}:{match.team2.score}</div>
        <Image width={500} height={500} src={match.team2.logo} alt={`${match.team2.name} logo`} className={styles.team2Logo} />
        <div className={styles.text3}>{match.team2.name}</div>
        <div className={styles.wonSection}>
          <h1>{match.winner} won the match</h1>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.trendingContainer}>
      <div className={styles.topSection}>
        <h1>TRENDING EVENTS</h1>
      </div>

      <div className={styles.rowWrapperContainer}>
        {/* MOST VIEWED */}
        <div className={styles.rowWrapper}>
          <div className={styles.customBackground}>
            <div className={styles.mostSection}>
              <h1>MOST VIEWED</h1>
            </div>
            <div className={styles.rowContainer}>
              {mostViewedMatches.map(renderCard)}
            </div>
          </div>
        </div>

        {/* MOST SUBSCRIBED */}
        <div className={styles.rowWrapper}>
          <div className={styles.customBackground}>
            <div className={styles.mostSection}>
              <h1>MOST SUBSCRIBED</h1>
            </div>
            <div className={styles.rowContainer}>
              {mostViewedMatches.map(renderCard)}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.advertisementContainer}>
        <h1>ADVERTISEMENT</h1>
      </div>
    </div>
  );
};

export default Trending;
