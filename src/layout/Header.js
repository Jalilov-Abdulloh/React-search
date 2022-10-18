import React from 'react';

function Header(props) {
    return (
        <div>
            <nav>
                <div className="nav-wrapper header-nav">
                    <a href="#" className="brand-logo">React</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Movie</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;