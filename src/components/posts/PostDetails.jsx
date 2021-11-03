import { useQuery, gql, useMutation } from "@apollo/client";
import React from "react";
import { useHistory, useParams } from "react-router";
import Navbar from "../navbar/Navbar";

function PostDetails() {
  const id_post = useParams().postid;
  const PostId = {
    _id: id_post,
  };
  const history = useHistory();

  const GET_POST = gql`
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

  const POST_COMMENT = gql`
    mutation postComment($comment: CommentInput) {
      createComment(commentInput: $comment) {
        postId
        commentor
        commentDetails
      }
    }
  `;

  const DELETE_POST = gql`
    mutation deletePost($PostId: PostId) {
      deletePost(postId: $PostId)
    }
  `;

  const [postComment] = useMutation(POST_COMMENT, {
    refetchQueries: [GET_POST, "getPost"],
  });

  const [postDelete, { DeleteLoading, DeleteError, DeleteData }] =
    useMutation(DELETE_POST);

  const { loading, error, data } = useQuery(GET_POST, {
    variables: { PostId },
    fetchPolicy: "network-only",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data.getPostById.comments);

  function addComment(event) {
    event.preventDefault();
    const comment = event.target.body.value;
    postComment({
      variables: {
        comment: {
          postId: id_post,
          commentDetails: comment,
        },
      },
    });
  }

  async function deletePost() {
    await postDelete({
      variables: {
        PostId: {
          _id: id_post,
        },
      },
    }).then(() => history.push("../home"));
  }

  return (
    <div>
      <Navbar />
      <div className="w-1/3 mx-auto my-8">
        <div className="shadow-md p-3">
          <div className="shadow-md mb-2 pb-2">
            <div className="flex px-4">
              <h1 className="text-3xl font-semibold text-center">
                {data && data.getPostById && data.getPostById.title}
              </h1>
              <div className="ml-auto">
                <button
                  className=" bg-red-500 text-white font-medium py-1 px-4 border border-gray-400 rounded-lg 
                    tracking-wide mr-1 hover:bg-white hover:text-red-500"
                  onClick={(e) => deletePost(e)}
                >
                  Delete
                </button>
              </div>
            </div>

            <div>
              <p className="my-2 px-4">
                {data && data.getPostById && data.getPostById.details}
              </p>
              <div className="w-full flex items-start justify-end px-3">
                <div className="-mr-1">
                  <input
                    type="submit"
                    className=" bg-indigo-500 text-white font-medium py-1 px-4 border border-gray-400 rounded-lg 
                    tracking-wide mr-1 hover:bg-indigo-400"
                    value="Update Post"
                  />
                </div>
              </div>
            </div>

            <div className="ml-4">
              <form
                className="w-full max-w-xl bg-white rounded-lg pt-2"
                onSubmit={(event) => addComment(event)}
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
                    Add a new comment
                  </h2>
                  <div className="w-full md:w-full px-3 mb-1 -mt-1">
                    <textarea
                      className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white focus:placeholder-opacity-0"
                      name="body"
                      placeholder="Write a comment..."
                      required
                    ></textarea>
                  </div>
                  <div className="w-full flex items-start justify-end px-3">
                    <div className="-mr-1">
                      <input
                        type="submit"
                        className=" bg-indigo-500 text-white font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-indigo-400"
                        value="Post Comment"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div>
            <h1 className="text-xl font-medium">Comments</h1>
            {data &&
              data.getPostById &&
              data.getPostById.comments.map((item, key) => {
                return (
                  <div className="flex" key={key}>
                    <div className="my-2">
                      <div className="bg-gray-100 w-auto rounded-xl p-2 pb-2">
                        <div className="font-medium">
                          <a href="#" className="hover:underline text-sm">
                            <h2>{item.commentor}</h2>
                          </a>
                        </div>
                        <div className="text-sm">{item.commentDetails}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
