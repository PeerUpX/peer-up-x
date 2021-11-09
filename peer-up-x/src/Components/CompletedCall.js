import React from "react";
import "./completedCall.css";

export default function CompletedCall(props) {
    return (
        <div>
            <img src={props.studentProfilePic} alt="Student" />
            <text> A student has requested to chat with you. </text>
            <button> CHAT NOW </button>
        </div>
    );
}