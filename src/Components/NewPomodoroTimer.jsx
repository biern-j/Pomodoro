import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';


import Timer from "./Timer";


class NewPomodoroTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timer: "", timers: [] };
    }

    handleChangeTimer = (e) => this.setState({ timer: e.target.value});

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ timers: this.state.timers.concat(
            <Timer
                timePeriod={this.state.timer}
                onClick={ (e) => this.props.onClick(e, this.state.timer)}
            />)});
    };

    render() {
        return(
            <form onSubmit={(e) => this.props.onSubmit(this.handleSubmit(e))}>
                <FormLabel>
                    NEW TIMER
                <Input type="text" value={this.state.timer} onChange={(e) => {
                    this.props.handleNewTimer(e.target.value);
                    this.handleChangeTimer(e);
                }
                } />
                    </FormLabel>
                <Input type="submit" value="Submit" />
            </form>
        );
    }
};

export default NewPomodoroTimer;