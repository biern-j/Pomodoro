import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const TimerSelector = styled(Button)`
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%); 
    border-radius: 3px;
    border: 0;
    height: 48px;
    padding: 10%;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

const Container = styled.div`
    position: relative;
`;

const Icon = styled(FontAwesomeIcon)`
    position: absolute;
    right: -0.4rem;
    top: -0.4rem;
`;

const Timer = ({ id, timePeriod, onClick, onClickTimerRemover, settingPanel}) => {

    const remove = () => settingPanel ? <Icon onClick={() => onClickTimerRemover(id)} icon="times-circle"/> : "";
    return (
        <Container>
            <TimerSelector disable onClick={(e) => settingPanel ? "" : onClick(e, timePeriod * 1000)}>
                {timePeriod} seconds
            </TimerSelector>
            {remove()}
        </Container>
    );
};

export default Timer
