import React, { Component } from 'react';
import LocationSelector from './LocationSelector';
import Properties from './Properties';
import '../css/propertiesSection.css';

export class PropertiesSection extends Component {
    render() {
        return (
            <div
                className="container properties-section"
                style={{ display: 'flex' }}
            >
                <LocationSelector />
                <Properties />
            </div>
        );
    }
}

export default PropertiesSection;
