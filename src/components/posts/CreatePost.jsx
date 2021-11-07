import React, {useState} from 'react'
import {gql, useMutation} from "@apollo/client"
import {ADD_POST, GET_ALL_POSTS} from '../../Queries/query'

function CreatePost() {
    const [inputs, setInputs] = useState({
        title: '', 
        description: ''
    })

    const [addPost] = useMutation(ADD_POST, {
        refetchQueries: [GET_ALL_POSTS, "getAllPost"],
    })

    const handleChange = e => {
        const {name, value} = e.target

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    function handleAddPost(e) {
        e.preventDefault()

        addPost({
          variables: {
            post: {
              title: inputs.title,
              details: inputs.description
            },
          },
        })

        setInputs({
            title: '', 
            description: ''
        })
      }

    return (
        <>
            <form className="p-2" onSubmit={handleAddPost}>
                <input type="text" 
                name="title" 
                className="w-full mb-2 p-2 rounded-md" 
                placeholder="Enter post title"
                onChange={handleChange}
                value={inputs.title}
                required></input>
                <textarea className="w-full h-28 my-1 p-2 border rounded-lg" 
                type="text" 
                placeholder="Announce something to your student..." 
                name="description" 
                onChange={handleChange}
                value={inputs.description}
                required></textarea>
                <button className="bg-blue-300 px-8 py-2 mb-2 mt-0 rounded-lg float-right hover:bg-blue-400">
                    Add Post
                </button>
            </form> 
        </>
    )
}

export default CreatePost
