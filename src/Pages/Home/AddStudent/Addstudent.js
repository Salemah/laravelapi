import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Addstudent = () => {
    const [student,setStudent] = useState('');
    
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
        // axios('http://localhost:8000/api/student/add', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(students)
        // })
            .then(res => {
                if(res.status=200){
                    alert('success');
                
                }
            })
           

        e.preventDefault();
    }
    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center">

                    <div className="col-md-auto">
                        <form onSubmit={handleaddservice}>
                        <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Name</label>
                                <input type="text" name='name' className="form-control" onBlur={handleOnChange}  />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' className="form-control"   onBlur={handleOnChange}  />
                
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">SId</label>
                                <input type="text" name='sid' className="form-control"  onBlur={handleOnChange}  />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Addstudent;