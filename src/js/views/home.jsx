import React from "react";
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
	Row
} from "reactstrap";
import "../../styles/home.css";
import {Events} from "../component/eventCard.jsx"
 
export class Home extends React.Component {
	render() {
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
				<Events/>
			</Container>
		);
	}
}
