import { useState } from 'react'
import Home from './compenents/Home/Home'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Layout from './compenents/Layout/Layout'
import About from './compenents/About/About'
import Contact from './compenents/contact/Contact'
import Portfolio from './compenents/portofolio/portfolio'

function App() {
  const routers = createBrowserRouter([
    {  path: '/',  element: <Layout />, children: [
        { index: true, element: <Navigate to="/home" /> }, 
        { path: 'home', element: <Home /> },
        { path: '/about', element: <About/> },
        { path: '/contact', element: <Contact/> },
        {path: '/portfolio',element: <Portfolio/>}


      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App

