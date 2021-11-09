import React from "react";
import "./dashboard.css";
import SupporterNotif from "./SupporterNotif"

export default function SupporterDashboard(props) {
    return (
        <div>
            <h1> Notifications </h1>
            <p class="header"> New </p>
            <div>
                <SupporterNotif/>
                <SupporterNotif/>
                <SupporterNotif/>
            </div>
            <hr/>
            <p class="header"> This Week </p>
            <div class="stats">
                <p> Average Rating: {props.weekRating} </p>
                <p> Completed Calls {props.weekCalls} </p>
                <p> Average Length of Interaction: {props.weekAvgLength}</p>
            </div>
        </div>
        
    );
}