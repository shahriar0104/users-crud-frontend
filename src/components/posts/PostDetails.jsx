import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import gql from "graphql-tag";

const post = {
  title: "Demo Post",
  details: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  commentList: [
    {
      name: "Jahid",
      comment: "It's nice!",
    },
    {
      name: "Emon",
      comment: "Oh! It's great.",
    },
  ],
};

const arr = [
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  "How are you?",
  "Contrary to popular belief, Lorem Ipsum is not simply random text.",
];

function PostDetails() {
  const { postid: PostId } = useParams();
  const GET_POST = gql`
    {
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

  const { loading, error, data } = useQuery(GET_POST, {
    variables: { PostId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="w-1/3 mx-auto my-8">
      <div className="shadow-md p-3">
        <div className="shadow-md mb-2 pb-2">
          <h1 className="text-3xl font-semibold text-center">{post.title}</h1>

          <div>
            <p className="my-2 px-4">{post.details}</p>
            <div class="w-full flex items-start justify-end px-3">
              <div class="-mr-1">
                <input
                  type="submit"
                  className=" bg-indigo-500 text-white font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-indigo-400"
                  value="Update Post"
                />
              </div>
            </div>
          </div>

          <div class="ml-4">
            <form class="w-full max-w-xl bg-white rounded-lg pt-2">
              <div class="flex flex-wrap -mx-3 mb-6">
                <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">
                  Add a new comment
                </h2>
                <div class="w-full md:w-full px-3 mb-1 -mt-1">
                  <textarea
                    className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white focus:placeholder-opacity-0"
                    name="body"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <div class="w-full flex items-start justify-end px-3">
                  <div class="-mr-1">
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
          {arr.map((item, key) => {
            return (
              <div className="flex">
                <div className="my-2">
                  <div className="bg-gray-100 w-auto rounded-xl p-2 pb-2">
                    <div className="font-medium">
                      <a href="#" className="hover:underline text-sm">
                        <h2>Nirmala</h2>
                      </a>
                    </div>
                    <div className="text-sm">{item}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
