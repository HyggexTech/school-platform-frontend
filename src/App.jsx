import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { AppRoutes } from './route'

function App() {


  return (
    <div className= 'overflow-x-hidden max-w-[1680px] mx-auto'>
     <RouterProvider router={AppRoutes} />
    </div>
  )
}

export default App
