import React from 'react'
import Timer from "./Timer";

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
    }
    ];



class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            counter: ""};
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
    }

    tick() {
        this.setState({ time: new Date()})
    }

    render() {
        const pomodoroWatchStyle = {
            position: "absolute",
            left: "50%",
            top: "50%",
            display: "inline"
        };
        const pomodoroDataStyle = {
            border: "solid black 1px"

        };
        const pomodoroData = pomodoros.map( item =>
            <Timer
                key={item.id}
                timePeriod={item.timer}
                description={item.description}
                onClick={(e, counter) => {
                    this.setTimer(counter);
                }}
            />
        );
       return(
           <div style={pomodoroDataStyle}>
               Now is: {this.state.time.toLocaleTimeString()}
               {pomodoroData}
               <div style={pomodoroWatchStyle}>
                   YOU HAVE: <span>{this.state.counter}</span>
               </div>
           </div>
       );
    }
}

export default Watch

