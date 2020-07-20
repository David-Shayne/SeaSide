import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import baselineSearch from '@iconify/icons-ic/baseline-search';
import baselineCalendarToday from '@iconify/icons-ic/baseline-calendar-today';
import DatePicker from './DatePicker';
import M from 'materialize-css';
import { connect } from 'react-redux';
import {
    getSearchNames,
    clearSearchCategories
} from '../actions/propertyActions';
import cove from '../img/cove.png';
import red from '../img/red.png';
import blue from '../img/blue.png';
import BookBtn from './BookBtn';

export class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            set_pushpin: ''
        };

        this.onChange = this.onChange.bind(this);
        this.initPushpin = this.initPushpin.bind(this);
    }

    componentDidMount() {
        M.FormSelect.init(document.querySelectorAll('select'));
        M.Modal.init(document.querySelector('.modal'));

        const sticky = document.querySelector('.navbar-container');
        window.onscroll = () => {
            if (window.pageYOffset >= sticky.offsetTop) {
                this.setState({ set_pushpin: 'sticky' });
            }
            if (window.pageYOffset < 100) {
                this.setState({ set_pushpin: '' });
            }
            console.log('scrolling');
        };
    }

    onChange(e) {
        this.setState({ name: e.target.value });
    }

    initPushpin() {}
    render() {
        const properties = this.props.properties.map(
            ({ img, description, _id, location, category, name }) => (
                <div className="property-item card" key={_id}>
                    <div className="title">
                        <h4>{`${name}, ${
                            location ? 'City' : 'Country'
                        }, Cape Town`}</h4>
                        <img
                            src={
                                category === 'cove'
                                    ? cove
                                    : category === 'red'
                                    ? red
                                    : blue
                            }
                            alt=""
                            className="logo"
                        />
                    </div>
                    <div className="content">
                        <div className="img">
                            <img src={img} alt="" />
                        </div>
                        <div className="desc-section">
                            <div className="desc-container">
                                <div className="line"></div>
                                <div className="desc">
                                    <p>{description}</p>
                                </div>
                            </div>

                            <BookBtn />
                        </div>
                    </div>
                </div>
            )
        );
        return (
            <div className="">
                <div className={`navbar-container ${this.state.set_pushpin}`}>
                    <div className={`container-small`}>
                        <div className="field">
                            <Icon
                                icon={baselineSearch}
                                className="icon"
                                width="1.2rem"
                            />
                            <div
                                class="input-field"
                                style={{ margin: '0.33rem 0' }}
                            >
                                <input
                                    style={{ margin: '0' }}
                                    value={this.state.name}
                                    onChange={e => this.onChange(e)}
                                    type="text"
                                    placeholder="Destination Name"
                                />
                            </div>
                        </div>
                        <div className="field">
                            <Icon
                                icon={baselineCalendarToday}
                                className="icon icon-cal"
                                width="1.2rem"
                            />
                            <DatePicker />
                        </div>
                        <div className="field">
                            <div
                                class="input-field"
                                style={{ margin: '0.33rem 0' }}
                            >
                                <select>
                                    <option disabled selected>
                                        Occupancy
                                    </option>
                                    <option value="1">1-2 Adults</option>
                                    <option value="3">3-5 Adults</option>
                                    <option value="5">5+ Adults</option>
                                </select>
                            </div>
                        </div>
                        <div className="field">
                            <button
                                className="search-btn modal-trigger"
                                data-target="property-modal"
                                onClick={() =>
                                    this.props.getSearchNames(this.state.name)
                                }
                            >
                                SEARCH
                            </button>
                        </div>
                    </div>
                </div>

                <div id="property-modal" class="modal">
                    <div class="modal-content">{properties}</div>
                    <div class="modal-footer">
                        <a
                            href="#!"
                            class="modal-close waves-effect waves-green btn-flat"
                        >
                            CLOSE
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStoreToProps = store => ({
    properties: store.property.searchProperties
});

export default connect(mapStoreToProps, {
    getSearchNames,
    clearSearchCategories
})(Search);
