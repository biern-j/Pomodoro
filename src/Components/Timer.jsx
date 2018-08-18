import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.setTimer = this.setTimer.bind(this);
  }
  setTimer = (timePeriod) =>
    setTimeout(() => alert("to już"), timePeriod);
  render() {
    return (
      <div>
      <button onClick={this.setTimer(this.props.timePeriod)}></button>
      </div>
    )
  }

}

export default Timer