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
    },[student]);
    const handledelete =id =>{
        const confirm = window.confirm("Are you sure to delete this products");
        if (confirm) 
        {
            fetch(`http://localhost:8000/api/student/delete/${id}`, {
              method: 'post',
              headers: {
                'content-type': 'application/json'
              }
            })
              .then(res => res.json())
              .then(data => {
                if (data.status=200) {
                  alert("delete succefull Successfully");
                }
              })
            console.log(id);
          }

    }

    return (
        <div>
            <div class="container">
  <div class="row">
      {
          student.map(st=>
            <div class="col bg-primary text-white m-2 py-4 rounded"  key={st.id}>
            
           <p>{st.name}</p>
           <p>{st.email}</p>
           <p>{st.sid}</p>
           <button onClick={()=>handledelete(st.id)}  >Delete</button>
          </div>
            )
      }
   
    
  </div>
</div>
           
        </div>
    );
};

export default Student;

 