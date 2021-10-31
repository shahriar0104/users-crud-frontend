import React from 'react'



function StudentList(props) {
    const Students = [
      {Id:101,Name:'Abhinav',Location:'Bangalore',Salary:12345},

      {Id:102,Name:'Abhishek',Location:'Chennai',Salary:23456},
    
      {Id:103,Name:'Ajay',Location:'Bangalore',Salary:34567}
        
      ];
      
    return (
    <div className="flex justify-center">
     
      <div className="bg-green-200 max-h-full  flex-row justify-center px-5 mx-5 my-5 py-5">
      <p className="mt-8 text-center text-3xl text-black font-bold"> Student List</p>
        
      {Students.map(data => (
         
        <div key={data.Id} className="list w-full">
               <div style={{ display: 'flex', flexFlow: "row", justifyContent: "space-between inline block" }}>
               <div className="h-40 w-full px-5 mx-5 my-5 py-5 border-green-500 border transition-transform hover:bg-purple-300"   >
                  <b> User{data.Id+1}</b>
                  <br/>Name:{data.Name}
                  <br/>Location:{data.Location}
                  
                  {/* <br/>Email:<a href={"mailto:"+data.mail}> {data.mail}</a> */}
                  <br/>Salary:{data.Salary}
                  <div className=" flex-row justify-between">
                  <button className="bg-purple-100 transition transform hover:scale-110 px-5 py-0 my-2 mx-4 rounded-full"><i className="fas fa-pen"></i></button>
   
   <button className="bg-purple-100  transition transform hover:scale-110 px-2 py-0 rounded-full"><i className="fas fa-pen"></i></button>
   </div>
  
  
                  </div>
                  </div>
          
                  
    
        </div>
  )
        
        )
      
  }
       
    </div>
    </div>
  );
}
    


export default StudentList;


