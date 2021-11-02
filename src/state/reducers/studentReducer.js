import {GET_STUDENTS, ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT} from "../action-types/studentActionTypes";

const initialState = {
    fetched: false,
    students: [
        {
            id: 1,
            name: 'Student 1',
            email: 'student1@example.com',
            password: '1234'
        },
        {
            id: 2,
            name: 'Student 2',
            email: 'student2@example.com',
            password: '1234'
        },
        {
            id: 3,
            name: 'Student 3',
            email: 'student3@example.com',
            password: '1234'
        }
    ],
}

const studentReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_STUDENTS:
            return {
                ...state,
                fetched: true,
                students: state.students
            }
        case ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload]
            }
        case UPDATE_STUDENT:
            return {
                ...state,
                students: state.students.map(student => (student.id === action.id ? action.value : student))
            }
        case DELETE_STUDENT:
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.value)
            }
        default:
            return state
    }
}
export default studentReducer