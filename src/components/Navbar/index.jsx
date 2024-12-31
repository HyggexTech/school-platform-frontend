import React from 'react'
import Logo from '@/assets/images/Logo/Logo2.png'
import { Bell } from 'lucide-react'

const Navbar1 = () => {
  return (
    <div className='w-full py-6 px-16 flex items-center justify-between border-b'>
      <img src={Logo} alt="Hyggex" />
      <div className='flex items-center gap-2'>
      <Bell size={24} className='text-[#06286E]' strokeWidth={1.25} />
      </div>
    </div>
  )
}

export default Navbar1
