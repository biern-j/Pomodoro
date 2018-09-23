import React from 'react'
import Timer from "./Timer";
import NewPomodoroTimer from "./NewPomodoroTimer";

const pomodoros = [
    {
        timer: 5000,
        description: "Pomodoro 5s",
        id: 1
    },
    {
        timer: 10000,
        description: "Pomodoro 10s",
        id: 2
    },
    {
        timer: 15000,
        description: "Pomodoro 15s",
        id: 3
    },
    {
        timer: 1000,
        description: "Reset",
        id: 4
    }
    ];



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
        const timerStyle = {
            display: "inline",
            border: "solid black 2px",

        };
        const parentStyle = {
            border: "solid black 1px",
            textAlign: "center"
        };
        const selectorStyle = {
            border: "solid black 10px",
            padding: "40px",
            margin: "40px",
            textAlign: "center"
        };
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
       return(
           <div style={parentStyle}>
           <div style={timerStyle}>
               Now is: {this.state.time.toLocaleTimeString()}
           </div>
               <div style={selectorStyle}>
               {pomodoroData}
               </div>
               <div style={timerStyle}>
                   YOU HAVE: <span>{this.state.counter}</span>
               </div>
               <NewPomodoroTimer value={this.state.newPomodoroTimer} onChange={this.onChange}/>
           </div>
       );
    }
}

export default Watch

