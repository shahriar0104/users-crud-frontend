import { useMutation } from "@apollo/client";
import { GET_POST,UPDATE } from "../Queries/query";

const UpdateDetails=(id_post,newDetails)=>{
    const [updateDetails] = useMutation(UPDATE, {
        refetchQueries: [GET_POST, "getPost"],
      });

      updateDetails({
        variables:{
          postId:{
            _id:id_post
          },
          update:{
            details:newDetails
          }
        }
      });
}

export default UpdateDetails;