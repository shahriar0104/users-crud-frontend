import UserFormFields from "./UserFormFields";
import CommonState from "./CommonState";

const CreateUser = ({addUser}) => {
    const emptyTodoState = {name: '', email: '', role: ''}
    const {userState, setUserState, changeHandler} = CommonState(emptyTodoState);

    const onTrigger = (event) => {
        addUser(userState);
        event.preventDefault();
        setUserState(emptyTodoState);
    }

    return (
        <div className="w-full sm:w-8/12 md:w-6/12 m-auto">

            <UserFormFields title='Add a User' name={userState.name} email={userState.email} role={userState.role}
                            change={changeHandler} trigger={onTrigger} isCancelPresent={false}/>

        </div>
    )
}

export default CreateUser;