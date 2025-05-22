"use client";
import { useState, useRef } from "react";
import styles from "./score.module.css";
import { FaFootballBall, FaBaseballBall } from 'react-icons/fa';
import { GiCricketBat, GiRugbyConversion, GiBasketballBall, GiTennisRacket, GiVolleyballBall } from 'react-icons/gi';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { Zen_Dots } from "next/font/google";

const zenfont = Zen_Dots({ subsets: ['latin'], weight: '400' });

const categories = [
  { label: 'Cricket', icon: <GiCricketBat /> },
  { label: 'Rugby', icon: <GiRugbyConversion /> },
  { label: 'Football', icon: <FaFootballBall />, active: true },
  { label: 'Volleyball', icon: <GiVolleyballBall /> },
  { label: 'Basketball', icon: <GiBasketballBall /> },
  { label: 'Baseball', icon: <FaBaseballBall /> },
  { label: 'Tennis', icon: <GiTennisRacket /> },
];

export default function CategoryBar() {
  const [selected, setSelected] = useState('Football');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 150, behavior: 'smooth' });
  };

  return (
    <div className={styles.CategoryBar}>
      <h3 className={`${styles.title} ${zenfont.className}`}>CATEGORY</h3>
      <div className={styles.categoryab}>
        <button className={styles.navButton} title="Scroll Back" onClick={scrollLeft}>
          <MdArrowBackIos />
        </button>
        <div className={styles.scrollContainer} ref={scrollRef}>
          {categories.map((item, index) => (
            <div
              key={index}
              className={`${styles.category} ${selected === item.label ? styles.active : ''}`}
              onClick={() => setSelected(item.label)}
            >
              <div className={styles.icon}>{item.icon}</div>
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
        <button className={styles.navButton} title="Scroll Forward" onClick={scrollRight}>
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
}
