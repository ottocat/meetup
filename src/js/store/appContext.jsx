import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			fetch("https://assets.breatheco.de/apis/fake/meetup/meetups")
				.then(response => {
					if (response.status !== 200) {
						alert("Connection error, status " + response.status);
						return;
					}

					response.json().then(data => {
						let store = this.state.store;
						store.meetups = data;
						this.setState({ store });
					});
				})
				.catch(err => {
					alert("Fetch error: ", err);
				});

			fetch("https://assets.breatheco.de/apis/fake/meetup/events")
				.then(response => {
					if (response.status !== 200) {
						alert("Connection error, status " + response.status);
						return;
					}

					response.json().then(data => {
						let store = this.state.store;
						store.events = data;
						this.setState({ store });
					});
				})
				.catch(err => {
					alert("Fetch error: ", err);
				});
			// this function is the equivalent to "window.onLoad"
			// it only run once on the entire application lifetime
			// you should do your ajax requests here
			fetch("https://assets.breatheco.de/apis/fake/weird_portfolio.php")
				.then(response => {
					if (response.status !== 200) {
						alert("Connection error, status " + response.status);
						return;
					}

					response.json().then(data => {
						// let store = this.state.store;
						// store.meetups = data;
						// this.setState({ store });
						console.log(
							data.post[1].attachment[2].images.thumbnail.url
						);
						// store.meetups = data;npm
						// this.setState({ store });
						console.log(data);
					});
				})
				.catch(err => {
					alert("Fetch error: ", err);
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
