import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';


import TimerOption from "./TimerOption";


class NewPomodoroTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { minutes: "00", seconds: "00" };
    }

    handleChangeTimer = (e) => this.setState({ timer: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();
        const minutes = (+this.state.minutes + +this.state.seconds / 60);
        this.props.onSubmit(minutes);
        this.setState({ minutes: "00", seconds: "00" });
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit} type="reset">
                <FormLabel>
                    <Input type="text" inputProps={{size: 2}} value={this.state.minutes} onChange={(e) => this.setState({ minutes: e.target.value })} />
                    :
                    <Input type="text" inputProps={{size: 2}} value={this.state.seconds} onChange={(e) => this.setState({ seconds: e.target.value })} />
                </FormLabel>
                <Input type="submit" value="Add" />
            </form>
        );
    }
};

export default NewPomodoroTimer;