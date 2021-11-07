import { GET_POST } from "../Queries/query";
import { useQuery } from "@apollo/client";

const PostGetter=(PostId)=>{
    const { loading, error, data } = useQuery(GET_POST, {
        variables: { PostId },
        fetchPolicy: "network-only",
      });
      return{
          loading,
          error,
          data
      }
}

export default PostGetter;