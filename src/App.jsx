import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { AppRoutes } from './route'
import CustomToaster from './components/NotificationToast'

function App() {


  return (
    <div className='overflow-x-hidden max-w-[1680px] mx-auto'>
      <CustomToaster />
      <RouterProvider router={AppRoutes} />
    </div>
  )
}

export default App
