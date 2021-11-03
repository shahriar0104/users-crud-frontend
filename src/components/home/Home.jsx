import React from 'react'
import CreatePost from '../posts/CreatePost'
import PostList from '../posts/PostList'
import {Link} from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import {HiOutlineUserAdd} from 'react-icons/hi'
import {GoListUnordered} from 'react-icons/go'
import { useHistory } from "react-router";

function Home() {
  const history = useHistory()
  if(!localStorage.getItem('token')) history.push('/login')
    const role = 'teacher'
    return (
        <>
            <div className="flex flex-col">
                <Navbar />
                <div className="flex flex-col bg-yellow-50 sm:mx-10 md:mx-22 lg:mx-28 xl:mx-64 mx-4 mt-5 border-2 rounded-lg shadow-xl">
                    {role === 'teacher' && 
                        <div className="flex flex-row justify-end">
                            <Link to='/studentlist'>
                                <div className="bg-indigo-300 p-3 rounded-lg m-4 mx-3 hover:bg-indigo-400">
                                    <GoListUnordered size={28}/>
                                </div>
                            </Link>
                            <Link to='/adduser'>
                                <div className="bg-indigo-300 p-3 rounded-lg m-4 mx-3 hover:bg-indigo-400">
                                    <HiOutlineUserAdd size={28}/>
                                </div>
                            </Link>
                        </div>
                    }

                    <div className={"flex flex-col w-full bg-gray-700 overflow-hidden " + (role === 'teacher' ? 'rounded-b-md' : 'rounded-md')}>
                        {
                            role === 'teacher' && <CreatePost />
                        }
                        <PostList />
                    </div>
                </div> 
            </div>   
        </>
    )
}

export default Home
