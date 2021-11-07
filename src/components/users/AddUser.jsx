import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import {gql, useMutation} from "@apollo/client"
import { useHistory } from "react-router";

function AddUser() {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('STUDENT')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const CREATE_USER = gql `
    mutation addUser($userInfo: CreateUserInput){
      createUser(createUserInput: $userInfo){
        username
      }
    }
  `

  if(!localStorage.getItem('token')) history.push('/login')

  const [input, {data, loading, error}] = useMutation(CREATE_USER)
  if (loading) return 'submitting'
  if (error) return error.message

  function handleChangeUsername(e){
    setUsername(e.target.value)
  }
  function handleChangePassword(e){
    setPassword(e.target.value)
  }
  function handleChangeEmail(e){
    setEmail(e.target.value)
  }
  function handleChangeRole(e){
    setRole(e.target.value)
  }

  function createUser(e){
    e.preventDefault();
    console.log(username, role, password)
    input({
      variables:{
        "userInfo":{
          "username":username,
          "email":email,
          "password":password,
          "role":role
        }
      }
    })
    history.push('/home')
  }

  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="md:w-3/6 mx-auto p-6 w-full">
        <p className="mb-5 text-center text-3xl text-green-700 font-bold">
          Add User
        </p>

        <form className="bg-yellow-50 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={e=>createUser(e)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstname"
            >
              Role
            </label>
            <select class="form-select block shadow border rounded w-full py-2 px-3
             text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             onChange={handleChangeRole}>
              <option value='STUDENT'>STUDENT</option>
              <option value='TEACHER'>TEACHER</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstname"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="Enter username"
              onChange={handleChangeUsername}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstname"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="email"
              placeholder="Enter your email"
              onChange={handleChangeEmail}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
              id="password"
              type="password"
              placeholder="Enter password"
              onChange={handleChangePassword}
              required
            />
          </div>

          <div className="text-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
