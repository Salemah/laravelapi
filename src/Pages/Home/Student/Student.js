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
            {
                student.map(st=><div>
                    <p>{st.name}</p>
                    <p>{st.email}</p>
                    <p>{st.sid}</p>
                     </div>)
            }
        </div>
    );
};

export default Student;