"use clinet";
import Image from "next/image";
import styles from "./sport.module.css";
import { Zen_Dots } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

const zenfont = Zen_Dots({ subsets: ["latin"], weight: "400" });

interface Match {
  _id: string;
  matchName: string;
  startDate: string;
  endDate: string;
  status: "previous" | "upcoming" | "highlights" | "roundup" | "live";
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

interface Props {
  matches: Match[];
}

const LiveMatchSection: React.FC<Props> = ({ matches }) => {
  const [filterMatch, setFilterMatch] = useState<Match[] | null>(null);
  const [isActive, setIsActive] = useState<string | null>(null);
  useEffect(() => {
    setFilterMatch(matches.filter((match) => match.status == "live"));
  }, [matches]);

  return (
    <div className={styles.filter}>
      <div className={`${styles.filterBar} ${zenfont.className}`}>
        <button
          name="click1"
          className={`${styles.filterButton}
           ${(isActive == null || isActive == "live") && styles.live1}`}
          onClick={() => {
            setFilterMatch(matches.filter((match) => match.status == "live"));
            setIsActive("live");
          }}
        >
          LIVE
        </button>
        <button
          name="click2"
          className={`${styles.filterButton} ${
            isActive == "highlights" && styles.live1
          }`}
          onClick={() => {
            setFilterMatch(
              matches.filter((match) => match.status == "highlights")
            );
            setIsActive("highlights");
          }}
        >
          Highlights
        </button>
        <button
          name="click3`"
          className={`${styles.filterButton} ${
            isActive == "upcoming" && styles.live1
          }`}
          onClick={() => {
            setFilterMatch(
              matches.filter((match) => match.status == "upcoming")
            );
            setIsActive("upcoming");
          }}
        >
          Up Comings
        </button>
        <button
          name="click4`"
          className={`${styles.filterButton} ${
            isActive == "roundup" && styles.live1
          }`}
          onClick={() => {
            setFilterMatch(
              matches.filter((match) => match.status == "previous")
            );
            setIsActive("roundup");
          }}
        >
          Round Up
        </button>
      </div>

      <div className={styles.cardGrid1}>
        {filterMatch == null || filterMatch.length == 0 ? (
          <div>&quot;Matches not found&quot;</div>
        ) : (
          filterMatch.map((match, index) =>
            match.streamId != null ? (
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                key={match._id}
                href={`http://localhost:3005/stream/${match.streamId}`}
              >
                <div
                  className={`${styles.matchCard1} ${styles.cardAnimation}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <p className={`${styles.title1} ${zenfont.className}`}>
                    {match.matchName}
                  </p>
                  <div className={styles.teams1}>
                    <div className={styles.team1}>
                      <Image src="/uoc.png" alt="UOC" width={75} height={75} />
                      <p className={styles.topic}>UOC</p>
                    </div>
                    <div className={`${styles.vs1} ${zenfont.className}`}>
                      VS
                    </div>
                    <div className={styles.team1}>
                      <Image src="/uom.png" alt="UOM" width={75} height={75} />
                      <p className={styles.topic}>UOM</p>
                    </div>
                  </div>
                  <div className={styles.btnwatchnow}>
                    <button
                      className={`${styles.watchButton1} ${zenfont.className}`}
                    >
                      {match.status.toLocaleUpperCase()}
                    </button>
                  </div>
                </div>
              </Link>
            ) : (
              <div
                key={match._id}
                className={`${styles.matchCard1} ${styles.cardAnimation}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <p className={`${styles.title1} ${zenfont.className}`}>
                  {match.matchName}
                </p>
                <div className={styles.teams1}>
                  <div className={styles.team1}>
                    <Image src="/uoc.png" alt="UOC" width={75} height={75} />
                    <p className={styles.topic}>UOC</p>
                  </div>
                  <div className={`${styles.vs1} ${zenfont.className}`}>VS</div>
                  <div className={styles.team1}>
                    <Image src="/uom.png" alt="UOM" width={75} height={75} />
                    <p className={styles.topic}>UOM</p>
                  </div>
                </div>
                <div className={styles.btnwatchnow}>
                  <button
                    className={`${styles.watchButton1} ${zenfont.className}`}
                  >
                    {match.status.toLocaleUpperCase()}
                  </button>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};
export default LiveMatchSection;
