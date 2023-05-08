import React from 'react';
import "./owners.css";

function Header() {
    return (
        <header className="header">
            <div className = "container">
                <div className = "row">
                    <div className = "col-6">
                        <div className="header__content">
                            <div className="text-container">
                                <div className = "header-section">
                                    <h2>Hello, I am</h2>
                                    <h1>Rick Szeto</h1>
                                    <p>Established in 1980.

My dad started this business when after we landed on American soil back in 1980. We didn’t know what the American dream was, but my dad just taught us from the beginning to be honest and reliable. He believe if you treat your customer right, your customer will reward with loyalty and respect. That’s how this company got its start and now I am honored and privileged to carry on the legacy and traditions.</p>
                                </div>

                                <div className="header__buttons">
                                    <a href="header" className = "btn btn-outline">
                                        Hire Us
                                    </a>

                                </div>

                            </div>

                        </div>


                    </div>
                    <div className="col-6">
                        <div className="image-container">
                            <img src="../merick.jpg" alt="" className="image" />
                        </div>
                    </div>

                </div>
            </div>


        </header>
    )
}

export default Header