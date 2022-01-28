import React from "react";
import styles from "./supporterNotif.module.css";
import {ReactComponent as Exit} from "./clear_24px.svg";

export default function SupporterNotif(props) {
    return (
        <div className={styles.notifContainer}>
            <img src={"https://images.squarespace-cdn.com/content/v1/6007e076f931384d59d5375e/1611129105339-2QGQBDXIMQOHFO3T5XVF/peer+up.png?format=1500w"} width="80" height="80" alt="Student" />
            <text className={styles.notifText}> A student has requested to chat with you. </text>
            <button onClick={() => window.open('https://chat-testerclient.herokuapp.com/')}className = {styles.notifButton}> CHAT NOW </button>
            <Exit/>
        </div>
    );
}   