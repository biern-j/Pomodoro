import React from 'react';
import './App.css';

import Watch from "./Components/Watch";
import Header from "./Components/Heder";
import Setting from "./Components/Setting";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faClock, faAngleLeft, faTrash, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faClock, faAngleLeft, faTrash, faTimesCircle);

const App = () =>
    <Watch/>;

export default App;


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { onClick: false, headerDescription: "Watch" };
//         this.setView = this.setView.bind(this);
//     }
//
//     setView() {
//         this.setState({ onClick: !this.state.onClick });
//         console.log("state", this.state.onClick);
//         if(this.state.onClick === true) {
//              this.setState({ headerDescription: "Setting" });
//         }
//         else {
//              this.setState({ headerDescription: "Watch" });
//         }
//
//     }
//
//     render() {
//         return (
//             <div>
//                 <Header onClick={this.setView} headerDescription={this.state.headerDescription}/>
//                 {this.state.onClick === true ? <Setting/> :     <Watch/>}
//             </div>
//         );
//     }
// }



