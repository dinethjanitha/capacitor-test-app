import Image from 'next/image';
import React from 'react';

interface TournamentMatch {
  id: number;
  matchType: string;
  date: string;
  time: string;
  venue: string;
  team1Avatar?: string;
  team2Avatar?: string;
}

const tournamentMatches: TournamentMatch[] = [
  {
    id: 1,
    matchType: '1st Match',
    date: 'May 11, 2025',
    time: '03:45 Pm',
    venue: 'Havelock Park'
  },
  {
    id: 2,
    matchType: '1st Match',
    date: 'May 11, 2025',
    time: '03:45 Pm',
    venue: 'Havelock Park'
  },
  {
    id: 3,
    matchType: '1st Match',
    date: 'May 11, 2025',
    time: '03:45 Pm',
    venue: 'Havelock Park'
  },
  {
    id: 4,
    matchType: '1st Match',
    date: 'May 11, 2025',
    time: '03:45 Pm',
    venue: 'Havelock Park'
  },
  {
    id: 5,
    matchType: '1st Match',
    date: 'May 11, 2025',
    time: '03:45 Pm',
    venue: 'Havelock Park'
  },
  {
    id: 6,
    matchType: '1st Match',
    date: 'May 11, 2025',
    time: '03:45 Pm',
    venue: 'Havelock Park'
  }
];

const Tournament: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#000000',
    minHeight: '100vh'
  };

  const matchCardStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    height: '90px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    borderRadius: '90px',
    overflow: 'hidden',
    border: '2px solid #FF4202',
  };

  const leftSectionStyle: React.CSSProperties = {
    width: '120px',
    minWidth: '80px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#FF4202',
    borderRadius: '40px 0 0 40px',
    position: 'relative',
    clipPath: 'polygon(0 0, 100% 0, calc(100% - 20px) 50%, 100% 100%, 0 100%)'
  };

  const centerSectionStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    height: '100%',
    background: 'black',
    position: 'relative',
    zIndex: 1,
    flexWrap: 'wrap',
    gap: '10px'
  };

  const matchTypeStyle: React.CSSProperties = {
    color: '#ff6b35',
    fontSize: 'clamp(12px, 2vw, 16px)',
    fontWeight: 'bold',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
    whiteSpace: 'nowrap'
  };

  const textStyle: React.CSSProperties = {
    color: '#ffffff',
    fontSize: 'clamp(12px, 2vw, 16px)',
    fontWeight: '500',
    whiteSpace: 'nowrap'
  };

  const rightSectionStyle: React.CSSProperties = {
    width: '120px',
    minWidth: '80px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#FF4202',
    borderRadius: '0 40px 40px 0',
    position: 'relative',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 20px 50%)'
  };

  const teamAvatarsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  };

  const avatarStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '2px solid #ffffff',
    objectFit: 'cover' as const
  };

  const logoStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    objectFit: 'contain'
  };

  const getResponsiveStyles = () => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;

    if (width <= 480) {
      return {
        matchCard: {
          ...matchCardStyle,
          height: '70px',
          borderRadius: '70px',
          flexDirection: 'row' as const,
        },
        leftSection: {
          ...leftSectionStyle,
          width: '60px',
          minWidth: '60px',
        },
        rightSection: {
          ...rightSectionStyle,
          width: '60px',
          minWidth: '60px',
        },
        centerSection: {
          ...centerSectionStyle,
          padding: '0 10px',
          gap: '5px',
        },
        container: {
          ...containerStyle,
          padding: '10px',
          gap: '15px',
        }
      };
    } else if (width <= 768) {
      return {
        matchCard: {
          ...matchCardStyle,
          height: '80px',
          borderRadius: '80px',
        },
        leftSection: {
          ...leftSectionStyle,
          width: '90px',
          minWidth: '70px',
        },
        rightSection: {
          ...rightSectionStyle,
          width: '90px',
          minWidth: '70px',
        },
        centerSection: {
          ...centerSectionStyle,
          padding: '0 15px',
          gap: '8px',
        },
        container: {
          ...containerStyle,
          padding: '15px',
          gap: '18px',
        }
      };
    } else {
      return {
        matchCard: matchCardStyle,
        leftSection: leftSectionStyle,
        rightSection: rightSectionStyle,
        centerSection: centerSectionStyle,
        container: containerStyle,
      };
    }
  };

  const [responsiveStyles, setResponsiveStyles] = React.useState(getResponsiveStyles());

  React.useEffect(() => {
    const handleResize = () => {
      setResponsiveStyles(getResponsiveStyles());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={responsiveStyles.container}>
 <h1 style={{
  textAlign: 'center',
  color: '#FF4202',
  fontSize: 'clamp(24px, 5vw, 40px)',
  fontWeight: 'bold',
  marginBottom: '10px',
  marginTop: '30px',
  textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
  fontFamily: '"Zen Dots", sans-serif',
   letterSpacing: '0.25em'}}>
  TOURNAMENT SHEDULE
</h1>


  {tournamentMatches.map((match) => (

        <div key={match.id} style={responsiveStyles.matchCard}>
          {/* Left Section */}
          <div style={responsiveStyles.leftSection}>
            <Image width={500} height={500} src="/Artboard-2 1.PNG" alt="Artboard" style={logoStyle} />
          </div>

          {/* Center Section */}
    <div style={{ ...responsiveStyles.centerSection, flexDirection: 'column', padding: 0, gap: 0 }}>
  <div style={{ 
    display: 'flex', 
    width: '100%', 
    justifyContent: 'space-between', 
    flexWrap: 'wrap', 
    gap: '0px',
    fontFamily: '"Zen Dots", sans-serif',
    marginTop: '30px'  // Remove space below
  }}>
    <span style={matchTypeStyle}>{match.matchType}</span>
    <span style={textStyle}>{match.date}</span>
    <span style={textStyle}>{match.time}</span>
    <span style={textStyle}>{match.venue}</span>

    {match.team1Avatar && match.team2Avatar && (
      <div style={teamAvatarsStyle}>
        <Image width={500} height={500} src={match.team1Avatar} alt="Team 1" style={avatarStyle} />
        <Image width={500} height={500} src={match.team2Avatar} alt="Team 2" style={avatarStyle} />
      </div>
    )}
  </div>

  {/* Green Line */}
<div style={{
  height: '3px',
  width: '80%',
  borderRadius: '2px',
  marginBottom: '29px',
  backgroundImage: 'linear-gradient(to right, black, #FF4202, #FF4202, black)',
  filter: 'blur(2px)'
}} />

</div>

          {/* Right Section */}
          <div style={responsiveStyles.rightSection}>
            <Image width={500} height={500} src="/Isipathana_College_logo 1.png" alt="Isipathana" style={logoStyle} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tournament;
