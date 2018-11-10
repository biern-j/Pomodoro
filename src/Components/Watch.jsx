import React from 'react'
import styled from 'styled-components';
import format from 'date-fns/format';

import pomodoros from "../pomodoroTimer";
import audio from '../Sound/audio_hero_Cat_DIGIC08-69.ogg';
import cat from '../Image/kitten.png';
import notificationCat from '../Image/cropped_cat_favicon_2_gyH_icon.ico';

import NewPomodoroTimer from "./NewPomodoroTimer";
import Alarm from "./Alarm";
import ManagerPanel from "./ManagerPanel";
import TimerController from "./TimerController";

const NewTimerPanel = styled(NewPomodoroTimer)`
`;

const TimerBox = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 500%;
    align-self: center;
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
                new Notification("To już", { body: "I co teraz?", icon: notificationCat});
            }
        }, 1000)
    }

    componentDidMount() {
        Notification.requestPermission();
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
        const timer = this.state.alarm
            ? (<Alarm image={cat} sound={audio}/>)
            : (<div>
                <TimerBox>{format(this.state.counter, ['mm:ss'])}</TimerBox>
                {this.state.counter !== 0
                    ? (<TimerController
                    handleReset={this.handleReset}
                    timerController={this.state.timerController}
                    handleTimerController={this.handleTimerController}/>)
                    : ""
                }
            </div>);

        return(
            <Container>
                <ManagerPanel
                    pomodoroTimers={this.state.pomodoroTimers}
                    settingPanel={this.state.settingPanel}
                    handleTimerRemover={this.handleTimerRemover}
                    setTimer={this.setTimer}
                    handleSettingPanel={this.handleSettingPanel}
                />
                {this.state.settingPanel
                    ? <NewTimerPanel
                    onSubmit={this.handleSubmition}
                    />
                    : timer}
           </Container>
       );
    }
}

export default Watch;

