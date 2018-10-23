import React from 'react'
import Timer from "./Timer";
import NewPomodoroTimer from "./NewPomodoroTimer";
import pomodoros from "../pomodoroTimer";
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import audio from '../Sound/audio_hero_Cat_DIGIC08-69.mp3';

import ResetTimer from "./ResetPomodoro";

const TimerBox = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    align-self: center;
`;

const SettingPanel = styled(Button)`
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%); 
    border-radius: 3px;
    border: 0;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);   
`;

const Manager = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    place-content: space-around;
    width: 60%;
    margin: 10% 20%;  
    @media screen and (max-width: 320px) {
    width: 100%;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    place-content: space-around;

`;


class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            counter: 0,
            pomodoroTimers: pomodoros,
            reset: false,
            timerValue: 0,
            settingPanel: false,
            alarm: false

        };
        this.setTimer = this.setTimer.bind(this);
        this.intervalID = null;
        this.handleTimerRemover = this.handleTimerRemover.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSettingPanel = this.handleSettingPanel.bind(this);
    }

    handleSettingPanel(e) {
        e.preventDefault();
        this.setState({
            settingPanel: !this.state.settingPanel});
    }

    handleReset(reset) {
        this.setState({ reset });
        if(this.state.reset) {
            clearInterval(this.intervalID);
            this.setState({ counter: 0 });
        }
    }

    handleTimerRemover(id) {
        this.setState({ pomodoroTimers: this.state.pomodoroTimers.filter(item => id !== item.id)});
        console.log("id", id, this.state.pomodoroTimers.filter(item => id !== item.id));

    }

    setTimer(counter) {
        if(this.intervalID !== null) {
            clearInterval(this.intervalID);
        }
        this.setState({counter, alarm: false});
        this.intervalID = setInterval(() =>  {
            let value = this.state.counter;
            value = value - 1000;
            this.setState({counter: value});
            console.log("value", value);
            if (value <= 0) {
                this.setState({counter: 0, alarm: true});
                clearInterval(this.intervalID);
            }
        }, 1000)
    }

    componentDidMount() {
       this.watchID = setInterval(() => {
           this.tick();
           }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.watchID);
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({ time: new Date()})
    }

    handleNewTimer = (item) => {
        this.setState({ timerValue: item });
    };

    handleSubmition = (item) => {
        this.setState({ pomodoroTimers: [...this.state.pomodoroTimers, { "timer": this.state.timerValue,
                "id": Math.random()}]});
        return item;
    };

    render() {
        const sound = () =>
            this.state.alarm
                ? (<audio autoPlay><source src={audio} type="audio/mp3" /></audio>)
                : undefined;
        const pomodoroData = this.state.pomodoroTimers.map( item =>
            <div key={item.id}>
            <Timer
                settingPanel={this.state.settingPanel}
                onClickTimerRemover={this.handleTimerRemover}
                timePeriod={item.timer}
                id={item.id}
                onClick={(e, counter) => {
                    this.setTimer(counter);
                }}
            />
            </div>
        );
        const settingPanel = () => {
            switch (this.state.settingPanel) {
                case false:
                   return <FontAwesomeIcon icon="edit" />;
                case true:
                    return <FontAwesomeIcon icon="angle-left"/>;
                default:
                    return <FontAwesomeIcon icon="edit" />;
            }
        };
        const resetTimer = () => this.state.counter !== 0 ? <ResetTimer onClick={this.handleReset}/> : undefined;
        const newPomodoroTimer = () => this.state.settingPanel ? <NewPomodoroTimer
            onSubmit={this.handleSubmition}
            handleNewTimer={this.handleNewTimer}
        />: "";
        const timeBox = () => !this.state.settingPanel ? (<TimerBox>
            {this.state.counter / 1000} seconds
        </TimerBox>): "";
       return(
           <Container>
               <Manager>
               <SettingPanel onClick={(e) => {this.handleSettingPanel(e);}}>
                   {settingPanel()}
               </SettingPanel>
               {pomodoroData}
               </Manager>
               {newPomodoroTimer()}
               {timeBox()}
               {resetTimer()}
               {sound()}
           </Container>
       );
    }
}

export default Watch;

