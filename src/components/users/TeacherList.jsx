import React from 'react'
import Navbar from '../navbar/Navbar';
import {gql, useQuery} from "@apollo/client"
import { useHistory } from 'react-router';

function TeacherList() {
  const history = useHistory()
  if(!localStorage.getItem('token')) history.push('/login')
  const TEACHER_LIST = gql`
    query getteachers{
      getAllTeacher{
          username
          email
      }
    }
  `
  const {loading, error, data} = useQuery(TEACHER_LIST)
  if(loading) return 'loading'
  if(error) return error.message

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="bg-yellow-50 m-4 mx-auto md:w-2/3 lg:w-1/2 sm:w-11/12 rounded-xl">
        <p className="mt-8 mb-4 text-center text-3xl text-black font-bold"> Teacher List</p>

        {data.getAllTeacher.map(({username, email}) => (
          <div key={username} className="list w-full">
            <div style={{ display: 'flex', justifyContent: "space-between inline block" }}>
              <div className="w-full px-3 mx-5 my-1 border-white border-4 rounded-lg
               transition-transform bg-green-100 hover:bg-green-300 flex flex-row
                justify-between py-2">
                <div>
                  <b>Name: </b>{username}
                  <br /><b>Email:</b> {email}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherList;


