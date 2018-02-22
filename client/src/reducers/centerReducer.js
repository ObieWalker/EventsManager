import { ADD_CENTER, EDIT_A_CENTER} from '../actions/actionTypes'

const centerReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CENTER:
            return [action.payload, ...state];
        case EDIT_A_CENTER:
            return state.map((center) =>
                action.center.id === center.id ? action.center : center);
        default:
            return state;
    }
};

export default centerReducer;