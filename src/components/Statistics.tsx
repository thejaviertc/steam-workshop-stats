// Basic
import React, { Component } from "react";

// Components
import Data from "./Data";

// Props Interface
interface StatisticsProps {
}

// State Interface
interface StatisticsState {
    isSubmitted: boolean | any,
    steamId: string
}

// Statistics Component
class Statistics extends Component<StatisticsProps, StatisticsState> {
    private input: React.RefObject<HTMLInputElement>;

    constructor(props: StatisticsProps) {
        super(props);
        this.state = {
            isSubmitted: false,
            steamId: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event: any) {
        this.setState({ isSubmitted: true, steamId: this.input.current!.value });
        event.preventDefault();
    }

    render() {
        return (
            <section id="statistics" className="bg-secondary py-5" >
                <div className="container">
                    <h3 className="text-center">Enter a Steam Profile URL</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group d-flex justify-content-center">
                            <input type="text" className="form-control text-center my-4" style={{ width: "70%" }} ref={this.input} placeholder="Steam Profile URL" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-secondary">Submit</button>
                        </div>
                    </form>
                    {this.state.isSubmitted && <Data username={this.state.steamId} />}
                </div>
            </section>
        );
    }
}

export default Statistics;