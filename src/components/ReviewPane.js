import React from 'react';
import { useState } from 'react';
import { ReviewForm } from './ReviewForm';

export function ReviewPane(props) {
    const messageObjArray = props.messageArray;
    const howToAddAMessage = props.howToAddAMessage;
    const currentUser = props.currentUser;

    const messagesToShow = messageObjArray.sort((message1, message2) => message2.timestamp - message1.timestamp);

    const messageElemArray = messagesToShow.map((messageObj) => {
        const messageElem = <ReviewItem userName={messageObj.userName} text={messageObj.text} key={messageObj.timestamp} />
        return messageElem;
    });

    return (
        <>
            <div className="scrollable-pane">
                {messageObjArray.length === 0 && <p>No reviews found</p>}
                {messageElemArray}
            </div>

            <ReviewForm currentUser={currentUser} howToAddAMessage={howToAddAMessage} />
        </>
    )
}

function ReviewItem(props) {
    const userName = props.userName;
    const text = props.text;

    return (
        <div>
            <div>
                <p>{userName}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}
