import React from 'react';
import { Header } from './Header';

export function Calendar(props) {
    return (
        <div>
            <nav className="nav-sm">
                <ul>
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/" className="active">Calendar</a></li>
                    <li><a href="#/">Upload</a></li>
                    <li><a href="#/">Review</a></li>
                </ul>
            </nav>
            <Header />
            <main>
                <div className="main-box-lg">

                    <div className="my-events">
                        <h2>Events Calendar</h2>
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

                <div className="calendar-container">
                    <div className="calendar-item">
                        <img className="month-calendar" src="../../public/example-month-calendar.png" alt="calendar in month layout of may 2023" />
                    </div>
                </div>

                <div class="calendar-container">
                    <div class="calendar-item">
                        <img class="day-calendar" src="../../public/example-day-calendar.png" alt="calendar in day layout of may 2023" />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}