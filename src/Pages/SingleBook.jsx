// import React from 'react';


// import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleBook = () => {
//     const [a,b]=useState;
// const useEffect (() =>{
//     fetch('BooksDetails.json')
//     .then(res =>res.json())
//     .then(data => b(data))
// },[])

    const singleBook = useLoaderData();
    console.log(singleBook);
    const{id} = useParams();
    const single = singleBook.find( u=> u.id == id);
    const{bookName} = single; 

    return (
        <div>
          <p>{bookName}</p>    
        </div>
    );
};

export default SingleBook;