import React from "react";

interface BadgeProps {
	icon: JSX.Element;
	title: string;
	type: string;
}

/**
 * Bootstrap badge component
 */
export default class Badge extends React.Component<BadgeProps> {
	render() {
		return (
			<span
				className={
					"badge bg-" + this.props.type + " mx-1 my-1 text-white"
				}
			>
				{this.props.icon} {this.props.title}
			</span>
		);
	}
}
