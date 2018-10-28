import React from 'react';

import TimerOption from "./TimerOption";


//TODO:
// user can choose his own avatar, which will be showed after pomodoro's timer end.
// user can add new  pomodoro's timer with pomodoro's timers values

class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timer: "", description: "" , timers: []};
    }

    setPomodoroTimer = (e) =>{
        this.setState({ timer: e.target.value });
    };

    setPomodoroDescription = (e) => {
        this.setState({ description: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ timers: this.state.timers.concat(<TimerOption timePeriod={this.state.timer} description={this.state.description} onClick={ () => this.onClick}/>)})
    };

    render(){
        return (
            <div>
                <div>
                    Twój wybór
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        SET YOUR POMODORO TIMER:
                        <input type="text" value={this.state.timer} onChange={this.setPomodoroTimer}/>
                    </label>
                    <label>
                        SET DESCRIPTION:
                        <input type="text" onChange={this.setPomodoroDescription}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <div>
                    {this.state.timers}
                </div>
            </div>
            )
        }
    }

    export default Setting