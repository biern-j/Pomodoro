import React from "react";
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Stop = styled(Button)`
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%); 
    border-radius: 3px;
    border: 0;
    height: 48px;
    padding: 10%;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;


const StopTimer = ({ controller, onClick }) => <Stop onClick={() => onClick(!controller)}>
    {controller ? "Resume" : "Pause"}
    </Stop>;

export default StopTimer;