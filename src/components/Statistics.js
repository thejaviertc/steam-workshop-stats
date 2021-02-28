// Basic
import React, { Component } from "react";

// Components
import Data from "./Data";

// Statistics Component
class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            steamId: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) {
        this.setState({ isSubmitted: true, steamId: this.input.current.value });
        event.preventDefault();
    }

    render() {
        return (
            <section id="statistics" className="bg-secondary py-5" >
                <div className="container">
                    <h3 className="text-center">Enter the User Profile URL</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group d-flex justify-content-center">
                            <input type="text" className="form-control text-center my-4" style={{ width: "70%" }} ref={this.input} placeholder="Enter Steam Profile URL" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    {this.state.isSubmitted && <Data username={this.state.steamId} />}
                </div>
            </section>
        );
    }
}

export default Statistics;