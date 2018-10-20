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

const Timer = ({ id, timePeriod, onClick, onClickTimerRemover, settingPanel}) => {
    console.log("settingPanel", settingPanel);
    const remove = () => settingPanel ? <TimerRemover onClick={() => onClickTimerRemover(id)}>Remove</TimerRemover> : "";
    return (
<Container>
    <TimerSelector
        onClick={(e) => onClick(e, timePeriod * 1000)}
    >
        {timePeriod + ": s"}
    </TimerSelector>
    {remove()}
</Container>
    );
};


export default Timer