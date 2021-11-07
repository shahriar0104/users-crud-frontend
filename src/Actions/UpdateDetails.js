
const UpdateDetails=(updateDetails,id_post,newDetails)=>{

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