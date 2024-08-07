import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <a
                        href="https://github.com/Uday124/react-shopping-cart"
                        className="repo_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/Uday124/react-shopping-cart
                    </a>

                    <p>
                        Built by | &nbsp;
                        <a
                            href="https://react-shopping-cart-info.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Gulshan Songara
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
