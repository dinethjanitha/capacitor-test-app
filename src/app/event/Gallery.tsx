import React from 'react';
import styles from './gallery.module.css';

const Gallery = () => {
  const matches = Array(6).fill({
    image: 'image_fx (18).png', // Replace with actual image path
    title: 'A vs B',
  });

  return (
    <div className={styles.galleryWrapper}>
      <h2 className={styles.galleryTitle}>GALLERY</h2>

      <div className={styles.galleryGrid}>
        {matches.map((match, index) => (
          <div className={styles.card} key={index}>
            <img src={match.image} alt={match.title} className={styles.image} />
            <div className={styles.label}>{match.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
