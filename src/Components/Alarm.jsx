import React from "react";
import styled from "styled-components";

const AlarmImg = styled.img`
    width: 100%;
    height: 100%;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;

const Alarm = ({ image, sound }) =>
    <div>
        <AlarmImg src={image}></AlarmImg>
        <audio autoPlay>
            <source src={sound} type="audio/ogg" />
        </audio>
    </div>;

export default Alarm;
