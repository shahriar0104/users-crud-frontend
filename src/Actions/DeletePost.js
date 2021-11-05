

const DeletePost=(postDelete,id_post)=>{
    postDelete({
        variables: {
          PostId: {
            _id: id_post,
          },
        },
      })
}

export default DeletePost;