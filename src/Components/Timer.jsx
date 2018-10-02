import React from 'react'

const Timer = ({timePeriod, description, onClick}) =>

    <button
        onClick={(e) => onClick(e, timePeriod)}
    >
        {description}
    </button>;


export default Timer