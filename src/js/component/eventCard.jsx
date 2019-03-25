import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import {
	Card,
	Button,
	CardHeader,
	CardFooter,
	CardBody,
	CardTitle,
	CardText,
	Jumbotron,
	Container,
	Row,
	Col
} from "reactstrap";

export function EventCards(props) {
	return (
		<Row className="justify-content-center">
			<Col sm={3}>
				<Card>
					<CardHeader>{props.date}</CardHeader>
					<CardBody>
						<Row>
							<Col>{props.time} </Col>
							<Col>
								<Link to="/events">
									<Row>{props.eventID} </Row>
								</Link>
								<Link to="/meetups">
									<Row>{props.meetupName}</Row>
								</Link>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
		</Row>
	);
}

PropTypes;
EventCards.propTypes = {
	date: PropTypes.string,
	meetupName: PropTypes.string,
	time: PropTypes.string,
	eventID: PropTypes.string
};

export default EventCards;
