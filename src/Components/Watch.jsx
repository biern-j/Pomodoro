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
        this.state = {time: new Date(), counter: ""};
    }

    componentDidMount() {
       this.watchID = setInterval(() => this.tick(), 1000);
        this.pomodoroTimer = setInterval(() =>
            this.timer(this.state.counter), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.watchID);
        clearInterval(this.pomodoroTimer)


    }

    tick() {
        this.setState({ time: new Date() })
    }


    timer(counter){
        this.setState({counter});
        let value = this.state.counter;
        console.log('value', value);
        value = value - 1000;
        this.setState({counter: value});
        if (value === 0) {
            this.setState({counter: "To już"})
        }
    }


    render() {

        const pomodoroData = pomodoros.map( item =>
            <Timer
                key={item.id}
                timePeriod={item.timer}
                description={item.description}
                onClick={(e, counter) => {
                    this.setState({counter});
                }}
            />

        );
       return(
           <div>
               <div>
                   Now is: {this.state.time.toLocaleTimeString()}
                   </div>
               {pomodoroData}
               <div>
                   YOU HAVE: {this.state.counter}
               </div>
           </div>
       );
    }
}

export default Watch

