import React from 'react';
import { Header } from './Header';
import { LargeMenu } from './LargeMenu';
import { LargeSearch } from './LargeSearch';
import { SearchBox } from './SearchBox';
import { Footer } from './Footer';
import MonthCalendar from '../images/example-month-calendar.png';
import DayCalendar from '../images/example-day-calendar.png';

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

                    <LargeMenu />

                    <LargeSearch />
                </div>

                <SearchBox />

                <div className="calendar-container">
                    <div className="calendar-item">
                        <img className="month-calendar" src={MonthCalendar} alt="calendar in month layout of may 2023" />
                    </div>
                </div>

                <div class="calendar-container">
                    <div class="calendar-item">
                        <img class="day-calendar" src={DayCalendar} alt="calendar in day layout of may 2023" />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}