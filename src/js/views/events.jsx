import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/home.css";

import {
	Card,
	CardTitle,
	CardText,
	CardImg,
	CardImgOverlay,
	CardSubtitle
} from "reactstrap";

const Events = props => {
	return (
		<div>
			<Card inverse>
				<CardImg
					width="100%"
					src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
					alt="Card image cap"
					className="col-3 card-img-top"
				/>
				<CardImgOverlay>
					<CardTitle>Card Title</CardTitle>
					<CardSubtitle className="pt-50px">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</CardSubtitle>
					<CardText>Last updated 3 mins ago</CardText>
				</CardImgOverlay>
			</Card>
		</div>
	);
};

export default Events;
