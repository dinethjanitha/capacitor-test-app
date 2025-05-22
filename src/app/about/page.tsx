

import About from './About';
import Sponsors from './sponsors';
import Expertise from './Expertise';
import SocialZone from './ScialZone';
import ContactSection from './ContactSection';
import styles from './about.module.css';
import NavBarMain from '../Components/NavBarMain';
import Header from './Header';
import Advertisement from '../Components/Advertisment';
import Footer from '../Components/footer';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <NavBarMain/>
      <Header/>
      <Advertisement />
      <About />
      <Sponsors />
      <Expertise />
      <SocialZone />
      <ContactSection />
      <Footer />
    </div>
  );
}
