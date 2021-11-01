import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react'

function StudentList(props) {
  var i;
    const Students = [
      {Id:101,Name:'Abhinav', Email:'Abhinav@gmail.com'},

      {Id:102,Name:'Abhishek',Email:'Abhshek@gmail.com'},
    
      {Id:103,Name:'Ajay',Email:'Ajay@gmail.com'}
        
      ];
      
    return (
    <div className="flex flex-col justify-center ">
      <p className="mt-8 text-center text-3xl text-black font-bold"> Student List</p>
     
      <div className="bg-green-200 m-2 mx-20">
      
        
      {Students.map(data => (
         
        <div key={ i } className="list w-full">
               <div style={{ display: 'flex', flexFlow: "row", justifyContent: "space-between inline block" }}>
               <div className="h-44 w-full px-5 mx-5 my-7 py-5 border-white border-4  rounded-lg transition-transform hover:bg-green-300"   >
                  <b> User{i}  </b>
                  <br/><b>Student ID: </b>{data.Id}
                  <br/><b>Name: </b>{data.Name}
                  <br/><b>Email:</b><a href={data.Email}> {data.Email}</a> 
                
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


