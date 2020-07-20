import React, { Component } from 'react';
import '../css/navbar.css';
import NavbarTop from './NavbarTop';
import NavbarBottom from './NavbarBottom';
import Search from './Search';

export class NavbarFull extends Component {
    render() {
        return (
            <div>
                <NavbarTop />
                <NavbarBottom />
                <Search />
            </div>
        );
    }
}

export default NavbarFull;
