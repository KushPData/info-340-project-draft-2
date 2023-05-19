import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function Upload(props) {
    return (
        <div>
            <nav className="nav-sm">
                <ul>
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/">Calendar</a></li>
                    <li><a href="#/" className="active">Upload</a></li>
                    <li><a href="#/">Review</a></li>
                </ul>
            </nav>
            <Header />
            <main>
                <div className="main-box-lg">

                    <div className="my-events">
                        <h2>Upload Events</h2>
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

                <form className="upload-form-container">
                    <div className="upload-form-item">
                        <h2>
                            Upload Event Here
                        </h2>
                    </div>
                    <div className="upload-form-item">
                        <label for="name">Club/Organization Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>

                    <div className="upload-form-item">
                        <label for="event">Event Title:</label>
                        <input type="text" id="event" name="event" />
                    </div>

                    <div className="upload-form-item">
                        <label for="descript">Event Description:</label>
                        <input type="text" id="descript" name="descript" />
                    </div>

                    <div className="upload-form-item">
                        <label for="date">Event Date:</label>
                        <input type="text" id="date" name="date" />
                    </div>

                    <div className="upload-form-item">
                        <label for="time">Event Time:</label>
                        <input type="text" id="time" name="time" />
                    </div>

                    <div className="upload-form-item">
                        <label for="key">Club/Organization Key:</label>
                        <input type="text" id="key" name="key" />
                    </div>

                    <div className="upload-form-item">
                        <button type="submit">Submit Event</button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    )
}