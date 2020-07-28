import React, { Component } from 'react';
import M from 'materialize-css';

export class NavbarBottom extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);

        var elems = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(elems);
    }
    render() {
        return (
            <div>
                <div className="navbar-native bottom">
                    <div className="nav-flex">
                        <a data-target="sign-up" class="modal-trigger member">
                            <u>Become a member</u> in just one click
                        </a>
                        <div className="right-container">
                            <div className="link user">
                                <a
                                    className="modal-trigger sign-in"
                                    data-target="sign-in"
                                >
                                    Sign In
                                </a>
                                <a data-target="sign-up" class="modal-trigger">
                                    Join
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="sign-up" class="modal">
                    <div class="modal-content">
                        <h3>Sign Up!</h3>
                        <p>
                            Become a part of our adventure today and reap the
                            rewards
                        </p>
                        <form>
                            <div className="input-field">
                                <label>Username</label>
                                <input type="text" />
                            </div>
                            <div className="input-field">
                                <label>Email</label>
                                <input type="text" />
                            </div>
                            <div className="input-field">
                                <label>Phone</label>
                                <input type="text" />
                            </div>
                            <div className="input-field">
                                <label>Password</label>
                                <input type="password" />
                            </div>

                            <div class="switch">
                                <label>
                                    Subscribe to our newsletter?
                                    <input type="checkbox" defaultChecked />
                                    <span class="lever"></span>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button
                            className="btn-flat modal-close"
                            onClick={() =>
                                M.toast({ html: 'Successfully Signed Up!' })
                            }
                        >
                            SUBMIT
                        </button>
                        <a
                            href="#!"
                            className="modal-close waves-effect waves-green btn-flat"
                        >
                            CANCEL
                        </a>
                    </div>
                </div>
                <div id="sign-in" class="modal">
                    <div class="modal-content">
                        <h3>Sign In!</h3>
                        <p>Log back into your account</p>
                        <form>
                            <div className="input-field">
                                <label>Username / Email</label>
                                <input type="text" />
                            </div>
                            <div className="input-field">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button
                            className="btn-flat modal-close"
                            onClick={() => M.toast({ html: 'Coming Soon!' })}
                        >
                            SIGN IN
                        </button>
                        <a
                            href="#!"
                            class="modal-close waves-effect waves-green btn-flat"
                            onClick={() =>
                                M.toast({ html: 'Successfully Signed Up!' })
                            }
                        >
                            CANCEL
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavbarBottom;
