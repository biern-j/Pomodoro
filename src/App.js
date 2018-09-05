import React from 'react';
import './App.css';

import Watch from "./Components/Watch";
import Header from "./Components/Heder";
import Setting from "./Components/Setting";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { onClick: false, headerDescription: "Watch" };
        this.setView = this.setView.bind(this);
    }

    setView() {
        this.setState({ onClick: !this.state.onClick });
        console.log("state", this.state.onClick);
        if(this.state.onClick === true) {
             this.setState({ headerDescription: "Setting" });
        }
        else {
             this.setState({ headerDescription: "Watch" });
        }

    }

    render() {
        return (
            <div>
                <Header onClick={this.setView} headerDescription={this.state.headerDescription}/>
                {this.state.onClick === true ? <Setting/> :     <Watch/>}
            </div>
        );
    }
}


export default App;
