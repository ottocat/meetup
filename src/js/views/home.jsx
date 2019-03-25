import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
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
	Spinner
} from "reactstrap";
import "../../styles/home.css";
import EventCards from "../component/eventCard.jsx";
import { Context } from "../store/appContext.jsx";

export class Home extends React.Component {
	render() {
		// let parseMoment = (data, format) => {
		// 	if (format == "date") {
		// 		return <Moment format="MM/DD/YYYY">{data}</Moment>;
		// 		if (format == "time") {
		// 			return (
		// 				<Moment format="LT" parse="HH:mm:ss">
		// 					{data}
		// 				</Moment>
		// 			);
		// 		}
		// 	}
		// };
		return (
			<Container>
				<div>
					<Jumbotron fluid>
						<Container fluid>
							<h1 className="display-3">Hangz</h1>
							<p className="lead">
								{
									"The site that's alright for a night of tight activities"
								}
							</p>
						</Container>
					</Jumbotron>
				</div>
				<Context.Consumer>
					{({ store, actions }) => {
						console.log(store);
						return store.events.map(event => {
							console.log("meetup id ", event.meta_keys._meetup);
							if (event) {
								return (
									<EventCards
										eventTitle={event.post_title}
										meetupName={actions.findMeetupName(
											event.meta_keys._meetup
										)}
										eventID={event.ID}
										key={event.ID}
										date={event.meta_keys.day}
										time={event.meta_keys.time}
									/>
								);
							} else {
								return <Spinner color="primary" />;
							}
						});
					}}
				</Context.Consumer>
			</Container>
		);
	}
}
