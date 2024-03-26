import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About =() =>{
    return <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.menu}>
            <img src={getImageUrl("about/aboutImage.png")} alt= "Me siting with a laptop"/>
            <ul>
                <li className = {styles.menuItems}>
                    <img src={getImageUrl("about/cursorIcon.png")}  alt= "cursorImage"/>
                    <div className={styles.aboutItemText}>
                        <h3>FrontEnd Developer</h3>
                        <p>
                            I am a FrontEnd dev with experience of building responsive apps
                        </p>
                    </div>
                </li>
            </ul>
            <ul>
                <li className = {styles.menuItems}>
                    <img src={getImageUrl("about/serverIcon.png")}  alt= "serverImage"/>
                    <div>
                        <h3>BackEnd Developer</h3>
                        <p>
                            I am a BackEnd dev with experience of building servers and Api
                        </p>
                    </div>
                </li>
            </ul>
            <ul>
                <li className = {styles.menuItems}>
                    <img src={getImageUrl("about/uiIcon.png")}  alt= "UiImage"/>
                    <div>
                        <h3>Ui/Ux Designer</h3>
                        <p>
                            I have experience in designing user interfaces
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}