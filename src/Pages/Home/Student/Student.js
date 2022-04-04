import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Student = () => {
    const [student,setStudent] = useState([]);
    useEffect(function(){
        axios.get("http://localhost:8000/api/student/all")
        .then(function(rsp){
            setStudent(rsp.data);
        },function(err){

        });
    },[]);

    return (
        <div>
            <div class="container">
  <div class="row">
      {
          student.map(st=>
            <div class="col">
            Column
          </div>
            )
      }
   
    
  </div>
</div>
           
        </div>
    );
};

export default Student;

 