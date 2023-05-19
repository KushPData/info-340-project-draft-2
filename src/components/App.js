import React from 'react';
import { Home } from './Home';
import { Calendar } from './Calendar';

function App(props) {
    return (
        <div>
            {/* <Home events={props.events} pastEvents={props.pastEvents}/> */}
            <Calendar />
            {/* <Upload /> */}
            {/* <Review /> */}
        </div>
    )
}

export default App;