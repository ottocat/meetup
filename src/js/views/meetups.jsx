import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";

const Example = props => {
	return (
		<div>
			<Card>
				<CardImg
					top
					width="50%"
					src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
					alt="Card image cap"
					className="col-3 card-img-top"
				/>
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText />
					<Button>Button</Button>
				</CardBody>
			</Card>
		</div>
	);
};

export class Meetups extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<Example />
				<Context.Consumer>
					{({ store }) => {
						return (
							<h1 className="display-4">
								This will show the demo element:{" "}
								{store.demo[0].title}
							</h1>
						);
					}}
				</Context.Consumer>

				<hr className="my-4" />

				<Link to="/">
					<span
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Back home
					</span>
				</Link>
			</div>
		);
	}
}

Meetups.propTypes = {
	match: PropTypes.object
};
