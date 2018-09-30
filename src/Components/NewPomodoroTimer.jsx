import React from 'react';

import Timer from "./Timer";


class NewPomodoroTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timer: "", description: "", timers: [] };
    }

    handleChangeTimer = (e) => this.setState({ timer: e.target.value });

    handleChangeDescription = (e) => this.setState({ description: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ timers: this.state.timers.concat(
            <Timer
                timePeriod={this.state.timer}
                description={this.state.description}
                onClick={ (e) => this.props.onClick(e, this.state.timer)}
            />)});
    };

    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    NEW TIMER
                <input type="text" value={this.state.timer} onChange={this.handleChangeTimer} />
                    </label>
                <label>
                    NEW TIMER DESCRIPTION
                <input type="text" value={this.state.description} onChange={this.handleChangeDescription} />
                </label>
                <input type="submit" value="Submit" />
            </form>
                <div>
                    {this.state.timers}
                </div>
            </div>
        );
    }
};

export default NewPomodoroTimer;