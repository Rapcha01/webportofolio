import React from "react";
import styles from "./Experience.module.css";
import skill from "../../data/skills.json";
import { getImageUrl } from "../../utils.js";
import history from "../../data/history.json";


export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h1 className={styles.title}>Experience</h1>
      <div className= {styles.content}>
        <div className={styles.skills}>
        {skill.map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
      <ul className={styles.history}>
        {history.map((historyItem, id) => {
          return (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                
                <ul>
                    {
                        historyItem.experiences.map((experience, id) => {
                            return <li key ={id}>{experience}</li>
                        })
                    }
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
      </div>
      
    </section>
  );
};
