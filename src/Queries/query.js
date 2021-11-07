import gql from "graphql-tag";

export const GET_ALL_POSTS = gql`
  query findAllpost{
      getAllPost {
          _id
          title
          details
          owner
          comments{
            commentor
            commentDetails
          }
          time
      }
    }
  `

export const ADD_POST = gql`
  mutation addPost($post: PostInput) {
      createPost(postInput: $post) {
          title
          details
      }
  }
  `


export const GET_POST = gql`
query getPost($PostId: PostId) {
  getPostById(postId: $PostId) {
    title
    owner
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