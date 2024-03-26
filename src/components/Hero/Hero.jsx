import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./hero.module.css";

export const Hero = () => {
    if (getImageUrl("Hero/heroImage.png")) {
        console.log(true);

    }
  return (
    <section className={styles.container}>
      <div className ={styles.content}>
        <h1 className= {styles.title}>Hi, I am Jack Gichohi.</h1>
        <p className={styles.description}>I am fullstack dev with react and nodejs, Hire me</p>
        <a href="mailto: jackgichohi01@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src="../../../assets/Hero/heroImage.png"
        alt="heroImage"
        className="styles.heroImg"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
