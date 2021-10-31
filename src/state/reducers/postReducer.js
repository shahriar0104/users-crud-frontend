import {GET_POSTS, ADD_POST, UPDATE_POST, DELETE_POST} from "../action-types/postActionTypes";

const initialState = {
    fetched: false,
    posts: [
        {
            id: 1,
            teacherName: 'Teacher 1',
            description: 'Description 1',
            timestamp: '31-10-2021 4:20:55'
        },
        {
            id: 2,
            teacherName: 'Teacher 1',
            description: 'Description 2',
            timestamp: '31-10-2021 4:22:11'
        },
        {
            id: 3,
            teacherName: 'Teacher 1',
            description: 'Description 3',
            timestamp: '31-10-2021 4:30:06'
        },
    ],
}

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                fetched: true,
                posts: state.posts
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => (post.id === action.id ? action.value : post))
            }
        case DELETE_POST:
            return {
                ...state,
                students: state.posts.filter(post => post.id !== action.value)
            }
        default:
            return state
    }
}
export default postReducer