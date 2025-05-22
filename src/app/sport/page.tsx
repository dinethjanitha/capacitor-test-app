// app/about/page.tsx
"use client"
import LiveMatchSection from './LiveMachesSection';
import MatchSections from './MatchSection';
import WeeklyRoundup from './WeeklyRoundup';
import AboutUs from './Aboutus';
import WeeklyHighLight from './WeeklyHighLight';
import  styles  from './sport.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LoadingEffect from '../Components/LoadingEffect';
import NavBarMain from '../Components/NavBarMain';
import Header from './Header';
import Advertisement from '../Components/Advertisment';
import Footer from '../Components/footer';


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
  teamOneName : string;
  teamTwoName : string;
}

export default function AboutPage() {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [matches, setMatches] = useState<Match[] | null>(null);
    

   const fetchMatches = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://addstream-production.up.railway.app/api/v1/match/");
      console.log();
      setMatches(response.data.data.matches)
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false)
      setError(true);
      console.log(error);
    }
  };


  console.log(error);

  useEffect(() => {
    fetchMatches();
  }, []);


  return (
    <div>
      {isLoading ? (<h2><LoadingEffect/></h2>) : (
        <div className={styles.container}>
          <NavBarMain/>
          <Header />
          <Advertisement />
          {/* <LiveMatchSection /> */}
          {
            matches != null ? (<LiveMatchSection matches={matches} />) : (<div>Error</div>)
          }
          <Advertisement />
          {
            matches != null ? (<MatchSections matches={matches} />) : (<div>Error</div>)
          }
          <Advertisement />
          <WeeklyRoundup imageSrc="/image_fx (48).png" />
          <WeeklyHighLight imageSrc="/image_fx (13).png" />
          <Advertisement />
          <AboutUs />
          <Footer />
        </div>     
      )}

{/* //test */}

    </div>
  );
}