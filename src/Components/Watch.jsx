import React from 'react'
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import format from 'date-fns/format';

import TimerOption from "./TimerOption";
import NewPomodoroTimer from "./NewPomodoroTimer";
import ResetTimer from "./ResetPomodoro";
import StopTimer from "./Stop-Start";

import pomodoros from "../pomodoroTimer";
import audio from '../Sound/audio_hero_Cat_DIGIC08-69.mp3';
import cat from '../kitten.png';
import notificationCat from '../Image/cropped_cat_favicon_2_gyH_icon.ico';

const NewTimerPanel = styled(NewPomodoroTimer)`
`;

const TimerBox = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 500%;
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
    flex-wrap: wrap;
    justify-content: center;
    place-content: space-around;
    width: 60%;
    margin: 10%;  
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

const CatReward = styled.img`
    width: 20%;
    height: 20%;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;

const TimerController = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    place-content: space-around;
    width: 20%;
    margin: 5%;
        
    @media screen and (max-width: 320px) {
        width: 100%;
    }
`;

function spawnNotification(theBody,theIcon,theTitle) {
    const options = {
        body: theBody,
        icon: theIcon
    };
    const n = new Notification(theTitle,options);
    return n;
}

Notification.requestPermission().then(function(result) {
    console.log(result);
});

class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            counter: 0,
            pomodoroTimers: pomodoros,
            timerValue: 0,
            settingPanel: false,
            alarm: false,
            timerController: false
        };
        this.setTimer = this.setTimer.bind(this);
        this.intervalID = null;
        this.handleTimerRemover = this.handleTimerRemover.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSettingPanel = this.handleSettingPanel.bind(this);
        this.handleTimerController = this.handleTimerController.bind(this);
    }

    handleTimerController(controller) {
        this.setState({ timerController: controller });
        clearInterval(this.intervalID);
        if(!controller) {
            this.setTimer(this.state.counter)
        }
    };

    handleSettingPanel(e) {
        e.preventDefault();
        this.setState({
            settingPanel: !this.state.settingPanel,
            alarm: false
        });
        localStorage.setItem("timers", JSON.stringify(this.state.pomodoroTimers));
    }

    handleReset() {
        clearInterval(this.intervalID);
        this.setState({ counter: 0 });
    }

    handleTimerRemover(id) {
        this.setState({ pomodoroTimers: this.state.pomodoroTimers.filter(item => id !== item.id) });

    }

    setTimer(counter) {
        if(this.intervalID !== null) {
            clearInterval(this.intervalID);
        }
        this.setState({counter, alarm: false });
        this.intervalID = setInterval(() =>  {
            let value = this.state.counter;
            value = value - 1000;
            this.setState({counter: value});
            if (value <= 0) {
                this.setState({ counter: 0, alarm: true });
                clearInterval(this.intervalID);
                spawnNotification("To już", {body: "I co teraz?",
                    icon: notificationCat});
            }
        }, 1000)
    }

    componentDidMount() {
    const timers = localStorage.getItem("timers");
    if (timers) {
        this.setState({ pomodoroTimers: JSON.parse(timers) });
    }
    this.watchID = setInterval(() => {
        this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.watchID);
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({ time: new Date() });
    }

    handleSubmition = (timerPeriod) => {
        const pomodoroTimers = [...this.state.pomodoroTimers, { timer:  timerPeriod, id: Math.random()}];
        this.setState({ pomodoroTimers });
        localStorage.setItem("timers", JSON.stringify(pomodoroTimers));
    };

    render() {
        const catReward = () => this.state.alarm ? <CatReward src={cat} /> : "";
        const sound = () =>
            this.state.alarm
                ? (<audio autoPlay><source src={audio} type="audio/mp3" /></audio>)
                : undefined;
        const timerSelect = this.state.pomodoroTimers.map( item =>
            <div key={item.id}>
            <TimerOption
                settingPanel={this.state.settingPanel}
                onClickTimerRemover={this.handleTimerRemover}
                timePeriod={item.timer * 60 * 1000}
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
        const resetTimer = () => this.state.counter !== 0 ?
            <TimerController>
            <ResetTimer onClick={this.handleReset}/>
            <StopTimer controller={this.state.timerController} onClick={(controller) => this.handleTimerController(controller)}/>
            </TimerController>
                : undefined;
        const newPomodoroTimer = () => this.state.settingPanel ? <NewTimerPanel
            onSubmit={this.handleSubmition}
            handleNewTimer={this.handleNewTimer}
        />: "";
        const timeRemaining = format(this.state.counter, ['mm:ss']);
        const timeBox = () => !this.state.settingPanel && !this.state.alarm ?
            (<TimerBox>{timeRemaining}</TimerBox>): "";
        return(
            <Container>
                <Manager>
                    <SettingPanel onClick={(e) => this.handleSettingPanel(e)}>{settingPanel()}</SettingPanel>
                    {timerSelect}
                    </Manager>
                {catReward()}
              {newPomodoroTimer()}
               {timeBox()}
               {resetTimer()}
               {sound()}
           </Container>
       );
    }
}

export default Watch;

