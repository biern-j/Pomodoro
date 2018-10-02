import React from 'react'
import Timer from "./Timer";
import NewPomodoroTimer from "./NewPomodoroTimer";
import pomodoros from "../pomodoroTimer";
import styled from 'styled-components';

const TimerBox = styled.div`
  border: "solid black 2px"  
`;

const SelectorBox = styled.div`
    border: "solid black 1px"
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
            newPomodoroTimer: ""
        };
        this.setTimer = this.setTimer.bind(this);
        this.intervalID = null;
    }

    setTimer(counter) {
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

    onChange = (e) => {
        console.log("value", e);
        this.setState({newPomodoroTimer: e.target.value })};

    render() {

        const pomodoroData = this.state.pomodoroTimers.map( item =>
            <div key={item.id}>
            <Timer

                timePeriod={item.timer}
                description={item.description}
                onClick={(e, counter) => {
                    this.setTimer(counter);
                }}
            />
            </div>
        );
        const numberOfDefaultPomodoro = pomodoros.length;
       return(
           <Container>
           <TimerBox>
               Now is: {this.state.time.toLocaleTimeString()}
           </TimerBox>
               <SelectorBox>
               {pomodoroData}
               </SelectorBox>
               <TimerBox>
                   YOU HAVE: {this.state.counter}
               </TimerBox>
               <NewPomodoroTimer
                   numberOfDefaultPomodoro={numberOfDefaultPomodoro}
                   value={this.state.newPomodoroTimer}
                   onClick={(e, counter) => {
                   this.setTimer(counter);
               }}
               />
           </Container>
       );
    }
}

export default Watch

