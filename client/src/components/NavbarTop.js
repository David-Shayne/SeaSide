import React, { Component } from 'react';
import logo from '../img/logo.svg';

export class NavbarTop extends Component {
    state = {
        height: 0
    };

    componentDidMount() {
        this.setState({ height: document.querySelector('.link').clientHeight });
    }

    render() {
        return (
            <div>
                <div
                    className="gradient hide-on-small-only"
                    style={{ height: this.state.height }}
                ></div>
                <div className="navbar-native">
                    <div className="nav-flex">
                        <img src={logo} alt="SeaSide Hotels" className="logo" />
                        <div className="right-container hide-on-small-only">
                            <div className="link">
                                <p>Reservations: +27 (0)21 789 0411</p>
                                <a href="#FAQ">FAQ</a>
                            </div>
                            <div className="link">
                                <a href="#Brands">Brands</a>
                                <a href="#Destinations">Destinations</a>
                                <a href="#Deals">Deals</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavbarTop;
