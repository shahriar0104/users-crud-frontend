import React, {useState} from 'react'
import {gql, useMutation} from "@apollo/client"

function CreatePost() {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')

    const ADD_POST = gql`
        mutation addPost($post: PostInput) {
            createPost(postInput: $post) {
                title
                owner
                details
                comments
                time
            }
        }
    `
    const [addPost] = useMutation(ADD_POST)

    const handleChange = e => {
        const {title, details} = e.target

        setTitle(title)
        setDetails(details)
    }

    function handleAddPost(e) {
        e.preventDefault()

        console.log(title, details)

        addPost({
          variables: {
            post: {
              title: title,
              owner: localStorage.getItem('username'),
              details: details,
              comments: [],
              time: new Date(),
            },
          },
        })
      }

    return (
        <>
            <div className="p-2">
                <input type="text" name="title" className="w-full mb-2 p-2 rounded-md" placeholder="Enter post title"
                onChange={handleChange}
                required></input>
                <textarea className="w-full h-28 my-1 p-2 border rounded-lg" type="text" 
                placeholder="Announce something to your student..." name="details" 
                onChange={handleChange}
                required></textarea>
                <button className="bg-blue-300 px-8 py-2 mb-2 mt-0 rounded-lg float-right hover:bg-blue-400"
                onClick={handleAddPost}>
                    Add Post
                </button>
            </div> 
        </>
    )
}

export default CreatePost
