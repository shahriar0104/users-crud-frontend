import CreateUser from "./CreateUser";
import ShowUsers from "./ShowUsers";
import {gql, useQuery} from "@apollo/client";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../state/action/userActions";

const Users = () => {
    const dispatch = useDispatch();
    const {fetched, userList} = useSelector(state => state);

    const addUserHandler = () => {};

    const updateUserHandler = () => {};

    const deleteUserHandler = () => {}

    const {loading, error, data} = useQuery(gql`
        {
            getAllUsers {
                id
                firstName
                email
                role
            }
        }
    `);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (!fetched) dispatch(setProducts(data.getAllUsers));

    return (
        <div className="App min-h-screen bg-gray-200 p-4 sm:p-8">
            <CreateUser addUser={addUserHandler}/>
            <div className="flex flex-wrap justify-center items-center my-4 mx-8">
                {userList.map((user, index) => {
                    return <ShowUsers
                        key={user.id} index={index} name={user.firstName} email={user.email} role={user.role}
                        click={() => deleteUserHandler(index)}
                        update={updateUserHandler}/>
                })}
            </div>
        </div>
    );
}

export default Users;