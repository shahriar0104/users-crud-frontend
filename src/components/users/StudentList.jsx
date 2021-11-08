import React from 'react'
import Navbar from '../navbar/Navbar';
import {gql, useMutation, useQuery} from "@apollo/client"
import { useHistory } from 'react-router';

function StudentList() {
  const history = useHistory()
  if(!localStorage.getItem('token')) history.push('/login')
  const STUDENT_LIST = gql`
    query getstudents{
      getAllStudent{
          _id
          username
          email
      }
    }
  `

  const DELETE= gql`
   mutation DeleteUser($userId: UserId){
     deleteUser(userId: $userId)
 }
  `
  const [deleteUser]=useMutation(DELETE,{
    refetchQueries:[STUDENT_LIST,"getstudents"]
  });
  const {loading, error, data} = useQuery(STUDENT_LIST)
  if(loading) return 'loading'
  if(error) return error.message

  const students = data.getAllStudent

  function DeleteStudent(event,user_id){
    event.preventDefault();
    deleteUser({
      variables:{
        userId:{
          _id:user_id
        }
      }
    });
  }
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="bg-yellow-50 m-4 mx-auto md:w-2/3 lg:w-1/2 sm:w-11/12 rounded-xl">
        <p className="mt-8 mb-4 text-center text-3xl text-black font-bold"> Student List</p>

        {students.length !==0 ? (students.map(({username, email, _id}) => (
          <div key={username} className="list w-full">
            <div style={{ display: 'flex', justifyContent: "space-between inline block" }}>
              <div className="w-full px-3 mx-5 my-1 border-white border-4 rounded-lg
               transition-transform bg-green-100 hover:bg-green-300 flex flex-row
                justify-between py-2">
                <div>
                  <b>Name: </b>{username}
                  <br /><b>Email:</b> {email}
                </div>
                {
                  localStorage.getItem('role') === 'TEACHER' &&
                  <div>
                    <div className=' flex flex-row h-12'>
                      <button className="bg-green-50 transition transform hover:scale-110 px-4 py-0 my-2 mx-4 rounded-full" onClick={(event)=>DeleteStudent(event,_id)}><i className="fa fa-trash"></i></button>
                    </div>
                  </div>
                }
                
              </div>
            </div>
          </div>
        ))) : <div>Not records found!!</div>}
      </div>
    </div>
  );
}



export default StudentList;


