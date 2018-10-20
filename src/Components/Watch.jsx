import React from 'react'
import Timer from "./Timer";
import NewPomodoroTimer from "./NewPomodoroTimer";
import pomodoros from "../pomodoroTimer";
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ResetTimer from "./Reset";

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
            reset: false,
            timerValue: 0,
        };
        this.setTimer = this.setTimer.bind(this);
        this.intervalID = null;
        this.handleTimerRemover = this.handleTimerRemover.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleReset(reset) {
        this.setState({ reset });
        if(this.state.reset) {
            clearInterval(this.intervalID);
            this.setState({ counter: "POMODORO WAS RESERTE" });
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
                onClickTimerRemover={this.handleTimerRemover}
                timePeriod={item.timer}
                id={item.id}
                onClick={(e, counter) => {
                    this.setTimer(counter);
                }}
            />
            </div>
        );
       return(
           <Container>
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
               <NewPomodoroTimer
                   onSubmit={this.handleSubmition}
                   handleNewTimer={this.handleNewTimer}
               />
           </Container>
       );
    }
}

export default Watch

