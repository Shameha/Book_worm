// import React from 'react';

import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 mx-auto mr-5 px-3 z-10 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 gap-10 rounded-box w-52">
        <Link to='/'><button className="btn">Home</button></Link>
        <Link to='/list'><button className="btn btn-outline">Listed Books</button></Link>
        <button className="btn btn-outline">Pages to Read</button>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-3xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li> <Link to='/'><a><button className="btn btn-outline text-green-600">Home</button></a></Link></li>
        <li><Link to='/list'><a><button className="btn btn-outline">Listed Books</button></a></Link></li>
        <li><Link to='/page'><a><button className="btn btn-outline">Pages to Read</button></a></Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <button className="btn btn-info">Sign In</button>
     <button className="btn btn-success">Sign Up</button>
  </div>
</div>
    );
};

export default NavBar;