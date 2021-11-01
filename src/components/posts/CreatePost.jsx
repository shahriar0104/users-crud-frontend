import React from 'react'

function CreatePost() {
    return (
        <>
            <div className="p-2">
                <textarea className="w-full h-28 my-1 p-2 border rounded-lg" type="text" 
                placeholder="Announce something to your student..." name="post" required></textarea>
                <button className="bg-blue-300 px-8 py-2 mb-2 mt-0 rounded-lg float-right hover:bg-blue-400">
                    Add Post
                </button>
            </div> 
        </>
    )
}

export default CreatePost
