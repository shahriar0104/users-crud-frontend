const AddComment= (postComment,id_post,comment) =>{
   postComment({
        variables: {
          comment: {
            postId: id_post,
            commentDetails: comment,
          },
        },
      });
    
}

export default AddComment;