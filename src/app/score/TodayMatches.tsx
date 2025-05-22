"use client"
import React, { useEffect, useState } from 'react';
import styles from './score.module.css';
import Image from 'next/image';
import axios from 'axios';
import { Zen_Dots } from 'next/font/google';

const zenfont = Zen_Dots({ subsets: ['latin'], weight: '400' });

interface Match {
  _id: string;
  matchName: string;
  startDate: string;
  endDate: string;
  status: "previous" | "upcoming";
  streamId: string;
  teamOneImage: string;
  teamOneMembers: Array<{
    name: string;
    role: string;
    isCaptain: boolean;
    age: number;
    _id: string;
  }>;
  teamOneScore: string;
  teamTwoImage: string;
  teamTwoMembers: Array<{
    name: string;
    role: string;
    isCaptain: boolean;
    age: number;
    _id: string;
  }>;
  teamTwoScore: string;
  teamOneName: string;
  teamTwoName: string;
}

const MatchCard = () => {

   const [previousMatches, setPreviousMatches] = useState<Match[] | null>(null);

  const fetchUpCommingStreams = async () => {
    try {
      const response = await axios.get(
        'https://addstream-production.up.railway.app/api/v1/match'
      );
      
     setPreviousMatches(
      response.data.data.matches.filter((match: Match) => match.status != "previous")
    );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUpCommingStreams();
  }, []);


  return (
    <div className={styles.wrapper1}>
      <div className={styles.heading1}> <h2 className={` ${styles.heading} ${zenfont.className}`}>TODAY MATCHES</h2></div>
      {previousMatches && previousMatches.map((match) => (
        <div key={match._id} className={styles.card}>
          <div className={styles.team}>
            <div className={styles.leftTeam}></div>
            <div className={styles.image1}><Image width={200} height={200}  src="/UOC.png" alt="Team 1" /></div>
          </div>
          <div className={styles.scoreSection}>
            <p className={` ${styles.league} ${zenfont.className}`}>{match.matchName}</p>
            <p className={` ${styles.score} ${zenfont.className}`}>{match.teamOneScore} : {match.teamTwoScore}</p>
           
            {match.teamOneScore > match.teamTwoScore ? ( <p className={`${styles.result}  ${zenfont.className}`}><span>{match.teamOneName}</span> won the match</p>) : (
              match.teamOneScore == match.teamTwoScore ? ("Match Draw") : (<p className={`${styles.result}  ${zenfont.className}`}><span>{match.teamTwoScore}</span> won the match</p>)
            )}
          </div>
          <div className={styles.team}>
            <div className={styles.rightTeam}></div>
            <div className={styles.image2}><Image width={200} height={200} src="/UOM.png" alt="Team 2" /></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchCard;