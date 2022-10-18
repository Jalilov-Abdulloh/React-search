import React from 'react';

function Footer(props) {
    return (
        <div>

            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="container1">
                        © {new Date().getFullYear()} Copyright Text
                        <a className="grey-text text-lighten-4 movie" href="#!">Movie</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Footer;