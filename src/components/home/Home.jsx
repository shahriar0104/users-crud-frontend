import React from 'react'
import CreatePost from '../posts/CreatePost'
import PostList from '../posts/PostList'
import {Link} from 'react-router-dom'

function Home() {
    const role = 'teacher'

    return (
        <>
            <div className="flex flex-col bg-yellow-50 sm:mx-10 md:mx-22 lg:mx-28 xl:mx-64 mx-4 mt-5 border-2 rounded-lg">
                <div className="flex flex-row justify-between">
                    <Link to='/studentlist'>
                        <button className="bg-blue-300 p-3 rounded-lg m-6 mx-3 hover:bg-blue-400">
                            View All Students
                        </button>
                    </Link>
                    <Link to='/addstudent'>
                        <button className="bg-blue-300 p-3 rounded-lg m-6 mx-3 hover:bg-blue-400">
                            Add New Student
                        </button>
                    </Link>
                </div>

                <div className="flex flex-col w-full bg-green-200 overflow-hidden rounded-b-md">
                    {
                        role === 'teacher' && <CreatePost />
                    }
                    <PostList />
                </div>
            </div>
            
        </>
    )
}

export default Home
