const DeletePost = async (postDelete, id_post) => {
  try {
    await postDelete({
      variables: {
        PostId: {
          _id: id_post,
        },
      },
    })
    return true
  } catch (err) {
    return false;
  }
}

export default DeletePost;