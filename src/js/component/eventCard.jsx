import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

function Events(props) {
	return (
		<ul>
			<Context.Consumer>
				{({ store }) => {
					return store.events.map((item, index) => {
						return ;
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
