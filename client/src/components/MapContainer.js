import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        const containerStyle = {
            position: 'relative',
            width: '100%',
            height: '100%'
        };
        return (
            <Map
                containerStyle={containerStyle}
                google={this.props.google}
                zoom={13}
                style={{ width: '100%', height: '40vh' }}
                initialCenter={{ lat: -33.9089193, lng: 18.4146636 }}
            >
                <Marker
                    position={{ lat: -33.9089193, lng: 18.4146636 }}
                    desc="a lovely place"
                />
                <Marker position={{ lat: -33.9039856, lng: 18.4138113 }} />
                <Marker position={{ lat: -33.9019856, lng: 18.4138205 }} />
                <Marker position={{ lat: -33.9059193, lng: 18.4126636 }} />
                <Marker position={{ lat: -33.9000193, lng: 18.4116636 }} />
                <Marker position={{ lat: -33.911, lng: 18.4206636 }} />
                <Marker position={{ lat: -33.9220741, lng: 18.4204929 }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAnIQHmVqaPCdBNPkV-FZ_wR2sCiu1CUfc'
})(MapContainer);
