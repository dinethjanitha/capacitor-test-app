"use client";
import Image from "next/image";
import styles from "./sport.module.css";
import { Anta, Zen_Dots } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

const zenfont = Zen_Dots({ subsets: ["latin"], weight: "400" });
const antafont = Anta({ subsets: ["latin"], weight: "400" });

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

interface Props {
  matches: Match[];
}

const MatchSections: React.FC<Props> = ({ matches }) => {
  const [upComingMatches, setUpcomingMatches] = useState<Match[] | null>(null);
  const [previousMatches, setPreviousMatches] = useState<Match[] | null>(null);

  useEffect(() => {
    setUpcomingMatches(
      matches.filter((match: Match) => match.status != "previous")
    );
    setPreviousMatches(
      matches.filter((match: Match) => match.status != "upcoming")
    );
  }, [matches]);

  return (
    <div className={styles.matchSections}>
      <div className={styles.previousGames}>
        <h2 className={`${styles.h} ${zenfont.className}`}>PREVIOUS </h2>
        <h2 className={`${styles.h} ${zenfont.className}`}> GAMES</h2>
        <div className={styles.cardGrid2}>
          {previousMatches == null || previousMatches.length == 0 ? (
            <div>Matches Not found!</div>
          ) : (
            previousMatches.map((match) => (
              <div key={match._id} className={styles.matchCard2}>
                <p className={`${styles.title2} ${zenfont.className}`}>
                  {match.matchName}
                </p>
                <div className={styles.teams2}>
                  <div className={`${styles.team2} ${styles.reverseTeam}`}>
                    <p className={antafont.className}>
                      {match.teamOneName || "UOM"}
                    </p>
                    <Image src="/uoc.png" alt="UOC" width={75} height={75} />
                  </div>
                  <div className={`${styles.vs2} ${zenfont.className}`}>
                    {" "}
                    {match.teamOneScore || 0}:{match.teamTwoScore || 0}
                  </div>
                  <div className={`${styles.team2} ${styles.alignRight}`}>
                    <Image src="/uom.png" alt="UOM" width={75} height={75} />
                    <p className={antafont.className}>
                      {match.teamTwoName || "UOC"}
                    </p>
                  </div>
                </div>
                <div className={styles.prevGbtn}>
                  <button className={styles.watchButton2}>
                    {match.teamOneScore > match.teamTwoScore ? (
                      <>Team {match.teamOneName} Won</>
                    ) : match.teamOneScore == match.teamTwoScore ? (
                      <>Match Draw</>
                    ) : (
                      <>Team {match.teamTwoName} Won</>
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className={styles.upcomingMatches}>
        <h2 className={`${styles.h} ${zenfont.className}`}>UP-COMINGS</h2>
        <div className={styles.cardWrapper3}>
          {upComingMatches != null && upComingMatches.length != 0 ? (
            upComingMatches.map((match) =>
              match.streamId != null ? (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  key={match._id}
                  href={`https://add-streamfront-tau.vercel.app/stream/${match.streamId}`}
                >
                  <div className={styles.card}>
                    <div className={styles.leftTriangle}></div>
                    <div className={styles.rightTriangle}></div>
                    <div className={styles.cardContent}>
                      <h2 className={`${styles.title} ${zenfont.className}`}>
                        {match.matchName}
                      </h2>
                      <div className={styles.teams}>
                        <div
                          className={`${styles.team2} ${styles.reverseTeam1}`}
                        >
                          <Image
                            src="/uoc.png"
                            alt="UOC"
                            width={75}
                            height={75}
                          />
                          <p className={antafont.className}>
                            {match.teamOneName}
                          </p>
                        </div>
                        <div
                          className={`${styles.vsText} ${zenfont.className}`}
                        >
                          VS
                        </div>
                        <div
                          className={`${styles.team2} ${styles.alignRight1}`}
                        >
                          <p className={antafont.className}>
                            {match.teamTwoName}
                          </p>
                          <Image
                            src="/uom.png"
                            alt="UOM"
                            width={75}
                            height={75}
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles.dateTime} ${antafont.className}`}
                      >
                        <p>{new Date(match.startDate).toDateString()}</p>
                        <p>
                          {new Date(match.startDate)
                            .toTimeString()
                            .substring(0, 8)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div key={match._id} className={styles.card}>
                  <div className={styles.leftTriangle}></div>
                  <div className={styles.rightTriangle}></div>
                  <div className={styles.cardContent}>
                    <h2 className={`${styles.title} ${zenfont.className}`}>
                      {match.matchName}
                    </h2>
                    <div className={styles.teams}>
                      <div className={`${styles.team2} ${styles.reverseTeam1}`}>
                        <Image
                          src="/uoc.png"
                          alt="UOC"
                          width={75}
                          height={75}
                        />
                        <p className={antafont.className}>
                          {match.teamOneName}
                        </p>
                      </div>
                      <div className={`${styles.vsText} ${zenfont.className}`}>
                        VS
                      </div>
                      <div className={`${styles.team2} ${styles.alignRight1}`}>
                        <p className={antafont.className}>
                          {match.teamTwoName}
                        </p>
                        <Image
                          src="/uom.png"
                          alt="UOM"
                          width={75}
                          height={75}
                        />
                      </div>
                    </div>
                    <div className={`${styles.dateTime} ${antafont.className}`}>
                      <p>{new Date(match.startDate).toDateString()}</p>
                      <p>
                        {new Date(match.startDate)
                          .toTimeString()
                          .substring(0, 8)}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <div>Matches not found!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchSections;
