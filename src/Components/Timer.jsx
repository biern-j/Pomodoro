import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: ""};
  }

  timer(counter){
      this.setState({counter});
      this.timerID =
          setInterval(() => {
          let value = this.state.counter;
          console.log('value', value);
          value = value - 1000;
          this.setState({counter: value});
          if (value === 0) {
              clearInterval(this.timerID);
              this.setState({counter: "To już"})
          }

          }, 1000);
  }



  render() {
    const pomodoroTime = this.props.timePeriod;
    const style = {
      backgroundColor: "#4CAF50", /* Green background */
      border: "1px solid green", /* Green border */
      color: "white", /* White text */
      padding: "10px 24px", /* Some padding */
      cursor: "pointer", /* Pointer/hand icon */
      float: "left", /* Float the buttons side by side */
    };
    return (
        <div>
            <button style={style} onClick={() => {
                this.timer(pomodoroTime);
            }}
            >{this.props.description}
            </button>
             <span> YOU HAVE: {this.state.counter}</span>
        </div>

    )
  }

}

export default Timer