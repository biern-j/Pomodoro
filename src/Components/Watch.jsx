import React from 'react'
import Timer from "./Timer";
import NewPomodoroTimer from "./NewPomodoroTimer";
import pomodoros from "../pomodoroTimer";
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ResetTimer from "./Reset";

const TimerBox = styled.div`
  border: "solid black 2px"  
`;

const SelectorBox = styled.div`
    border: "solid black 1px"
`;

const SettingPanel = styled(Button)`
    color: black;
    background: black;
`;

const Container = styled.div`
`;

class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            counter: "",
            pomodoroTimers: pomodoros,
            reset: false,
            timerValue: 0,
            settingPanel: false,
            settingPanelDescription: "SETTING PANEL"
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
            settingPanel: !this.state.settingPanel,
            settingPanelDescription: this.state.settingPanel ? "SETTING PANEL" : "BACK"
        });
    }

    handleReset(reset) {
        this.setState({ reset });
        if(this.state.reset) {
            clearInterval(this.intervalID);
            this.setState({ counter: "RESET" });
        }
    }

    handleTimerRemover(id) {
        this.setState({ pomodoroTimers: this.state.pomodoroTimers.filter(item => id !== item.id)});
        console.log("id", id, this.state.pomodoroTimers.filter(item => id !== item.id));

    }

    setTimer(counter) {
        this.setState({ pomodoroTimers: this.state.pomodoroTimers.concat([])});
        if(this.intervalID !== null) {
            clearInterval(this.intervalID);
        }
        this.setState({counter});
        this.intervalID = setInterval(() =>  {
            let value = this.state.counter;
            value = value - 1000;
            this.setState({counter: value});
            console.log("value", value);
            if (value <= 0) {
                this.setState({counter: "To już"});
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
        const newPomodoroTimer = () => this.state.settingPanel ? <NewPomodoroTimer
            onSubmit={this.handleSubmition}
            handleNewTimer={this.handleNewTimer}
        />: "";
       return(
           <Container>
               <SettingPanel onClick={(e) => {
                   this.handleSettingPanel(e);
               }}>{this.state.settingPanelDescription}</SettingPanel>
           <TimerBox>
               Now is: {this.state.time.toLocaleTimeString()}
           </TimerBox>
               <SelectorBox>
               {pomodoroData}
               </SelectorBox>
               <TimerBox>
                   <Typography>
                   YOU HAVE: {this.state.counter}
                   </Typography>
                   <ResetTimer onClick={this.handleReset}/>
               </TimerBox>
               {newPomodoroTimer()}
           </Container>
       );
    }
}

export default Watch

