import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react'

function StudentList(props) {
  
    const Students = [
      {Id:101,Name:'Abhinav', Email:'Abhinav@gmail.com'},

      {Id:102,Name:'Abhishek',Email:'Abhshek@gmail.com'},
    
      {Id:103,Name:'Ajay',Email:'Ajay@gmail.com'},

      {Id:101,Name:'Abhinav', Email:'Abhinav@gmail.com'},

      {Id:102,Name:'Abhishek',Email:'Abhshek@gmail.com'},
    
      {Id:103,Name:'Ajay',Email:'Ajay@gmail.com'},

      {Id:101,Name:'Abhinav', Email:'Abhinav@gmail.com'},

      {Id:102,Name:'Abhishek',Email:'Abhshek@gmail.com'},  

      {Id:103,Name:'Ajay',Email:'Ajay@gmail.com'},
    ,
      {Id:101,Name:'Abhinav', Email:'Abhinav@gmail.com'},

      {Id:102,Name:'Abhishek',Email:'Abhshek@gmail.com'},
    
      {Id:103,Name:'Ajay',Email:'Ajay@gmail.com'}
        
        
        
        
      ];
      
    return (
    <div className="flex">
     
     
      <div className="bg-green-200  m-4  mx-auto  w-auto">
      <p className="mt-8 text-center text-3xl text-black font-bold"> Student List</p>
        
      {Students.map(data=> (
         
        <div key={ data.Id } className="list w-full">
                <div style={{ display: 'flex',   justifyContent: "space-between inline block" }}>
               <div className="h-44 w-full px-5 mx-5 my-7 py-5 border-white border-4  rounded-lg transition-transform hover:bg-green-300 flex flex-row justify-between"   >
                  <div>
                  <br/><b>Student ID: </b>{data.Id}
                  <br/><b>Name: </b>{data.Name}
                  <br/><b>Email:</b><a href={data.Email}> {data.Email}</a> 
                </div>
                  <div className=' flex flex-row h-12 my-10 ' >
                  <button className="bg-green-50 transition transform hover:scale-110 px-4 py-0 my-2 mx-4 rounded-full "><i className="fas fa-pen"></i></button>
                  <button className="bg-green-50 transition transform hover:scale-110 px-4 py-0 my-2 mx-4 rounded-full"><i className="fa fa-trash"></i></button>
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


