import React from "react";
import styles from "./LandingPage.module.css";
import {ReactComponent as Logo} from "../peerUpLogo.svg";
import { Link } from "react-router-dom";
export default function LandingPage() {
    return (
        <div>
            <Logo className={styles.img}/>
            <h1 className={styles.header1}>Welcome to Peer Up</h1>
            <h2 className = {styles.header2}>Flexible, anonymous, and free peer-to-peer support at campuses nation-wide.</h2>
            <div className = {styles.userType}>
                <Link to = "/login" className={styles.button}>Student</Link>
                <Link to = "/login" className={styles.button}>Supporter</Link>
            </div>
        </div>
    );
}