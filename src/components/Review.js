import React from 'react';
import { useState } from 'react';
import { Header } from './Header';
import { LargeMenu } from './LargeMenu';
import { LargeSearch } from './LargeSearch';
import { SearchBox } from './SearchBox';
import { Footer } from './Footer';
import { ReviewPane } from './ReviewPane';

export function Review(props) {
    const [messageObjArray, setMessageObjArray] = useState(props.currentReviews);
    const [currentUser, setCurrentUser] = useState({ userId: null, userName: null });

    const loginUser = (userObj) => {
        setCurrentUser(userObj);
    }

    const addMessage = (userObj, text) => {
        const newMessageObj = {
            "userId": userObj.userId,
            "text": text,
            "timestamp": Date.now()
        }

        const newMessageArray = [...messageObjArray, newMessageObj];
        setMessageObjArray(newMessageArray);
    }

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

                <div className="overview-reviews-container">
                    <ReviewPane currentUser={currentUser} messageArray={messageObjArray} howToAddAMessage={addMessage} />
                </div>
            </main>
            <Footer />
        </div>
    )
}