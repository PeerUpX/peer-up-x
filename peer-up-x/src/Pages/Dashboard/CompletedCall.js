import React from "react";
import styles from "./completedCall.module.css";

export default function CompletedCall(props) {
    return (
        <div className={styles.box}>
            <p>Student {props.studentNumber}</p>
        </div>
    );
}