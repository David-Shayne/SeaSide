import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    removeProperty,
    getProperties,
    getCategory,
    clearAllCategories,
    clearLoading
} from '../actions/propertyActions';

export class LocationSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blue: true,
            red: false,
            cove: false
        };

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.updateProperty();
    }

    onChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.checked
            },
            () => {
                this.props.clearAllCategories();
                this.updateProperty();
            }
        );
    }

    updateProperty() {
        // if all categories unchecked, stop the loader
        var allUnChecked = true;
        for (var i in this.state) {
            if (this.state[i] === true) {
                allUnChecked = false;
                break;
            }
        }
        if (allUnChecked) {
            this.props.clearLoading();
        }

        // if category is not checked, remove property category type
        for (let key in this.state) {
            if (this.state.hasOwnProperty(key)) {
                if (this.state[key]) {
                    this.props.getCategory(key);
                }
            }
        }
    }
    render() {
        return (
            <div className="selector-container">
                <div className="selector">
                    <h5>I would like to stay at...</h5>
                    <div class="switch">
                        <label>
                            <input
                                type="checkbox"
                                name="blue"
                                checked={this.state.blue}
                                onChange={e => this.onChange(e)}
                            />
                            <span class="lever"></span>
                            Seaside Blue
                        </label>
                    </div>
                    <div class="switch">
                        <label>
                            <input
                                type="checkbox"
                                name="red"
                                checked={this.state.red}
                                onChange={e => this.onChange(e)}
                            />
                            <span class="lever"></span>
                            SeaSide Red
                        </label>
                    </div>
                    <div class="switch">
                        <label>
                            <input
                                type="checkbox"
                                name="cove"
                                checked={this.state.cove}
                                onChange={e => this.onChange(e)}
                            />
                            <span class="lever"></span>
                            SeaSide Cove
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {
    removeProperty,
    getProperties,
    getCategory,
    clearAllCategories,
    clearLoading
})(LocationSelector);
