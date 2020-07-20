import React, { Component } from 'react';
import cove from '../img/cove.png';
import red from '../img/red.png';
import blue from '../img/blue.png';
import { connect } from 'react-redux';
import BookBtn from './BookBtn';

export class Properties extends Component {
    constructor(props) {
        super(props);
        this.state = { class: '' };
    }

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
            <div className="properties">
                <div
                    hidden={!this.props.loading || !this.props.properties}
                    className={`loader ${this.props.loading ? '' : 'hidden'}`}
                >
                    <div class="preloader-wrapper big active">
                        <div class="spinner-layer spinner-blue-only">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div>
                            <div class="gap-patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {properties}
            </div>
        );
    }
}

const mapStoreToProps = store => ({
    properties: store.property.properties,
    loading: store.property.loading
});

export default connect(mapStoreToProps, {})(Properties);
