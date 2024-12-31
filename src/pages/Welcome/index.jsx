import Navbar1 from '@/components/Navbar'
import React from 'react'
import CsvIcon from '@/assets/icons/Authentication/csv.svg'
import PencilIcon from '@/assets/icons/Authentication/pencil.svg'
const WelcomeProcess = () => {
    return (
        <div className='min-h-screen flex flex-col w-full'>
            <Navbar1 />
            <div className='flex-1 flex flex-col items-center mt-8 '>
                <div className='p-5 md:p-0 w-[420px]'>
                    <p className='text-[41px] font-semibold'>Welcome To HyggeX</p>
                    <p className='text-base my-2 text-[#7E7E7E] font-medium'>our personalized teaching assistant is here! Let's make learning smarter, simpler, and tailored for everyone.</p>
                    <div className='flex flex-col px-5 mt-10 gap-8'>
                        <div className='flex items-center justify-center gap-2'>
                            <img src={CsvIcon} alt="Data entry" />
                            <div className='flex flex-col gap-2'>
                                <p className='text-xl text-[#305196] font-bold'>Upload CSV File</p>
                                <p className='text-base text-[#3D3C42] '>Add teacher and student details quickly by uploading a pre-filled CSV sheet.</p>
                            </div>
                        </div>
                        <p className='font-bold text-sm text-center'>OR YOU MAY</p>
                        <div className='flex items-center justify-center gap-2'>
                            <img src={PencilIcon} alt="Data entry" />
                            <div className='flex flex-col gap-2'>
                                <p className='text-xl text-[#305196] font-bold'>Enter Manually</p>
                                <p className='text-base text-[#3D3C42] '>Enter the data step-by-step to suit your needs.</p>
                            </div>
                        </div>
                    </div>
                    <button className='bg-[#1D5AD5] text-white text-sm font-bold w-full py-3 mt-8 rounded-full'>STEP INTO THE FUTURE OF TEACHING</button>
                </div>
            </div>
        </div>
    )
}

export default WelcomeProcess
