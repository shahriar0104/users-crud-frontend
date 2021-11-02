import React from 'react'
import Navbar from '../navbar/Navbar';

function AddStudent() {
    return (
        <div className="flex flex-col">
          <Navbar/>

          <div className="md:w-3/6 mx-auto p-6 w-full">
      
            <p className="mb-5 text-center text-3xl text-green-700 font-bold">Add Student</p>
      
              <form className="bg-yellow-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                    Username
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstname" 
                  type="text" 
                  placeholder="Enter username"/>
                </div>
          
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registration">
                  Registration NO
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="registration" 
                  type="number" 
                  placeholder="Enter registration number"/>
                </div>
          
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="email" 
                  type="email" 
                  placeholder="Enter email"/>
                </div>
          
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" 
                  id="password" 
                  type="password" 
                  placeholder="Enter password"/>
                </div>
              
                <div className="text-center">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Submit
                  </button>
                </div>
        
            </form>
          </div>
        </div>
      );
}

export default AddStudent
