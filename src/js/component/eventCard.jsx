import React from "react";
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

function Events(props) {
	return (
		<ul>
			<Context.Consumer>
				{({ store }) => {
					return store.events.map((item, index) => {
						return (
							<Row key={index} className="justify-content-center">
								<div className="col-3">
									<Card>
										<CardHeader>{item.date}</CardHeader>
										<CardBody>
											<Row>
												<Col>{item.time} </Col>
												<Col>
													<CardText>
														<Row>{item.event} </Row>
														<Row>{item.meetup}</Row>
													</CardText>
												</Col>
											</Row>
										</CardBody>
									</Card>
								</div>
							</Row>
						);
					});
				}}
			</Context.Consumer>
		</ul>
	);
}

Events.propTypes = {
	items: PropTypes.array
};

export default Events;
