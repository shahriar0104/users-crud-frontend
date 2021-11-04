import { GET_POST,POST_COMMENT } from "../Queries/query";
import { useMutation } from "@apollo/client";

const PostComment= (id_post,comment) =>{
    const [postComment] = useMutation(POST_COMMENT, {
        refetchQueries: [GET_POST, "getPost"],
      });

      postComment({
        variables: {
          comment: {
            postId: id_post,
            commentDetails: comment,
          },
        },
      });
}

export default PostComment;