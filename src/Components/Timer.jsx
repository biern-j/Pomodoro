import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timer: ''};
    this.setTimer = this.setTimer.bind(this);
  }
    setTimer(e, pomodoroTime ) {
    e.preventDefault();
    setTimeout(function(){ alert("to już")}, pomodoroTime);
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.timer, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    timer(timer) {
        this.setState({timer});
    }


  render() {
    const pomodoroTime = this.props.timePeriod;
    const style = {
      backgroundColor: "#4CAF50", /* Green background */
      border: "1px solid green", /* Green border */
      color: "white", /* White text */
      padding: "10px 24px", /* Some padding */
      cursor: "pointer", /* Pointer/hand icon */
      float: "left" /* Float the buttons side by side */

    };
    return (
        <div>
            <button style={style} onClick={(e) => {
                this.setTimer(e, pomodoroTime);
                this.timer(pomodoroTime);
            }

            }
            >{this.props.description}
            </button>
            <div>
                YOU HAVE: {this.state.timer}
            </div>
      </div>
    )
  }

}

export default Timer