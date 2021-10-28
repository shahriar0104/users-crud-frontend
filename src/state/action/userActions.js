import {
    SET_USERS,
} from "../action-types/userActionTypes";

export const setProducts = users => {
    return {
        type: SET_USERS,
        users
    }
}