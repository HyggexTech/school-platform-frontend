import Navbar1 from '@/components/Navbar'
import React from 'react'
import CompletedIcon from '@/assets/icons/Authentication/completed.svg'
import PendingIcon from '@/assets/icons/Authentication/pending.svg'
import FileIcon from '@/assets/icons/Authentication/file.svg'
import DownloadIcon from '@/assets/icons/Authentication/download.svg'

const DataUploading = () => {
    return (
        <div className='h-screen w-full flex flex-col'>
            <Navbar1 />
            <div className='flex-1 flex flex-col md:flex-row items-center w-full h-full'>


                {/* left sidebar */}
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


                {/* Data upload panel */}
                <div className='flex-1 h-full p-8 md:p-16'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-lg text-[#305196] font-semibold'>Upload Student Details</h1>
                        <p className='text-base font-medium text-[#7e7e7e] '>Start by uploading student details in one go to unlock powerful insights for learning. Save time and ensure accuracy with our seamless process.</p>
                    </div>
                    
                    {/* DATA INPUT WILL BE TAKEN FROM HERE */}
                    <div className='flex items-center gap-10'>
                        <div className='flex-1'>

                        </div> 

                        {/* Provide a manual data template to inform the user about the required format for data upload. */}

                        <button className='flex text-left mt-5 items-center gap-3 w-[275px]'>
                            <img src={FileIcon} alt="" />
                            <div className='flex flex-col'>
                                <h2 className='text-[#305196] font-bold text-base'>Download Template</h2>
                                <p className='text-[#7e7e7e] text-sm'>Click to download a preformatted Excel/CSV template.</p>
                            </div>
                          <img src={DownloadIcon} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default DataUploading
