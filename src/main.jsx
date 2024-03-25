import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Listed_books from './Pages/Listed_books.jsx'
import PageToRead from './Pages/PageToRead.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
  },
  {
    path:'/list',
    element:<Listed_books></Listed_books>,
  },
  {
    path:'/page',
    element:<PageToRead></PageToRead>,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
  <RouterProvider router={router}/>
  {/* <App/> */}
  </>

)
