import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import {MdOutlineRemoveRedEye} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {splitTime} from '../../helper/helperMethods'
//import { useSelector } from 'react-redux'

function PostList({posts}) {
    //const posts = useSelector(state => state.postReducer.posts)

    return (
        <>
            {
                posts.length !== 0 && posts.map((post) => {
                    return(
                        <div key={post._id} className="border m-2 p-2 bg-gray-100 rounded-lg">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row flex-wrap"> 
                                    <div className="font-bold text-lg mr-2">{post.owner}</div>
                                    <div className="text-xs font-light text-gray-600 mt-1.5">[{splitTime(post.time)}]</div>
                                </div>
                                
                                <div className="flex flex-row space-x-3 mt-1">
                                    <Link
                                    key={post._id} 
                                    to={{
                                        pathname: `/postdetails/${post._id}`,
                                        state: {post}
                                    }}>
                                        <MdOutlineRemoveRedEye
                                        className="cursor-pointer" size={25}
                                        /> 
                                    </Link>

                                    <RiDeleteBinLine 
                                    className="cursor-pointer" size={22}
                                    />
                                </div>
                            </div>
                            <div className="pt-1">{post.details}</div>
                            <div className="text-sm text-right text-gray-500">Comments: {post.comments ? post.comments.length : 0}</div>
                        </div>
                    )
                
                })
            }
        </>
    )
}

export default PostList
