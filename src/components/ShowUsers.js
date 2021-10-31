const ShowUsers = ({index, name, email, role, update, click}) => {

    return (
        <div>
            <div className="bg-gray-50 max-w-sm rounded overflow-hidden shadow-lg m-4">
                <div className="p-4">
                    <div className="font-bold text-xl">{name}</div>
                    <p className="text-gray-700 text-base">{email}</p>
                </div>
                <div className="px-4 py-1">
                    <span className="block whitespace-pre-wrap bg-gray-200 rounded-xl px-3 py-1 text-sm font-semibold
                        text-gray-700 mr-2 mb-2">{role}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ShowUsers;