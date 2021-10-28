import {
    SET_USERS,
} from "../action-types/userActionTypes";

const initialState = {
    fetched: false,
    userList: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                fetched: true,
                userList: action.users,
            };
        default:
            return state;
    }
}
export default userReducer;