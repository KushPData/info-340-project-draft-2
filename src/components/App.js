import React from 'react';
import { Home } from './Home';
import { Calendar } from './Calendar';
import { Upload } from './Upload';
import { Review } from './Review';

function App(props) {
    return (
        <div>
            {/* <Home events={props.events} pastEvents={props.pastEvents} images={props.images}/>*/}
            {/* <Calendar images={props.images}/> */}
            {/* <Upload list={props.uploadEventsList} images={props.images}/> */}
            <Review images={props.images}/> 
        </div>
    )
}

export default App;