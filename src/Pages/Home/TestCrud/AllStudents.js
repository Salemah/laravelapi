import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Students from './Students';

const AllStudents = () => {
    const [student, setStudent] = useState([]);
    const [editstudent, setEditStudent] = useState({});


    useEffect(function () {
        axios.get("http://localhost:8000/api/student/all")
            .then(function (rsp) {
                setStudent(rsp.data);
            }, function (err) {

            });
    }, []);
    // 
    return (
        <div>
            <div className="container">
                
                    {
                        student.map(st =>
                            <Students 
                            key={st.id}
                            studnt={st}
                             ></Students>
                        )
                    }


                </div>


          
           

        </div>
    );
};

export default AllStudents;