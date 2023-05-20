import React from 'react';
import { Home } from './Home';
import { Calendar } from './Calendar';
import { Upload } from './Upload';
import { Review } from './Review';

function App(props) {
    return (
        <div>
            <Home events={props.events} pastEvents={props.pastEvents} />
            {/* <Calendar /> */}
            {/* <Upload list={props.uploadEventsList} /> */}
            {/* <Review />  */}
        </div>
    )
}

export default App;