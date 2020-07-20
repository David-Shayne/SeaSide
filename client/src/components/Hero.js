import React, { Component } from 'react';
import '../css/hero.css';
import M from 'materialize-css';
import heroImg from '../img/hero.jpg';

export class Hero extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);
    }
    render() {
        return (
            <div>
                <div className="parallax-container">
                    <div class="parallax">
                        <img src={heroImg} alt="Cape Town" />
                    </div>
                    <div className="container-small description">
                        <h1>Cape Town</h1>
                        <p>
                            Fall in love with the beauty of Cape Town, stunning
                            from sea to sky. A unique destination which brings
                            together diverse cultures, cuisines and landscapes,
                            crowned by the legendary Table Mountain.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;
