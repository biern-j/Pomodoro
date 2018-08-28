import React from 'react'
import Timer from "./Timer";

class Watch extends React.Component {
    constructor(props) {
        super(props);
       this.state = { time: new Date()};
    }

    componentDidMount() {
       this.watchID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.watchID);

    }

    tick() {
        this.setState({ time: new Date() })
    }


    render() {
       return(
           <div>
               <div>
                   Now is: {this.state.time.toLocaleTimeString()}
                   </div>

                   <Timer timePeriod={5000} description={'Pomodoro 5s'}/>

                   <Timer timePeriod={4000} description={'Pomodoro 4s'}/>

           </div>
       );
    }
}

export default Watch

