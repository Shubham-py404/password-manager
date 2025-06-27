import React from 'react';
import './App.css'; 
import { createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx';
import Footer from './components/footer.jsx';
import Contact from './components/contact.jsx';
import Navbar from './components/navbar.jsx';
import { Analytics } from '@vercel/analytics/react';


const Rootlayout=()=>{
  return(
    <>
    <Navbar/>
    <div className='min-h-[63vh]'>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )

}
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Rootlayout/>,
      children:
      [
        {
            path:'/',
            element:<Dashboard/>
         },
         {
            path:'/contact',
            element:<Contact/>
         },
      ]
    }

   
  ])

function App() {
  
  return (
   <>
    <RouterProvider router={router}/>
    <Analytics />
   </>

   ) 
}

export default App;