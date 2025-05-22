import React, { useState } from 'react';
import styles from './standing.module.css';
import { FaChevronDown } from 'react-icons/fa';

const Standing = () => {
  const [expandedView, setExpandedView] = useState(false);
  
  const standingsData = [
    {
      id: 1,
      team: "University Of Moratuwa",
      played: 34,
      forAgainst: "80:32",
      goalDiff: 48,
      points: 82,
      won: 2,
      drawn: 5,
      lost: 7,
      form: ["W", "W", "W", "L", "W"]
    },
    {
      id: 2,
      team: "University Of Moratuwa",
      played: 34,
      forAgainst: "80:32",
      goalDiff: 48,
      points: 82,
      won: 2,
      drawn: 5,
      lost: 7,
      form: ["W", "W", "W", "L", "W"]
    },
    {
      id: 3,
      team: "University Of Moratuwa",
      played: 34,
      forAgainst: "80:32",
      goalDiff: 48,
      points: 82,
      won: 2,
      drawn: 5,
      lost: 7,
      form: ["W", "W", "W", "L", "W"]
    },
    {
      id: 4,
      team: "University Of Moratuwa",
      played: 34,
      forAgainst: "80:32",
      goalDiff: 48,
      points: 82,
      won: 2,
      drawn: 5,
      lost: 7,
      form: ["W", "W", "W", "L", "W"]
    },
    {
      id: 5,
      team: "University Of Moratuwa",
      played: 34,
      forAgainst: "80:32",
      goalDiff: 48,
      points: 82,
      won: 2,
      drawn: 5,
      lost: 7,
      form: ["W", "W", "W", "L", "W"]
    }
  ];

  const toggleView = () => {
    setExpandedView(!expandedView);
  };

  const renderFormStatus = (status) => {
    let className = "";
    
    if (status === "W") {
      className = styles['form-win'];
    } else if (status === "D") {
      className = styles['form-draw'];
    } else if (status === "L") {
      className = styles['form-loss'];
    }
    
    return <div className={`${styles['form-circle']} ${className}`}>{status}</div>
  };

  // Mobile view for each team row
  const renderMobileRow = (team) => {
    return (
      <div key={team.id} className={styles['mobile-table-row']}>
        <div className={styles['mobile-team-header']}>
          <div className={styles['team-logo']}>
            <img src={'R (7).png'} alt='team logo' className={styles['log']} />
          </div>
          <div className={styles['team-name']}>{team.team}</div>
          <div className={styles['points-badge']}>{team.points}</div>
        </div>
        
        <div className={styles['mobile-stats']}>
          <div className={styles['mobile-stat-item']}>
            <span className={styles['mobile-stat-label']}>P:</span>
            <span className={styles['mobile-stat-value']}>{team.played}</span>
          </div>
          <div className={styles['mobile-stat-item']}>
            <span className={styles['mobile-stat-label']}>F:A:</span>
            <span className={styles['mobile-stat-value']}>{team.forAgainst}</span>
          </div>
          <div className={styles['mobile-stat-item']}>
            <span className={styles['mobile-stat-label']}>+/-:</span>
            <span className={styles['mobile-stat-value']}>{team.goalDiff}</span>
          </div>
        </div>
        
        <div className={styles['mobile-wdl']}>
          <div className={`${styles['mobile-wdl-item']} ${styles['wdl-win']}`}>
            <span>W:</span> {team.won}
          </div>
          <div className={`${styles['mobile-wdl-item']} ${styles['wdl-draw']}`}>
            <span>D:</span> {team.drawn}
          </div>
          <div className={`${styles['mobile-wdl-item']} ${styles['wdl-loss']}`}>
            <span>L:</span> {team.lost}
          </div>
        </div>
        
        <div className={styles['mobile-form']}>
          <span className={styles['mobile-stat-label']}>FORM:</span>
          <div className={styles['mobile-form-items']}>
            {team.form.map((status, index) => (
              <React.Fragment key={index}>
                {renderFormStatus(status)}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles['standings-container']}>
      <div className={styles['standings-header']}>
        <h1>STANDING</h1>
      </div>
      
      <div className={styles['league-title']}>
        <h2>Super League 2025</h2>
        <div className={styles['actions-button']}>
          <button className={styles['dropdown-btn']} onClick={toggleView}>
            <FaChevronDown />
          </button>
        </div>
      </div>

      {/* Desktop View (Hidden on very small screens) */}
      <div className={styles['table-container-desktop']}>
        <div className={styles['table-header']}>
          <div className={styles['col-team']}></div>
          <div className={styles['col-stat']}>P</div>
          <div className={styles['col-stat']}>F:A</div>
          <div className={styles['col-stat']}>+/-</div>
          <div className={styles['col-stat']}>PTS</div>
          <div className={styles['col-wdl']}>
            <div className={styles['wdl-item']}>W</div>
            <div className={styles['wdl-item']}>D</div>
            <div className={styles['wdl-item']}>L</div>
          </div>
          <div className={styles['col-form']}>FORM</div>
        </div>
        
        {standingsData.map((team) => (
          <div key={team.id} className={styles['table-row']}>
            <div className={styles['col-team']}>
              <div className={styles['team-logo']}>
                <img src={'R (7).png'} alt='team logo' className={styles['log']} />
              </div>
              <div className={styles['team-name']}>{team.team}</div>
            </div>
            <div className={styles['col-stat']}>{team.played}</div>
            <div className={styles['col-stat']}>{team.forAgainst}</div>
            <div className={styles['col-stat']}>{team.goalDiff}</div>
            <div className={styles['col-stat']}>{team.points}</div>
            <div className={styles['col-wdl']}>
              <div className={`${styles['wdl-item']} ${styles['wdl-win']}`}>{team.won}</div>
              <div className={`${styles['wdl-item']} ${styles['wdl-draw']}`}>{team.drawn}</div>
              <div className={`${styles['wdl-item']} ${styles['wdl-loss']}`}>{team.lost}</div>
            </div>
            <div className={styles['col-form']}>
              {team.form.map((status, index) => (
                <React.Fragment key={index}>
                  {renderFormStatus(status)}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View (Visible only on very small screens) */}
      <div className={styles['table-container-mobile']}>
        {standingsData.map((team) => renderMobileRow(team))}
      </div>
    </div>
  );
};

export default Standing;