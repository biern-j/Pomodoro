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
        this.state = { ...initialState, error: false };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const minutes = (+this.state.minutes + +this.state.seconds / 60);
        typeof e === "number" ? this.props.onSubmit(minutes) : this.setState({ error: true });
        this.setState(initialState);
    };

    render() {
        return(
            <Container>
            <form onSubmit={this.handleSubmit} type="reset">
                <FormLabel>
                    <Input placeholder="00" type="text" inputProps={{size: 2}} value={this.state.minutes} onChange={(e) => this.setState({ minutes: e.target.value })} />
                    :
                    <Input placeholder="00" type="text" inputProps={{size: 2}} value={this.state.seconds} onChange={(e) => this.setState({ seconds: e.target.value })} />
                </FormLabel>
                <Input type="submit" value="Add" />
            </form>
                {this.state.error ? <Error>Invalid input</Error> : "Done"}
            </Container>
        );
    }
};


export default NewPomodoroTimer;