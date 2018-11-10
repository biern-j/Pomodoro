import React from "react";
import styled from "styled-components";

import ResetTimer from "./ResetPomodoro";
import StopTimer from "./Stop-Start";

const Controller = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    place-content: space-around;
    width: 100%;
    margin: 5%;
        
    @media screen and (max-width: 320px) {
        width: 100%;
    }
`;

const TimerController = ({ handleReset, timerController, handleTimerController}) =>
    <Controller>
        <ResetTimer onClick={handleReset}/>
        <StopTimer controller={timerController} onClick={(controller) => handleTimerController(controller)}/>
    </Controller>;

export default TimerController;