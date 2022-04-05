import axios from 'axios';
import React, { useState } from 'react';
import UpdateStudent from './UpdateStudent';

const Students = ({studnt}) => {
     //console.log(studnt);
    const [orderopen, setOrderopen] = useState({});
    const handleorderOpen = () => setOrderopen(true);
    const handleorderClose = () => setOrderopen(false);

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
    return (
        <>
        <div className="row">
            <div className="col bg-primary text-white m-2 py-4 rounded" >

                <p>{studnt.name}</p>
                <p>{studnt.email}</p>
                <p>{studnt.sid}</p>
                <button onClick={() => handledelete(studnt.id)}  >Delete</button>
                <button data-bs-toggle="modal" href="#exampleModalToggle"
                  onClick={handleorderOpen}
                >Edit</button>
            </div>

            </div>
            <UpdateStudent
            openOrderModal={orderopen}
           std={studnt}>

            </UpdateStudent>
            </>
    );
};

export default Students;