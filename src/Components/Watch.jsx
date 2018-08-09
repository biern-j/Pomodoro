import React from 'react'

class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() };
        //this.tick = this.tick.bind(this);
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
           <div>Now is: {this.state.time.toLocaleTimeString()}</div>
       );
   }
}

export default Watch