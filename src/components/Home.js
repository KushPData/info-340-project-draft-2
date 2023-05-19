import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { LargeMenu } from './LargeMenu';
import EventItemsList from './EventItemsList';

export function Home(props) {
    return (
        <div>
            <nav className="nav-sm">
                <ul>
                    <li><a href="#/" className="active">Home</a></li>
                    <li><a href="#/">Calendar</a></li>
                    <li><a href="#/">Upload</a></li>
                    <li><a href="#/">Review</a></li>
                </ul>
            </nav>
            <Header />
            <main>
                <div className="main-box-lg">

                    <div className="my-events">
                        <h2>My Events</h2>
                    </div>

                    <LargeMenu />

                    <div className="lg-search">
                        <label className="search-key" for="search-id">Search: </label>
                        <input id="search-id" className="search-engine" type="search" name="search" />
                    </div>
                </div>

                <div className="search-box">
                    <label for="search-id">Search: </label>
                    <input id="search-id" className="search-engine" type="search" name="search" />
                </div>


                <div className="my-events-container">
                    <div className="my-events">
                        <h2>My Events</h2>
                    </div>
                </div>

                <div className="upcoming-events-container">
                    <div className="events-title">
                        <h3>Upcoming Events</h3>
                    </div>
                    <EventItemsList events={props.events} />
                </div>

                <div className="past-events-container">
                    <div className="events-title">
                        <h3>Past Events</h3>
                    </div>
                    <EventItemsList events={props.pastEvents} />
                </div>
            </main>
            <Footer />
        </div>
    );
}