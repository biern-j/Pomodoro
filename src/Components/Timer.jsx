import React from 'react'

const style = {
    backgroundColor: "#4CAF50", /* Green background */
    border: "1px solid green", /* Green border */
    color: "white", /* White text */
    padding: "10px 24px", /* Some padding */
    cursor: "pointer", /* Pointer/hand icon */
    float: "left", /* Float the buttons side by side */
};
const Timer = ({timePeriod, description, onClick}) =>
    <button
        style={style}
        onClick={(e) => onClick(e, timePeriod)}
    >
        {description}
    </button>;


export default Timer