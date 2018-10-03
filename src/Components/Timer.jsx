import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const TimerSelector = styled(Button)`
    color: black; 
    background: green; 
`;

const Timer = ({timePeriod, description, onClick}) =>

    <TimerSelector
        onClick={(e) => onClick(e, timePeriod)}
    >
        {description}
    </TimerSelector>;


export default Timer