import React from 'react';
import './App.css';

import Watch from "./Components/Watch";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faClock, faAngleLeft, faTrash, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faClock, faAngleLeft, faTrash, faTimesCircle);

const App = () =>
    <Watch/>;

export default App;



