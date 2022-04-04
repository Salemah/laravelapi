import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Addstudent = () => {
    const [student,setStudent] = useState('');
    const [addsuccess,setAddsuccess] = useState(false);
    
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newaptdata = { ...student };
        newaptdata[feild] = value;
        setStudent(newaptdata);
       


    }
    const close= ()=>{
        setAddsuccess(false);
    }
    const handleaddservice = e => {
        const students = {
            ...student
        }
        axios.post('http://localhost:8000/api/student/add', students)
            .then(res => {
                if(res.status=200){
                    setAddsuccess(true);
                  
                
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

                            <button type="submit" className="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal" >Submit</button>
                        </form>
                    </div>

                </div>
                {/*  */}
                {addsuccess &&
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                   
                     <div class="modal-body">
                      <p>New student added succfeull</p>
                    </div> 
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"onClick={close} >Close</button>
                      
                      
                    </div>
                  </div>
                </div>
              </div>}

            </div>
            
        </div>
        
    );
};

export default Addstudent;