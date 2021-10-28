import React, {createContext, useState} from "react";

export const UserListContext = createContext([]);

function GlobalContext(props) {
    const [userList, setUserList] = useState([]);
    return (
        <UserListContext.Provider value={[userList, setUserList]}>
            {props.children}
        </UserListContext.Provider>
    )
}

export default GlobalContext;