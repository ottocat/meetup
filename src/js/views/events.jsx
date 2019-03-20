import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
import { Jumbotron, Container } from "reactstrap";

const Example = props => {
	return (
		<div>
			<Jumbotron fluid>
				<Container fluid>
					<h1 className="display-3" />
					<p className="lead">5th Event for meetup 1</p>
				</Container>
			</Jumbotron>
		</div>
	);
};

//export default Example;

const Events = props => {
	return (
		<div>
			<Example />
			<Card>
				<CardImg
					top
					width="100%"
					src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
					alt="Card image cap"
					className="col-sm-6 .order-sm-2 .offset-sm-1"
				/>
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						{
							"Some quick example text to build on the card title and make up the bulk of the card's content."
						}
					</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

Events.propTypes = {
	items: PropTypes.array
};

export default Events;
