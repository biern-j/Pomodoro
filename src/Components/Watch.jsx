import React from 'react'

class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date()};
        this.currentTime = this.currentTime.bind(this);
    }
    currentTime() {
        this.setState({ time: new Date().toLocaleDateString() });
    }
    componentDidMount() {
        setInterval(this.currentTime, 1000)
    }


    render() {
       return(
           <div>Now is: {this.state.time}</div>
       );
   }
}

export default Watch