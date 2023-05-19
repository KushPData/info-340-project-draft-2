import React from 'react';

export function Home(props) {
    return (
        <div>
            <Header />
            <main>
                <div className="main-box-lg">

                    <div className="my-events">
                        <h2>My Events</h2>
                    </div>

                    <nav className="lg-menu">
                        <ul>
                            <li><a href="#/">Home</a></li>
                            <li><a href="#/">Event Calendar</a></li>
                            <li><a href="#/">Upload Event</a></li>
                            <li><a href="#/">Reviews</a></li>
                        </ul>
                    </nav>

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
                </div>
            </main>
        </div>
    );
}