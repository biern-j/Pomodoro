import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "@material-ui/core/Button/index";

import TimerOption from "./TimerOption";


const Manager = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    place-content: space-around;
    width: 60%;
    margin: 10%;  
    @media screen and (max-width: 320px) {
    width: 100%;
    }
`;

const SettingPanel = styled(Button)`
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%); 
    border-radius: 3px;
    border: 0;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);   
`;


const ManagerPanel = ({pomodoroTimers, settingPanel, handleTimerRemover, setTimer, handleSettingPanel }) =>
    <Manager>
        <SettingPanel onClick={(e) => handleSettingPanel(e)}><FontAwesomeIcon icon={settingPanel ? "angle-left" : "edit"}/></SettingPanel>
        {pomodoroTimers.map( item =>
            <div key={item.id}>
                <TimerOption
                    settingPanel={settingPanel}
                    onClickTimerRemover={handleTimerRemover}
                    timePeriod={item.timer * 60 * 1000}
                    id={item.id}
                    onClick={(e, counter) => {
                        setTimer(counter);
                    }}
                />
            </div>
        )}
    </Manager>;

export default ManagerPanel;