const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			meetups: [],
			events: []
		},
		actions: {
			findMeetupName: meetupID => {
				let store = getStore();
				if (store.meetups !== []) {
					let meetup = store.meetups.filter(item => {
						if (item.ID == meetupID) {
							return item;
						}
					});

					if (meetup[0] !== undefined) {
						console.log("title ", meetup[0].post_title);
						return meetup[0].post_title;
					}
				}
			}
		}
	};
};

export default getState;
