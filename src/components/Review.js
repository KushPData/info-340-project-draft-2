import React from 'react';
import { Header } from './Header';
import { LargeMenu } from './LargeMenu';
import { LargeSearch } from './LargeSearch';
import { SearchBox } from './SearchBox';
import { Footer } from './Footer';
import { UploadFormItem } from './UploadFormItem';

export function Review(props) {
    return (
        <div>
            <nav className="nav-sm">
                <ul>
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/">Calendar</a></li>
                    <li><a href="#/">Upload</a></li>
                    <li><a href="#/" className="active">Review</a></li>
                </ul>
            </nav>
            <Header />
            <main>
                <div className="main-box-lg">

                    <div className="my-events">
                        <h2>Upload Events</h2>
                    </div>

                    <LargeMenu />

                    <LargeSearch />
                </div>

                <SearchBox />
            </main>
            <Footer />
        </div>
    )
}