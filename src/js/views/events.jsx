import React from "react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
import { Jumbotron, Container } from "reactstrap";

const Example = props => {
	return (
		<div>
			<Jumbotron fluid>
				<Container fluid>
					<h1 className="display-3">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire
						horizontal space of its parent.
					</p>
				</Container>
			</Jumbotron>
=======
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

const Events = props => {
	return (
		<div>
			<Card>
				<CardImg
					top
					width="100%"
					src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
					alt="Card image cap"
					className="col-3 card-img-top"
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
>>>>>>> 0d73316e732e19e9e212ef82ae58390792f52588
		</div>
	);
};

export default Events;
