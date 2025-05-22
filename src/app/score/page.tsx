// app/about/page.tsx
import Advertisement from '../Components/Advertisment';
import CategoryBar from './CategoryBar';
import TodayMatches from './TodayMatches';
import  styles  from './score.module.css';
import Standings from './Standings';
import UpcomingTournaments from './UpcomingTournaments';
import NavBarMain from '../Components/NavBarMain';

import Header from './Header';
import Footer from '../Components/footer';


export default function AboutPage() {
  return (
    <div className={styles.container}>
      <NavBarMain/>
      <Header/>
      <CategoryBar /> 
      <Advertisement />
      <TodayMatches />
      <Advertisement />
      <Standings/>
      <Advertisement />
      <UpcomingTournaments />
      <Footer />
    </div>
  );
}
