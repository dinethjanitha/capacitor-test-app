'use client';
import React, { useState, useRef } from 'react';
import styles from './category.module.css';
import {
  GiCricketBat,
  GiRugbyConversion,
  GiVolleyballBall,
  GiBasketballBall,
  GiBaseballBat,
  GiTennisRacket,
  GiAmericanFootballBall,
  GiSoccerBall
} from 'react-icons/gi';
import { IoChevronBackCircle, IoChevronForwardCircle } from 'react-icons/io5';

const Category: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // Show left arrow if not at the start
      setShowLeftArrow(scrollLeft > 0);
      
      // Show right arrow if not at the end
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <>
      <div className={styles.categorySection}>
        <h1>CATEGORY</h1>
      </div>
      
      <div className={styles.categoryContainerWrapper}>
        {showLeftArrow && (
          <button 
            className={`${styles.navButton} ${styles.leftNav}`}
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <IoChevronBackCircle />
          </button>
        )}
        
        <div 
          className={styles.categoryContainer} 
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          <div className={styles.categoryItem}>
            <GiCricketBat />
            <h1>Cricket</h1>
          </div>
          <div className={styles.categoryItem}>
            <GiRugbyConversion />
            <h1>Rugby</h1>
          </div>
          <div className={styles.categoryItem}>
            <GiSoccerBall />
            <h1>Football</h1>
          </div>
          <div className={styles.categoryItem}>
            <GiVolleyballBall />
            <h1>Volleyball</h1>
          </div>
          <div className={styles.categoryItem}>
            <GiBasketballBall />
            <h1>Basketball</h1>
          </div>
          <div className={styles.categoryItem}>
            <GiBaseballBat />
            <h1>Baseball</h1>
          </div>
          <div className={styles.categoryItem}>
            <GiTennisRacket />
            <h1>Tennis</h1>
          </div>
          <div className={styles.categoryItem}>
            <GiAmericanFootballBall />
            <h1>American Football</h1>
          </div>
        </div>
        
        {showRightArrow && (
          <button 
            className={`${styles.navButton} ${styles.rightNav}`}
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <IoChevronForwardCircle />
          </button>
        )}
      </div>
      
      <div className={styles.addContainer1}></div>
    </>
  );
};

export default Category;