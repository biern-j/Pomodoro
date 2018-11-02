import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import  styled from 'styled-components';

const Error = styled.div`
    color: red;
`;

const Container = styled.div``;

const initialState = { minutes: "", seconds: "" };

class NewPomodoroTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChangeMinute = (e) => {
        this.setState({ minutes: e.target.value });
    };

    handleChangeSecond = (e) => {
        this.setState({ seconds: e.target.value });
    };


    handleSubmit = (e) => {
        console.log("minutes after", parseInt(this.state.minutes, 10));
        console.log("seconds after", parseInt(this.state.seconds, 10));
        e.preventDefault();
        if(!this.hasError()) {
            const minutes = (+this.state.minutes + +this.state.seconds / 60);
            this.props.onSubmit(minutes);
            this.setState(initialState);
        };
    };

    hasError = () => {
        const isValid = (value) => (!isNaN(parseInt(value, 10)) || value === "");
        return (!isValid(this.state.minutes) || !isValid(this.state.seconds));
    };

    render() {
        return(
            <Container>
            <form onSubmit={this.handleSubmit} type="reset">
                <FormLabel>
                    <Input placeholder="00" type="text" inputProps={{size: 2}} value={this.state.minutes} onChange={(e) => this.handleChangeMinute(e)} />
                    :
                    <Input placeholder="00" type="text" inputProps={{size: 2}} value={this.state.seconds} onChange={(e) => this.handleChangeSecond(e)} />
                </FormLabel>
                <Input type="submit" value="Add" />
            </form>
                {this.hasError() ? <Error>Invalid input</Error> : ""}
            </Container>
        );
    }
};


export default NewPomodoroTimer;