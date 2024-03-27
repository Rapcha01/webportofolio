import React from "react";
import skill from "../../data/skills.json";
import { getImageUrl } from "../../utils.js";
import history from "../../data/history.json";
export const Experience = () => {
  return (
    <section id="experience">
      <h1>Experience</h1>
      <div>
        {skill.map((skill, id) => {
          return (
            <div key={id}>
              <div>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
            </div>
          );
        })}
      </div>
      <ul>
        {history.map((historyItem, id) => {
          return (
            <li key={id}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} logo`}
              />
              <div>
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
    </section>
  );
};
