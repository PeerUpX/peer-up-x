import React from "react";
import styles from './SupporterDashboard.module.css'
import SupporterNotif from "./SupporterNotif"
import SideBar from "../SideBar";
import CompletedCall from "./CompletedCall"

export default function SupporterDashboard(props) {
    return (
    <div className = {styles.pageContainer}>
        <SideBar profile = {false} dashboard = {true}/>
        <div>
            <h1 className={styles.mainHeader}> Notifications </h1>
            <p className={styles.header}> New </p>
            <div className={styles.notifs}>
                <SupporterNotif studentProfilePic/>
                <SupporterNotif studentProfilePic/>
                <SupporterNotif studentProfilePic/>
            </div>
            <hr className={styles.line}/>
            <p className = {styles.header}> This Week </p>
            <div className = {styles.stats}>
                <span> Average Rating: {props.weekRating} </span>
                <span className={styles.length}> Average Length of Interaction: {props.weekAvgLength}</span>
                <div>
                    <p> Completed Calls {props.weekCalls} </p>
                    <CompletedCall studentNumber="1"/>
                    <CompletedCall studentNumber="2"/>
                    <CompletedCall studentNumber="3"/>
                </div>
            </div>
        </div>
    </div>
    );
}