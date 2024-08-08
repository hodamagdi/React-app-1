import { createHashRouter, RouterProvider } from 'react-router-dom';
import React, { useState} from 'react'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';


function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  let router = createHashRouter([
    {
      path: '', element: <Layout setNavbarHeight={setNavbarHeight}/>, children: [
        {index : true, element: <Home navbarHeight={navbarHeight} /> },
        { path: 'about', element: <About navbarHeight={navbarHeight} /> },
        { path: 'portfolio', element: <Portfolio navbarHeight={navbarHeight} /> },
        { path: 'contact', element: <Contact navbarHeight={navbarHeight} /> },
        { path: '*', element: <NotFound navbarHeight={navbarHeight}/> },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
