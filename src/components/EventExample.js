import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { LargeMenu } from './LargeMenu';
import { LargeSearch } from './LargeSearch';
import { SearchBox } from './SearchBox';
import EventItemsList from './EventItemsList';

export function EventExample(props) {
    return (
        <div>
            <nav className="nav-sm">
                <ul>
                    <li><a href="#/">Home</a></li>
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

                    <LargeSearch />

                </div>

                <SearchBox />

                <div className="title">
                    <div className="component">
                        <h2>Exhibit: History of Costume</h2>
                    </div>
                </div>

                <div className="about">
                    <div className="component">
                        <h3>Description</h3>
                        <p>
                            Come on over to Allen Library to see Kat Lewis' newest exhibit on fashion throughout the ages! See old fashion magazines and learn about the fashion revolutionaries of the past.
                        </p>
                        <h3>Date and Time</h3>
                        <p>Date: TUE, May 02</p>
                        <p>Time: 2:00 - 4:00 pm</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}