const UserFormFields = ({title, name, email, role, change, trigger, clearForm, isCancelPresent}) => {
    return (
        <div>
            <form className="bg-white shadow-lg rounded pt-6" onSubmit={trigger}>
                <p className="text-blue-500 text-2xl font-medium text-center">{title}</p>
                <div className="md:flex md:items-center mt-8 mb-4 px-2 sm:px-4">
                    <div className="md:w-1/4">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="name">
                            Name
                        </label>
                    </div>
                    <div className="md:w-3/4">
                        <input required
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline"
                               id="name" type="text" name="name" value={name} placeholder="Name"
                               onChange={change}/>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-4 px-2 sm:px-4">
                    <div className="md:w-1/4">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="email">
                            Email
                        </label>
                    </div>
                    <div className="md:w-3/4">
                        <input required
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline"
                               id="email" type="email" name="email" value={email}
                               placeholder="Email"
                               onChange={change}/>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-4 px-2 sm:px-4">
                    <div className="md:w-1/4">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="role">
                            Role
                        </label>
                    </div>
                    <div className="md:w-3/4">
                                    <textarea required
                                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                        leading-tight focus:outline-none focus:shadow-outline"
                                              id="role" cols="5" rows="3" name="role" value={role}
                                              placeholder="Role"
                                              onChange={change}/>
                    </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <input type="submit"
                           className="w-full inline-flex justify-center rounded-md border border-transparent
                                        shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3
                                        sm:w-auto sm:text-sm cursor-pointer"
                           value="Submit">
                    </input>
                    {
                        isCancelPresent ?
                            (<button type="button"
                                     className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300
                                    shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0
                                    sm:ml-3 sm:w-auto sm:text-sm"
                                     onClick={clearForm}>
                                Cancel
                            </button>) : null
                    }
                </div>
            </form>
        </div>
    )
}

export default UserFormFields;
