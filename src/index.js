import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import EVENTS from './data/events.json';
import PAST_EVENTS from './data/pastEvents.json'
import UPLOAD_EVENTS_LIST from './data/uploadEventsList.json'
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App events={EVENTS} pastEvents={PAST_EVENTS} uploadEventsList={UPLOAD_EVENTS_LIST}/>
    </React.StrictMode>
);