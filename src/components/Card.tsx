import React from "react";
import {
	faEye,
	faMagnifyingGlass,
	faStar,
	faThumbsDown,
	faThumbsUp,
	faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "./Badge";
import Button from "./Button";

interface CardProps {
	id: number;
	title: string;
	image: string;
	url: string;
	viewers: number;
	subs: number;
	lifeSubs: number;
	favs: number;
	lifeFavs: number;
	likes: number;
	dislikes: number;
}

/**
 * Bootstrap card component
 */
export default class Card extends React.Component<CardProps> {
	render() {
		return (
			<div
				key={"addon_" + this.props.id}
				className="col-12 col-md-4 col-sm-6 pb-5"
			>
				<div className="card bg-primary rounded">
					<img
						className="card-img-top p-3"
						src={this.props.image}
						alt=""
					/>
					<div className="card-body">
						<h5 className="card-title text-center">
							{this.props.title}
						</h5>
						<p className="text-center">
							<Badge
								icon={<FontAwesomeIcon icon={faEye} />}
								title={"Total Views: " + this.props.viewers}
								type="success"
							/>
							<Badge
								icon={<FontAwesomeIcon icon={faUserGroup} />}
								title={"Total Subs: " + this.props.subs}
								type="warning"
							/>
							<Badge
								icon={<FontAwesomeIcon icon={faUserGroup} />}
								title={
									"Total Life Subs: " + this.props.lifeSubs
								}
								type="warning"
							/>
							<Badge
								icon={<FontAwesomeIcon icon={faStar} />}
								title={"Total Favorites: " + this.props.favs}
								type="danger"
							/>
							<Badge
								icon={<FontAwesomeIcon icon={faStar} />}
								title={
									"Total Life Favorites: " +
									this.props.lifeFavs
								}
								type="danger"
							/>
						</p>
						<p className="text-center">
							<Badge
								icon={<FontAwesomeIcon icon={faThumbsUp} />}
								title={"Likes: " + this.props.likes}
								type="success"
							/>
							<Badge
								icon={<FontAwesomeIcon icon={faThumbsDown} />}
								title={"Dislikes: " + this.props.dislikes}
								type="danger"
							/>
						</p>
						<div className="d-flex justify-content-center">
							<Button
								icon={
									<FontAwesomeIcon icon={faMagnifyingGlass} />
								}
								text="See it on Steam"
								link={this.props.url}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
