export const rootReducer = (state = {}, action) => {
	switch (action.type) {
		case 'LOADING':
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
