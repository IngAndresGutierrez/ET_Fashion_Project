import {
	HANDLE_USER,
} from "../../actions/types/types";

const initialState = {
	user: null,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case HANDLE_USER:
			return Object.assign({}, state, { user: action.payload.user });
	
			default:
			return state;
	}
}
