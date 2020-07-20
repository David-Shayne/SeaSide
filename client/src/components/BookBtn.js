import React, { Component } from 'react';
import M from 'materialize-css';

export class BookBtn extends Component {
    componentDidMount() {
        M.Tooltip.init(document.querySelectorAll('.tooltip'));
    }
    render() {
        return (
            <button
                className="btn waves-effect red darken-2 tooltip"
                data-position="top"
                data-tooltip="Coming Soon!"
            >
                BOOK A ROOM &gt;
            </button>
        );
    }
}

export default BookBtn;
