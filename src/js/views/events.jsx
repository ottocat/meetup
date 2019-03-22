import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD

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
=======
import PropTypes from "prop-types";
>>>>>>> 95ebf6b867dec9c43e5ce3d6052398ae35cc8154
import { Context } from "../store/appContext.jsx";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";
import { Jumbotron, Container } from "reactstrap";

const Example = props => {
	return (
		<div>
			<Jumbotron fluid>
				<Container fluid>
					<h1 className="display">March 18</h1>
					<p className="lead">5Th Event for meetup 1</p>
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
			<Button
				color="primary"
				id="toggler"
				style={{ marginBottom: "1rem" }}>
				Log n to RSV
			</Button>
			<UncontrolledCollapse toggler="#toggler">
				<Card>
					<CardBody>
						Come in here to meet new and intersting people
					</CardBody>
				</Card>
			</UncontrolledCollapse>
			<Card>
				<CardImg
					top
					width="100%"
					src="https://previews.123rf.com/images/nd3000/nd30001607/nd3000160700449/60561726-happy-energetic-young-people-having-fun.jpg"
					alt="Card image cap"
					className="col-sm-6 .order-sm-2 .offset-sm-1"
				/>
				<CardBody>
					<CardTitle>Lets have fun</CardTitle>
					<CardSubtitle>Get out of your house </CardSubtitle>
					<CardText>{"Get out of your house ."}</CardText>
				</CardBody>
			</Card>
>>>>>>> 0d73316e732e19e9e212ef82ae58390792f52588
		</div>
	);
};

Events.propTypes = {
	items: PropTypes.array
};

export default Events;
