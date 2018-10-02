import React from 'react'

const style = {
    backgroundColor: "#d8bfd8", /* Green background */
    border: "1px solid #d8bfd8 ", /* FireBrick  border */
    color: "white", /* White text */
    padding: "10px 24px", /* Some padding */
    cursor: "pointer", /* Pointer/hand icon */
    float: "left" /* Float the buttons side by side */
};

const Header = ({ onClick, headerDescription }) =>
        <button style={style} onClick={() => onClick()}>{headerDescription}</button>;
 export default Header