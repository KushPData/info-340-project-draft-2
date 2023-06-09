import React from 'react';
import { Header } from './Header';
import { LargeMenu } from './LargeMenu';
import { LargeSearch } from './LargeSearch';
import { SearchBox } from './SearchBox';
import { Footer } from './Footer';
import { UploadFormItem } from './UploadFormItem';

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

                    <LargeMenu />

                    <LargeSearch />
                </div>

                <SearchBox />

                <form className="upload-form-container">
                    <div className="upload-form-item">
                        <h2>
                            Upload Event Here
                        </h2>
                    </div>

                    <div>
                        {props.list.map((name) => 
                            (<UploadFormItem name={name} />)
                        )}
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