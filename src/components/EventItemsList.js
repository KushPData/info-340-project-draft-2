import React from 'react';

function EventCard(props) {
    return (
        <div className="events-item">
            <div className="event-name">
                <p>{props.eventData.name}</p>
            </div>
            <div className="event-date">
                <p>{props.eventData.date}</p>
            </div>
        </div>
    );
}

function EventItemsList(props) {
    return (
        <div>
            <div>
                {props.events.map((event) => (
                    <EventCard key={event.name} eventData={event} />
                ))}
            </div>
        </div>
    );
}

export default EventItemsList;