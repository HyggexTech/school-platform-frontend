import React from 'react'
import CompletedIcon from '@/assets/icons/Authentication/completed.svg'
import PendingIcon from '@/assets/icons/Authentication/pending.svg'
const SideBar = () => {
    return (
        <div style={{
            boxShadow: "0px 4px 10px 0px rgba(151, 151, 151, 0.66)",
        }} className='w-[374px] h-full bg-[#F6F9FF] flex flex-col gap-4 justify-center'>

            <p className='font-bold text-base text-[#7e7e7e] px-7'>COMPLETE THESE STEPS</p>
            <div className='flex gap-4 py-2 px-7'>
                <img src={CompletedIcon} alt="" />
                <div className='flex flex-col'>
                    <p className='text-[#53937E] font-bold text-base'>Registration Completed</p>
                    <p className='text-sm text-[#979797] font-medium'>You've successfully registered and are ready to get started.</p>
                </div>
            </div>
            <div style={{
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
            }} className='flex gap-4 py-5 bg-white border px-7'>
                <img src={PendingIcon} alt="" />
                <div className='flex flex-col'>
                    <p className='text-[#7e7e7e] font-bold text-base'>Upload your student data</p>
                    <p className='text-sm text-[#979797] font-medium'>Import details about your students using a preformatted CSV/Excel template or manual entry.</p>
                </div>
            </div>
            <div className='flex gap-4 py-2 px-7'>
                <img src={PendingIcon} alt="" />
                <div className='flex flex-col'>
                    <p className='text-[#7e7e7e] font-bold text-base'>Upload your student data</p>
                    <p className='text-sm text-[#979797] font-medium'>Import details about your students using a preformatted CSV/Excel template or manual entry.</p>
                </div>
            </div>

        </div>
    )
}

export default SideBar
