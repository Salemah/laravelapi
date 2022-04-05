import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="container loginpagebg">
      <div className="row  align-items-center">
        <div className="col col-md-6 loginpage">

          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>
      </div>
    </div>

  );
};

export default Login;