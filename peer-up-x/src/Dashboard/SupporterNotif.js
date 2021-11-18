import React from "react";
import styles from "./supporterNotif.module.css";
import {ReactComponent as Exit} from "./clear_24px.svg";

export default function SupporterNotif(props) {
    return (
        <div className={styles.notifContainer}>
            <img src={props.studentProfilePic} alt="Student" />
            <text className={styles.notifText}> A student has requested to chat with you. </text>
            <button className = {styles.notifButton}> CHAT NOW </button>
            <Exit/>
        </div>
    );
}