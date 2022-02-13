// Basic
import { Component } from "react";

// Components
import Statistics from "../components/Statistics";

export default class Home extends Component {
    render() {
        return (
            <div>
                <section id="header" className="fullpage bg-primary">
                    <div className="container">
                        <h1 className="text-center">Steam Workshop Statistics</h1>
                        <h2 className="text-center">Stats of all Users in Steam Workshop</h2>
                        <div className="d-flex justify-content-center pt-3">
                            <a className="btn btn-secondary mx-2" href="https://github.com/thejaviertc/steam-workshop-stats" role="button"><i className="fa-brands fa-github"></i> Github</a>
                            <a className="btn btn-secondary mx-2" href="#statistics" role="button">Let's Go <i className="fa-solid fa-angle-down"></i></a>
                        </div>
                    </div>
                </section>
                <Statistics />
            </div>
        );
    }
}