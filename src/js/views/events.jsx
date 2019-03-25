import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";
import { Jumbotron, Container } from "reactstrap";

const Example = props => {
	return (
		<div>
			<Jumbotron className="display bg-info">
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
				Log n to RSVP
			</Button>

			<UncontrolledCollapse toggler="#toggler">
				<Card>
					<CardBody>
						<a href="page.https#Alink2">
							https://www.yelp.com/nearme/things-to-do
						</a>
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
					<CardText>{"Be free and explore the world ."}</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

Events.propTypes = {
	items: PropTypes.array
};

export default Events;
