import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import SAMPLE_EVENTS from './data/events.json';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App events={SAMPLE_EVENTS}/>
    </React.StrictMode>
);