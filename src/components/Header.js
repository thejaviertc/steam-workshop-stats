// Basic
import React, { Component } from "react";

// Header Component
class Header extends Component {
    render() {
        return (
            <section id="header" className="bg-primary">
                <div className="container">
                    <h1 className="text-center">Steam Workshop Statistics</h1>
                    <h2 className="text-center">Stats of all Users in Steam Workshop</h2>
                    <div className="d-flex justify-content-center pt-3">
                        <a className="btn btn-primary mx-2" href="https://github.com/thejaviertc/steam-workshop-stats" role="button"><i className="fab fa-github"></i> Github</a>
                        <a className="btn btn-primary mx-2" href="#statistics" role="button">Let's Go <i className="fas fa-arrow-down"></i></a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;