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
                </div>
            </section>
        );
    }
}

export default Header;