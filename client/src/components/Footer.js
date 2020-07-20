import React, { Component } from 'react';
import '../css/footer.css';
import { Icon } from '@iconify/react';
import github from '@iconify/icons-ant-design/github-filled';
import linkedin from '@iconify/icons-ant-design/linkedin-filled';
import whatsapp from '@iconify/icons-ant-design/message-filled';
import gmail from '@iconify/icons-ant-design/mail-filled';
import M from 'materialize-css';

export class Footer extends Component {
    componentDidMount() {
        M.Tooltip.init(document.querySelector('.tooltip'));
    }
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="contact">
                        <h5>Contact SeaSide Hotels</h5>
                        <button
                            className="tooltip"
                            data-position="right"
                            data-tooltip="Email: davidmshayne.jftd@gmail.com"
                        >
                            Need Help?
                        </button>
                    </div>
                    <div className="line"></div>
                    <div className="social">
                        <h5>Contact us on social media</h5>
                        <div className="social-imgs">
                            <a
                                href="https://github.com/David-Shayne"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon icon={github} width="1.5rem" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/david-shayne-b8a923189/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon icon={linkedin} width="1.5rem" />
                            </a>
                            <a
                                href="https://wa.me/27609835400"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon icon={whatsapp} width="1.5rem" />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=davidmshayne.jftd@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon icon={gmail} width="1.5rem" />
                            </a>
                        </div>
                    </div>
                    <div className="line"></div>

                    <div className="deals">
                        <h5>Never miss out on our deals!</h5>
                        <div className="deal-form">
                            <div className="input-field">
                                <input type="text" placeholder="Email" />
                            </div>
                            <button
                                className="subscribe-btn"
                                onClick={() =>
                                    M.toast({ html: 'Successfully Subscribed' })
                                }
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
