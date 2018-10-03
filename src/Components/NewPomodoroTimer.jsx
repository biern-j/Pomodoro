import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';


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
                <FormLabel>
                    NEW TIMER
                <Input type="text" value={this.state.timer} onChange={this.handleChangeTimer} />
                    </FormLabel>
                <FormLabel>
                    NEW TIMER DESCRIPTION
                <Input type="text" value={this.state.description} onChange={this.handleChangeDescription} />
                </FormLabel>
                <Input type="submit" value="Submit" />
            </form>
                <Typography>
                    {this.state.timers}
                </Typography>
            </div>
        );
    }
};

export default NewPomodoroTimer;