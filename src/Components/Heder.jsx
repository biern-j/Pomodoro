import React from 'react'

const Header = ({ onClick, headerDescription }) =>
    <div>
        <button onClick={() => onClick()}>{headerDescription}</button>
    </div>;

 export default Header