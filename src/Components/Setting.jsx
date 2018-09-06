import React from 'react';

import TimerNoTonClick from "./TimerNotToClick";


//TODO:
// user can choose his own avatar, which will be showed after pomodoro's timer end.
// user can add new  pomodoro's timer with pomodoro's timers values

class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timer: "", description: "" };
    }

    setPomodoroTimer = (e) =>{
        this.setState({ timer: e.target.value });
    };

    setPomodoroDescription = (e) => {
        this.setState({ description: e.target.value });
    };

    handleSubmit = () => {

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
                        <input type="text" onChange={this.setPomodoroTimer}/>
                    </label>
                    <label>
                        SET PHOTO:
                        <input type="text" onChange={this.setPomodoroDescription}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <TimerNoTonClick timePeriod={this.state.timer} description={this.state.description} />
            </div>
            )
        }
    }

    export default Setting