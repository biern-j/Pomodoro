import React from 'react'

const Header = ({ onClick, headerDescription }) =>
        <button onClick={() => onClick()}>{headerDescription}</button>;
 export default Header