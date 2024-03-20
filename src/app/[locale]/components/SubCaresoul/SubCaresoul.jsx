import React from "react";
import styles from "../subCaresoul.module.css";
export default function SubCaresoul() {
  return (
    <section className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselItem}>
          <img className={styles.carouselItemImg} src="/1.png" alt="people" />
          <div className={styles.carouselItemDetails}>
            <div className={styles.controls}>
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className={styles.carouselItemDetailsTitle}>card1</h5>
           
          </div>
        </div>
        <div className={styles.carouselItem}>
          <img className={styles.carouselItemImg} src="2.png" alt="people" />
          <div className={styles.carouselItemDetails}>
            <div className={styles.controls}>
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className={styles.carouselItemDetailsTitle}>card2</h5>
            
          </div>
        </div>
        <div className={styles.carouselItem}>
          <img className={styles.carouselItemImg} src="3.png" alt="people" />
          <div className={styles.carouselItemDetails}>
            <div className={styles.controls}>
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className={styles.carouselItemDetailsTitle}>card3</h5>
           
          </div>
        </div>
        <div className={styles.carouselItem}>
          <img className={styles.carouselItemImg} src="4.png" alt="people" />
          <div className={styles.carouselItemDetails}>
            <div className={styles.controls}>
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className={styles.carouselItemDetailsTitle}>card4</h5>
           
          </div>
        </div>
      </div>
    </section>
  );
}
