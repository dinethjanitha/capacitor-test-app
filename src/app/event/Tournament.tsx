'use client';

import React, { useEffect, useState } from 'react';
import styles from './tournament.module.css';
import axios from 'axios';
import Image from 'next/image';

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
  place : string,
  teamTwoScore: string;
  teamOneName: string;
  teamTwoName: string;
}


const Tournament = () => {
  const [upComingMatches, setUpcomingMatches] = useState<Match[] | null>(null);
  const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
    

  const fetchUpCommingStreams = async () => {
    try {
      const response = await axios.get(
        'https://addstream-production.up.railway.app/api/v1/match'
      );
       setUpcomingMatches(
      response.data.data.matches.filter((match: Match) => match.status === "upcoming")
    );
    
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUpCommingStreams();
  }, []);
  return (
    <div className={styles.tournamentContainer}>
      <div className={styles.tournamentHeader}>
        <h1>TOURNAMENT SCHEDULE</h1>
      </div>

      <div className={styles.scheduleList}>
  {upComingMatches ? upComingMatches.map((match) => (
    <div key={match._id} className={styles.matchCard}>
      {/* Background image */}
      <Image width={"1191"} height={"106"} src="/shedule.png" alt="Schedule" className={styles.scheduleImage} />

      {/* Content over the image */}
      <div className={styles.overlayContent}>
        <div className={styles.teamContainer}>
          <Image
          width={200}
          height={200}
            src={`${IMAGE_BASE_URL}${match.teamOneImage}`}
            alt={`${match.teamOneName} logo`}
            className={styles.logoL}
          />
        </div>

        <div className={styles.matchDetails}>
          <div className={styles.matchNumber}>1</div>
         <div className={styles.matchDate}>{new Date(match.startDate).toLocaleDateString()}</div>
<div className={styles.matchTime}>{new Date(match.startDate).toLocaleTimeString()}</div>

          <div className={styles.matchVenue}>{match.place}</div>
        </div>

        <div className={styles.teamContainer}>
          <Image
          width={200}
          height={200}
            src={`${IMAGE_BASE_URL}${match.teamTwoImage}`}
            alt={`${match.teamTwoName} logo`}
            className={styles.logoR}
          />
        </div>
      </div>
    </div>
  )) : (
    <div>Matches Not founded!</div>
  )}
</div>


    </div>
  );
};

export default Tournament;
