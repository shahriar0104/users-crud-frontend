import {useState} from "react";

const CommonState = (props) => {
    const [userState, setUserState] = useState(props);

    const changeHandler = (event) => {
        setUserState({...userState, [event.target.name]: event.target.value});
    }

    return {
        userState,
        setUserState,
        changeHandler
    };
}

export default CommonState;