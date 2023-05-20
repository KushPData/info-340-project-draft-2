import React from 'react';
import { useState } from 'react';

export function ReviewForm(props) {
    const [typedValue, setTypedValue] = useState('');
    const howToAddAMessage = props.howToAddAMessage;
    const userObj = props.currentUser;

    const handleClick = (event) => {
        setTypedValue('');

        howToAddAMessage(userObj, typedValue);
    }

    const handleChange = (event) => {
        const whatUserTyped = event.target.value;
        setTypedValue(whatUserTyped);
    }

    return (
        <>
            <form className="upload-form-container">
                <div className="upload-form-item">
                    <h2>Add a Review</h2>
                </div>
                <div className="upload-form-item">
                    <textarea onChange={handleChange} value={typedValue} placeholder="Enter your review here"></textarea>
                    <button onClick={handleClick} type="button">
                        <span className="material-icons">Post</span>
                    </button>
                </div>
                <div className="upload-form-item">
                    <p>Please post your review in the following format:</p>
                    <p>Name of the Event - *Rating from 1 to 5* - *Your comments*</p>
                </div>
            </form>
        </>
    );
}