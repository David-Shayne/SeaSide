import React, { Component } from 'react';
import '../css/description.css';
import MapContainer from './MapContainer';

export class Description extends Component {
    state = {
        isOpen: false
    };

    render() {
        return (
            <div className="container">
                <div className="desc">
                    <h4>Stay in our hotel to enjoy the beauty of Cape Town</h4>
                    <p>
                        The city offers a vibrant shopping district and
                        unmatched oceans views, making your stay memorable.
                        There are many ways to enjoy Cape Town; from exploring
                        its impressive wildlife to a hike on Table Mountain for
                        an exceptional view, the city is packed with endless
                        tourist attractions, beaches and wine estates. Finish
                        your day at one of the many trendy restaurants or bars
                        from the city and get to meet the friendly locals.
                    </p>
                </div>
                <div className="map-section">
                    <button
                        onClick={() =>
                            this.setState(state => ({ isOpen: !state.isOpen }))
                        }
                    >
                        {`${this.state.isOpen ? 'HIDE' : 'SHOW'} MAP`}
                    </button>
                    <div hidden={!this.state.isOpen} className="map-container">
                        <MapContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Description;
