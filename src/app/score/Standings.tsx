"use client";

import React, { useState } from 'react';
import styles from './score.module.css';
import { FaChevronDown } from 'react-icons/fa';
import { Anta, Zen_Dots } from 'next/font/google';

const zenfont = Zen_Dots({ subsets: ['latin'], weight: '400' });
const antafont = Anta({ subsets: ['latin'], weight: '400' });

const Standing = () => {
  const [expandedView, setExpandedView] = useState(false);

  const standingsData = [
 

    {
      id: 3,
      team: "University Of Colombo",
      played: 34,
      forAgainst: "70:40",
      goalDiff: 30,
      points: 75,
      won: 3,
      drawn: 4,
      lost: 8,
      form: ["W", "W", "W", "L", "W"]
    },
    {
      id: 4,
      team: "University Of Colombo",
      played: 34,
      forAgainst: "70:40",
      goalDiff: 30,
      points: 75,
      won: 3,
      drawn: 4,
      lost: 8,
      form: ["W", "W", "W", "L", "W"]
    },
    {
      id: 5,
      team: "University Of Colombo",
      played: 34,
      forAgainst: "70:40",
      goalDiff: 30,
      points: 75,
      won: 3,
      drawn: 4,
      lost: 8,
      form: ["W", "W", "W", "L", "W"]
    },
    {
      id: 1,
      team: "University Of Colombo",
      played: 34,
      forAgainst: "70:40",
      goalDiff: 30,
      points: 75,
      won: 3,
      drawn: 4,
      lost: 8,
      form: ["W", "W", "W", "L", "W"]
    },
    {
      id: 2,
      team: "University Of Colombo",
      played: 34,
      forAgainst: "70:40",
      goalDiff: 30,
      points: 75,
      won: 3,
      drawn: 4,
      lost: 8,
      form: ["W", "W", "W", "L", "W"]
    }
  ];

  const toggleView = () => {
    setExpandedView(!expandedView);
  };

  const renderFormStatus = (status: string) => {
    let className = "";
    if (status === "W") className = styles.formWin;
    else if (status === "D") className = styles.formDraw;
    else if (status === "L") className = styles.formLoss;

    return <div className={`${styles.formCircle} ${className}`}>{status}</div>;
  };

  return (
    <div className={styles.standingsContainer}>
      <div className={styles.standingsHeader}>
        <h1 className={zenfont.className}>STANDING</h1>
      </div>

      <div className={styles.leagueTitle}>
        <h2 className={zenfont.className}>Super League 2025</h2>
        <button className={styles.dropdownBtn} onClick={toggleView} title="Toggle View">
          <FaChevronDown />
        </button>
      </div>

      <div className={styles.tableContainerDesktop}>
        <div className={` ${styles.tableHeader} ${zenfont.className}`}>
          <div className={styles.colTeam}></div>
          <div className={styles.colStat}>P</div>
          <div className={styles.colStat}>F:A</div>
          <div className={styles.colStat}>+/-</div>
          <div className={styles.colStat}>PTS</div>
          <div className={styles.colWdl}>
            <div className={styles.wdlItem}>W</div>
            <div className={styles.wdlItem}>D</div>
            <div className={styles.wdlItem}>L</div>
          </div>
          <div className={styles.colForm}>FORM</div>
        </div>

        {standingsData.map((team) => (
          <div key={team.id} className={`${styles.tableRow} ${antafont.className}`}>
            <div className={styles.colTeam1}>
              <div className={styles.teamLogo}>
                <img src={'UOM.png'} alt='team logo' className={styles.logo} />
              </div>
              <div className={styles.teamName}>{team.team}</div>
            </div>
            <div className={styles.colStat}>{team.played}</div>
            <div className={styles.colStat}>{team.forAgainst}</div>
            <div className={styles.colStat}>{team.goalDiff}</div>
            <div className={styles.colStat}>{team.points}</div>
            <div className={styles.colWdl}>
              <div className={`${styles.wdlItem} ${styles.wdlWin}`}>{team.won}</div>
              <div className={`${styles.wdlItem} ${styles.wdlDraw}`}>{team.drawn}</div>
              <div className={`${styles.wdlItem} ${styles.wdlLoss}`}>{team.lost}</div>
            </div>
            <div className={styles.colForm}>
              {team.form.map((status, index) => (
                <React.Fragment key={index}>
                  {renderFormStatus(status)}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Standing;