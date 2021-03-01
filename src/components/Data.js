// Basic
import React, { Component } from "react";

// Data Component
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            numberAddons: null,
            steamName: null,
            addonInfo: [],
            userStats: []
        };
        this.end = React.createRef();
    }

    async fetchData() {
        await fetch(`https://javiertcs-api.herokuapp.com/api/steam-workshop-stats?${this.props.username}`).then(res => res.json()).then((result) => {
            this.setState({
                numberAddons: result.numberAddons,
                steamName: result.steamName,
                steamImage: result.steamImage,
                addonInfo: result.addonInfo,
                userStats: result.userStats
            });
        })
        this.setState({ loading: true });
    }

    scrollToBottom = () => {
        this.end.current.scrollIntoView({ behavior: 'smooth' })
    }

    async componentDidMount() {
        await this.fetchData();
        await this.scrollToBottom();
    }

    componentDidUpdate(prevProps) {
        if (this.props.steamId !== prevProps.steamId) {
            this.fetchData();
        }
    }

    render() {
        return (
            <div className="pt-5">
                <div ref={this.end} />
                { this.state.loading ? (
                    <div>
                        <h2 className="text-center">Statistics of {this.state.steamName}</h2>
                        <img src={this.state.steamImage} className="img-fluid mx-auto d-block py-3" alt="" />
                        <p className="text-center">
                            <span className="badge badge-info mx-2 my-2">Total Views: {this.state.userStats.totalViewers}</span>
                            <span className="badge badge-dark mx-2 my-2">Total Subs: {this.state.userStats.totalSubs}</span>
                            <span className="badge badge-dark mx-2 my-2">Total Life Subs: {this.state.userStats.totalLifeSubs}</span>
                            <span className="badge badge-success mx-2 my-2">Total Favorites: {this.state.userStats.totalFavs}</span>
                            <span className="badge badge-success mx-2 my-2">Total Life Favorites: {this.state.userStats.totalLifeFavs}</span>
                        </p>
                        <h2 className="text-center pt-4">Addons of {this.state.steamName}</h2>
                        { this.state.addonInfo.length ? (
                            <div className="card-columns pt-5">
                                {this.state.addonInfo.map((data, i) => {
                                    if (this.state.addonInfo.length > 0) {
                                        return (
                                            <div key={'addon_' + i} className="card bg-info" >
                                                <img className="card-img-top p-1" src={data.image} alt="Logo" />
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">{data.title}</h5>
                                                    <p className="text-center">
                                                        <span className="badge badge-info mx-2 my-2">Views: {data.views}</span>
                                                        <span className="badge badge-dark mx-2 my-2">Subs: {data.subs}</span>
                                                        <span className="badge badge-dark mx-2 my-2">Life Subs: {data.lifeSubs}</span>
                                                        <span className="badge badge-success mx-2 my-2">Favorites: {data.favs}</span>
                                                        <span className="badge badge-success mx-2 my-2">Life Favorites: {data.lifeFavs}</span>
                                                    </p>
                                                    <div className="d-flex justify-content-center">
                                                        <a href={data.url} target="_blank" rel="noreferrer" className="btn btn-info">See Addon</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>
                        ) : (
                                <h3 className="text-center pt-4">There are no addons avaible!</h3>
                            )
                        }
                    </div>
                ) : (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Data;