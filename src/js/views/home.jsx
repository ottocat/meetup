import React from "react";
import {
	Card,
	Button,
	CardHeader,
	CardFooter,
	CardBody,
	CardTitle,
	CardText
} from "reactstrap";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Card>
					<CardHeader>Header</CardHeader>
					<CardBody>
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to
							additional content.
						</CardText>
						<Button>Go somewhere</Button>
					</CardBody>
					<CardFooter>Footer</CardFooter>
				</Card>

				<Card>
					<CardHeader tag="h3">Featured</CardHeader>
					<CardBody>
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to
							additional content.
						</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}
}
