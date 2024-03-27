
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Listed_books from './Pages/Listed_books.jsx'
import PageToRead from './Pages/PageToRead.jsx'
import MAinLayout from './Layouts/MAinLayout.jsx'
import SingleBook from './Pages/SingleBook.jsx'
import Read from './Componants/Read/Read.jsx'
// import SingleBook from './Pag?es/SingleBook.jsx'
import  { Toaster } from 'react-hot-toast';
const router = createBrowserRouter([
  {
    path:'/',
    element:<MAinLayout></MAinLayout>,
       children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:() => fetch('BooksDetails.json'),
        },
        {
          path:'/home/:id',
           loader:() => 
           fetch('/BooksDetails.json'),
           element:<SingleBook></SingleBook>,
           children:[
            {
              index:true,
              element:<Read></Read>,
              loader:() => 
              fetch('/BooksDetails.json'),
            },
            {
              path:'read',
              element:<Read></Read>
            }
           ]

        },
        {
          path:'/list',
          element:<Listed_books></Listed_books>  ,
              },
        {
          path:'/page',
          element:<PageToRead></PageToRead>
        }    
            
       ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
  <RouterProvider router={router}/>
  <Toaster></Toaster>
  {/* <App/> */}
  </>

)
