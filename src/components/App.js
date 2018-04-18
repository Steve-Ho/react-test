import React from 'react';
import GoogleMap from './GoogleMap';
import Instagram from './Instagram';
import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="about-us">
                    <div>
                        <hr/>
                    </div>
                    <div className="text">
                        <p>ABOUT US</p>
                    </div>
                    <div>
                        <hr/>
                    </div>
                </div>
                
                <div className="follow-us">
                    <p>Follow Us &rarr;</p>
                </div>
                <div className="map">
                    <GoogleMap/>
                </div>
                <div className="gallery">
                    <Instagram/>
                </div>
            </div>
        )
    }
}

