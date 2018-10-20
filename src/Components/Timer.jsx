import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Container = styled.div`
`;
const TimerSelector = styled(Button)`
    color: black; 
    background: green; 
`;
const TimerRemover = styled(Button)`
    color: black;
    background: black;
`;

const Timer = ({ id, timePeriod, onClick, onClickTimerRemover}) =>
<Container>
    <TimerSelector
        onClick={(e) => onClick(e, timePeriod * 1000)}
    >
        {timePeriod + ": s"}
    </TimerSelector>
    <TimerRemover onClick={() => onClickTimerRemover(id)}>Remove</TimerRemover>
</Container>;


export default Timer