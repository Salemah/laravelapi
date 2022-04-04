import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/allstudent">allstudent</Link>
            {/* <Link to='/'>Home</Link> */}
            {/* <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/allstudent">All Student</a>
            <a href="/post">Post</a> */}
        </div>
    );
};

export default Header;