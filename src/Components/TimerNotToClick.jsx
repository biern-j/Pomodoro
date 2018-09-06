import React from 'react'

const style = {
    backgroundColor: "#156efb", /* Green background */
    border: "1px solid black", /* Green border */
    color: "white", /* White text */
    padding: "10px 24px", /* Some padding */
    cursor: "pointer", /* Pointer/hand icon */
    float: "left" /* Float the buttons side by side */
};
const TimerNoTonClick = ({timePeriod}) =>

    <button
        style={style}
    >
        Pomodoro timer {timePeriod}
    </button>;


export default TimerNoTonClick