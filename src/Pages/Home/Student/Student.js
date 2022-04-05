import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Student = () => {
    const [student, setStudent] = useState([]);
    useEffect(function () {
        axios.get("http://localhost:8000/api/student/all")
            .then(function (rsp) {
                setStudent(rsp.data);
            }, function (err) {

            });
    }, [student]);
    const handledelete = id => {
        const confirm = window.confirm("Are you sure to delete this students");
        if (confirm) {
            axios.post(`http://localhost:8000/api/student/delete/${id}`)
                .then(res => {
                    if (res.status = 200) {
                        alert("delete succefull Successfully");


                    }
                })
        }

    }
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newaptdata = { ...student };
        newaptdata[feild] = value;
        setStudent(newaptdata);
       


    }
    const handleaddservice = e => {
        const students = {
            ...student
        }
        axios.post('http://localhost:8000/api/student/add', students)
            .then(res => {
                if(res.status=200){
                  alert('success');
                  
                
                }
            })
           
            
        e.preventDefault();
    }
    const handleEdit = id => {
        // axios.post(`http://localhost:8000/api/student/delete/${id}`)
        //     .then(res => {
        //         if (res.status = 200) {
        //             alert("delete succefull Successfully");


        //         }
        //     })




    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        student.map(st =>
                            <div className="col bg-primary text-white m-2 py-4 rounded" key={st.id}>

                                <p>{st.name}</p>
                                <p>{st.email}</p>
                                <p>{st.sid}</p>
                                <button onClick={() => handledelete(st.id)}  >Delete</button>
                                <button data-bs-toggle="modal" href="#exampleModalToggle" onClick={() => handleEdit(st.id)}  >Edit</button>
                            </div>
                        )
                    }


                </div>

               
            </div>

        </div>


    );
};

export default Student;

