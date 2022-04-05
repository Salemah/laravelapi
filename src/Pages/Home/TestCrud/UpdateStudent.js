import axios from 'axios';
import React, { useState } from 'react';

const UpdateStudent = ({ std}) => {
    console.log(std);
    const [student, setStudent] = useState([]);
    const handleOnChange = e => {
       const feild = e.target.name;
       const value = e.target.value;
       const newaptdata = { ...student };
       newaptdata[feild] = value;
       setStudent(newaptdata);
       console.log(student);
      


   }
   const handleaddservice = id => {
       const students = {
            ...student
       }
        axios.post(`http://localhost:8000/api/student/edit/${id}`, students)
            .then(res => {
            
                console.log(res);
                 
               
           }
           )
          
           
       
   }
  
    return (
        <div>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <form>
                        <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">{std?.sid}</label>
                                <input type="text" name='name' className="form-control" value={std?.name} onBlur={handleOnChange}  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' className="form-control" defaultValue={std?.email}  onBlur={handleOnChange}  />
                
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">SId</label>
                                <input type="text" name='sid' className="form-control"defaultValue={std?.sid}  onBlur={handleOnChange}  />
                            </div>

                            <button type="submit" className="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal" >Submit</button>
                        </form>
                            </div>
                           
                        </div>
                    </div>
                </div> 
        </div>
    );
};

export default UpdateStudent;