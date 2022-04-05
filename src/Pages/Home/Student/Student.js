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

                <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Show a second modal and hide this one with the button below.
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Student;

