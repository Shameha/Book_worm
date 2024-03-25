// import React from 'react';

import Banner from "../Componants/Banner/Banner";
import NavBar from "../Componants/NavBar/NavBar";

const Home = () => {
    return (
        <div>
             {/*nav bar*/}
             <NavBar></NavBar>
             {/* <h1>Home page</h1> */}
             <Banner></Banner>
        </div>
    );
};

export default Home;