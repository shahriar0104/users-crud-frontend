import React,{useState} from "react";
import {gql, useMutation} from "@apollo/client"
import { useHistory } from "react-router-dom";

const LOGIN = gql`
  mutation signin($signInInfo:SignInInput){
    signIn(signInInput:$signInInfo) {
      JWT,
      username,
      role
    }
  }
`
function Login() {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [input, {data, loading, error}] = useMutation(LOGIN)
  if (loading) return 'submitting'
  if (error) return error.message
  if(data){
    localStorage.setItem('token', data.signIn.JWT)
    localStorage.setItem('username', data.signIn.username)
    localStorage.setItem('role', data.signIn.role)
  }

  async function login (e){
    e.preventDefault()
    await input({
      variables:{
        "signInInfo":{
          "username": username,
          "password": password
        }
      }
    }).then(()=>
      history.push('/home')
    ).catch(err=>console.log(err))
  }

  function usernameHandleChange(e){
    setUsername(e.target.value)
  }

  function passwordHandleChange(e){
    setPassword(e.target.value)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-4">
        <div>
          <h2 className="mt-6 text-center text-4xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form
          className="bg-white shadow-md rounded-xl px-10 pt-8 pb-8 mb-8"
          onSubmit={login}
        >
          <div className="rounded-md shadow-sm -space-y-px mb-8">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-base font-medium mb-2"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={e=>usernameHandleChange(e)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-base font-medium mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={e=>passwordHandleChange(e)}
                required
              />
            </div>
          </div>
          <div className="pb-4 mb-2">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
