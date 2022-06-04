import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faAngleDown,
	faCircleInfo,
	faEye,
	faMagnifyingGlass,
	faStar,
	faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent } from "react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Card from "../components/Card";
import IAddon from "../interfaces/IAddon";
import ISteamUser from "../interfaces/ISteamUser";

interface AppState {
	isSubmitted: boolean;
	isLoading: boolean;
	oldUrl: string;
	url: string;
	steamUser: ISteamUser | null;
	errorMessage: string;
}

/**
 * App page
 */
export default class App extends React.Component<unknown, AppState> {
	// Point in HTML to move when loaded
	private end: React.RefObject<HTMLInputElement>;

	constructor(props: unknown) {
		super(props);
		this.state = {
			isSubmitted: false,
			isLoading: false,
			oldUrl: "",
			url: "",
			steamUser: null,
			errorMessage: "",
		};
		this.changeOnInput = this.changeOnInput.bind(this);
		this.submitSteamUser = this.submitSteamUser.bind(this);
		this.end = React.createRef();
	}

	/**
	 * Updates the url in the state when changes
	 * @param event
	 */
	private changeOnInput(event: FormEvent<HTMLInputElement>) {
		this.setState({ url: event.currentTarget.value });
	}

	/**
	 * Fetches all the information of the Steam User
	 */
	private async fetchSteamUser(): Promise<void> {
		// Starts showing the loading icon
		this.setState({
			oldUrl: this.state.url,
			errorMessage: "",
			isLoading: true,
			isSubmitted: false,
		});

		// Moves the view to the loader
		setTimeout(() => {
			this.moveViewToData();
		}, 100);

		const response = await fetch(
			`https://javiertcs-api.herokuapp.com/steam-workshop-stats?url=${this.state.url}`
		);
		const result = await response.json();

		if (response.status === 200) {
			this.setState({
				isLoading: true,
				steamUser: result,
			});
		} else {
			this.setState({
				errorMessage: result.message,
				steamUser: null,
			});
		}

		// Moves the view to the data
		this.setState({ isLoading: false, isSubmitted: true });
		setTimeout(() => {
			this.moveViewToData();
		}, 100);
	}

	/**
	 * Sends the input url to the API
	 * @param event
	 */
	private async submitSteamUser(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (this.state.oldUrl != this.state.url) await this.fetchSteamUser();
	}

	/**
	 * Moves the view to the data when is loaded
	 */
	private moveViewToData(): void {
		this.end.current?.scrollIntoView({ behavior: "smooth" });
	}

	render() {
		return (
			<div>
				<section id="home" className="fullpage bg-primary">
					<div className="container text-center">
						<h1>Steam Workshop Stats</h1>
						<h2>Stats of an user in Steam Workshop</h2>
						<div className="d-flex justify-content-center py-4">
							<Button
								icon={<FontAwesomeIcon icon={faGithub} />}
								text="Github"
								link="https://github.com/thejaviertc/steam-workshop-stats"
							/>
							<Button
								icon={<FontAwesomeIcon icon={faAngleDown} />}
								text={"Let's Go"}
								link="#form"
							/>
						</div>
					</div>
				</section>
				<section id="form" className="bg-secondary pt-5">
					<div className="container text-center">
						<h3>Enter a Steam Profile URL</h3>
						<form onSubmit={this.submitSteamUser}>
							<div className="form-group d-flex justify-content-center">
								<input
									type="text"
									className="form-control text-center my-4"
									style={{ width: "70%" }}
									placeholder="Steam Profile URL"
									onChange={this.changeOnInput}
								/>
							</div>
							<div className="d-flex justify-content-center">
								<button
									type="submit"
									className="btn btn-secondary"
								>
									<FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
									Get Stats
								</button>
							</div>
						</form>
					</div>
				</section>
				<section id="user" className="bg-secondary pb-5">
					<div className="container">
						{this.state.isLoading && (
							<div>
								<div className="d-flex justify-content-center pt-5">
									<div
										className="spinner-border"
										role="status"
									>
										<span className="sr-only"></span>
									</div>
								</div>
								<div
									className="alert alert-warning mt-4 text-center"
									role="alert"
								>
									<FontAwesomeIcon icon={faCircleInfo} />{" "}
									Disclaimer! If you see this, it is because
									the API is waking up (it will take very
									little)
								</div>
							</div>
						)}
						<div ref={this.end} />
						{this.state.isSubmitted && this.state.steamUser && (
							<div className="pt-5">
								<h2 className="text-center">
									{"Statistics of " +
										this.state.steamUser.username}
								</h2>
								<img
									src={this.state.steamUser.profileImage}
									className="img-fluid mx-auto d-block py-3"
									alt=""
								/>
								<p className="text-center">
									<Badge
										icon={<FontAwesomeIcon icon={faEye} />}
										title={
											"Total Views: " +
											this.state.steamUser.viewers
										}
										type="success"
									/>
									<Badge
										icon={
											<FontAwesomeIcon
												icon={faUserGroup}
											/>
										}
										title={
											"Total Subs: " +
											this.state.steamUser.subs
										}
										type="warning"
									/>
									<Badge
										icon={
											<FontAwesomeIcon
												icon={faUserGroup}
											/>
										}
										title={
											"Total Life Subs: " +
											this.state.steamUser.lifeSubs
										}
										type="warning"
									/>
									<Badge
										icon={<FontAwesomeIcon icon={faStar} />}
										title={
											"Total Favorites: " +
											this.state.steamUser.favs
										}
										type="danger"
									/>
									<Badge
										icon={<FontAwesomeIcon icon={faStar} />}
										title={
											"Total Life Favorites: " +
											this.state.steamUser.lifeFavs
										}
										type="danger"
									/>
								</p>
								{this.state.steamUser.addons.length && (
									<div className="container pb-2 d-none d-md-block">
										<ResponsiveContainer
											width="99%"
											aspect={2}
										>
											<AreaChart
												width={500}
												height={300}
												data={this.state.steamUser.addons
													.slice()
													.reverse()}
												margin={{
													top: 5,
													right: 30,
													left: 20,
													bottom: 5,
												}}
											>
												<CartesianGrid stroke="" />
												<XAxis dataKey="name" />
												<YAxis />
												<Tooltip />
												<Legend />
												<Area
													type="monotone"
													dataKey="viewers"
													stackId="1"
													stroke="#198754"
													fill="#198754"
												/>
												<Area
													type="monotone"
													dataKey="subs"
													stackId="1"
													stroke="#FFC107"
													fill="#FFC107"
												/>
												<Area
													type="monotone"
													dataKey="favs"
													stackId="1"
													stroke="#DC3545"
													fill="#DC3545"
												/>
											</AreaChart>
										</ResponsiveContainer>
									</div>
								)}
								<h2 className="text-center pt-4">
									Addons of {this.state.steamUser.username}
								</h2>
								{this.state.steamUser.addons.length ? (
									<div className="row pt-5">
										{this.state.steamUser.addons.map(
											(addon: IAddon, i: number) => {
												if (
													this.state.steamUser &&
													this.state.steamUser.addons
														.length > 0
												) {
													return (
														<Card
															key={i}
															id={i}
															title={addon.title}
															image={addon.image}
															url={addon.url}
															viewers={
																addon.viewers
															}
															subs={addon.subs}
															lifeSubs={
																addon.lifeSubs
															}
															favs={addon.favs}
															lifeFavs={
																addon.lifeFavs
															}
															likes={addon.likes}
															dislikes={
																addon.dislikes
															}
														/>
													);
												} else {
													return null;
												}
											}
										)}
									</div>
								) : (
									<h3 className="text-center pt-4">
										There are no addons avaible!
									</h3>
								)}
							</div>
						)}
						{this.state.errorMessage && (
							<div className="d-flex justify-content-center pt-5">
								<div
									className="alert alert-danger text-center"
									style={{ width: "20%" }}
									role="alert"
								>
									{this.state.errorMessage}
								</div>
							</div>
						)}
					</div>
				</section>
			</div>
		);
	}
}
