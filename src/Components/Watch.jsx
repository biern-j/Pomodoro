import React from 'react'
import Timer from "./Timer";

class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() };
    }

    componentDidMount() {
       this.timerID = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ time: new Date() })
    }

    render() {
       return(
         <div>
           <div>Now is: {this.state.time.toLocaleTimeString()}</div>
           <div>
             <button>
               <Timer  timePeriod={5000} />
               Pomodoro 5 s
             </button>
             {/*<button>*/}
               {/*<Timer timePeriod={2500}/>*/}
               {/*Brake 2,5 s*/}
             {/*</button>*/}
             {/*<button>*/}
               {/*<Timer timePeriod={1500}/>*/}
               {/*Brake 1,5 s*/}
             {/*</button>*/}
           </div>
         </div>
       );
   }
}

export default Watch