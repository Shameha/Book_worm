
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Listed_books from './Pages/Listed_books.jsx'
import PageToRead from './Pages/PageToRead.jsx'
import MAinLayout from './Layouts/MAinLayout.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<MAinLayout></MAinLayout>,
       children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/list',
          element:<Listed_books></Listed_books>  
              }  ,
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
  {/* <App/> */}
  </>

)
