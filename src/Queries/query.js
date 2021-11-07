import gql from "graphql-tag";

export const GET_ALL_POSTS = gql`
  query findAllpost{
      getAllPost {
          _id
          title
          details
          owner
          time
      }
    }
  `


export const GET_POST = gql`
query getPost($PostId: PostId) {
  getPostById(postId: $PostId) {
    title
    details
    comments {
      commentor
      commentDetails
    }
  }
}
`;

export const POST_COMMENT = gql`
mutation postComment($comment: CommentInput) {
  createComment(commentInput: $comment) {
    postId
    commentor
    commentDetails
  }
}
`;

export const DELETE_POST = gql`
mutation deletePost($PostId: PostId) {
  deletePost(postId: $PostId)
}
`;

export const UPDATE = gql`

     mutation upDatePost($postId: PostId, $update: UpdatedDetails){
     updatePost(postId:$postId, updatedDetails: $update)
   }

`;