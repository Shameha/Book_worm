// import React from 'react';

import { Outlet } from "react-router-dom";
import NavBar from "../Componants/NavBar/NavBar";

const MAinLayout = () => {
    return (
        <div>
            <div>
          <NavBar></NavBar>         
            </div>
            <div className="m-auto  min-h-screen px-11">

       <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MAinLayout;