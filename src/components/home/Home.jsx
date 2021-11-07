import React, { useEffect, useState } from 'react'
import CreatePost from '../posts/CreatePost'
import PostList from '../posts/PostList'
import {Link} from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import {HiOutlineUserAdd} from 'react-icons/hi'
import { useHistory } from "react-router"
import {gql, useQuery} from "@apollo/client"

function Home() {
    const history = useHistory()
    if(!localStorage.getItem('token')) history.push('/login')
    const ROLE = localStorage.getItem('role')

    const postListQuery = gql`
    query findAllpost{
        getAllPost {
            _id
            title
            details
            owner
            time
        }
      }
    `

    const {loading, error, data} = useQuery(postListQuery)
    const [postList, setPostList] = useState([])

    useEffect(() => {
        if(loading) return loading
        if(error) return error.message
        if(data) setPostList(data.getAllPost)
    })

    return (
        <>
            <div className="flex flex-col">
                <Navbar />
                <div className="flex flex-col bg-yellow-50 sm:mx-10 md:mx-22 lg:mx-28 xl:mx-64 mx-4 mt-5 border-2 rounded-lg shadow-xl">
                    {ROLE === 'TEACHER' && 
                        <div className="flex flex-row justify-end">
                            <Link to='/teacherlist'>
                                <button className="bg-blue-300 p-3 rounded-lg m-4 mx-3 hover:bg-purple-400">
                                    <div>Teacher List</div>
                                </button>
                            </Link>
                            <Link to='/studentlist'>
                                <button className="bg-indigo-300 p-3 rounded-lg m-4 mx-3 hover:bg-indigo-400">
                                    <div>Student List</div>
                                </button>
                            </Link>
                            <Link to='/adduser'>
                                <div className="bg-indigo-300 p-3 rounded-lg m-4 mx-3 hover:bg-indigo-400">
                                    <HiOutlineUserAdd size={28}/>
                                </div>
                            </Link>
                        </div>
                    }

                    <div className={"flex flex-col w-full bg-gray-700 overflow-hidden " + (ROLE === 'TEACHER' ? 'rounded-b-md' : 'rounded-md')}>
                        {
                            ROLE === 'TEACHER' && <CreatePost />
                        }
                        <PostList posts = {postList}/>
                    </div>
                </div> 
            </div>   
        </>
    )
}

export default Home
