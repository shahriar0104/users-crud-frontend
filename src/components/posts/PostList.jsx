import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'
import {MdOutlineRemoveRedEye} from 'react-icons/md'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostList() {
    const posts = useSelector(state => state.postReducer.posts)

    return (
        <>
            {
                posts.length !== 0 && posts.map((post) => {
                    return(
                        <div key={post.id} className="border m-2 p-2 bg-gray-100 rounded-lg">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row"> 
                                    <div className="font-bold text-lg mr-2">{post.teacherName}</div>
                                    <div className="text-xs font-light text-gray-500 mt-1.5">[{post.timestamp}]</div>
                                </div>
                                
                                <div className="flex flex-row space-x-3 mt-1">
                                    <Link 
                                    key={post.id} 
                                    to={{
                                        pathname: `/postdetails/${post.id}`,
                                        state: {post}
                                    }}>
                                        <MdOutlineRemoveRedEye
                                        className="cursor-pointer" size={25}
                                        /> 
                                    </Link>
                                            
                                    <FaRegEdit 
                                    className="cursor-pointer" size={22}
                                    />
                                    <RiDeleteBinLine 
                                    className="cursor-pointer" size={22}
                                    />
                                </div>
                            </div>
                            <div className="pt-1">{post.description}</div>
                        </div>
                    )
                
                })
            }
        </>
    )
}

export default PostList
