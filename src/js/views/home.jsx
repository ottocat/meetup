import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="col-3">
				<Card>
					<CardImg
						top
						width="100%"
						src="https://d35aaqx5ub95lt.cloudfront.net/images/owl-pointing-sparkly-cropped.svg"
						alt="Card image cap"
					/>
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>
							{
								"Some quick example text to build on the card title and make up the bulk of the card's content."
							}
						</CardText>
						<Button>Button</Button>
					</CardBody>
				</Card>
			</div>
		);
	}
}
