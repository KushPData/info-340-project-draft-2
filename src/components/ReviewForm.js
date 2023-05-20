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
        <form>
            <div>
                <textarea onChange={handleChange} value={typedValue} placeholder="Name of the event"></textarea>
                <textarea onChange={handleChange} value={typedValue} placeholder="Enter your review here"></textarea>
                <button onClick={handleClick} type="button">
                    <span className="material-icons">Post</span>
                </button>
            </div>
        </form>
    );
}