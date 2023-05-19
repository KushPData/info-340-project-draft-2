import React from 'react';
import { Home } from './Home';

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