import Navbar1 from '@/components/Navbar'
import React from 'react'
import FileIcon from '@/assets/icons/Authentication/file.svg'
import DownloadIcon from '@/assets/icons/Authentication/download.svg'
import SideBar from '@/components/DataUploading/SideBar'
import FileUpload from '@/components/DataUploading/FileUpload'

const DataUploading = () => {
    return (
        <div className='h-screen w-full flex flex-col'>
            <Navbar1 />
            <div className='flex-1 flex flex-col md:flex-row items-center w-full h-full'>

                {/* left sidebar */}
                <SideBar />

                {/* Data upload panel */}
                <div className='flex-1 h-full p-8 md:p-16'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-lg text-[#305196] font-semibold'>Upload Student Details</h1>
                        <p className='text-base font-medium text-[#7e7e7e] '>Start by uploading student details in one go to unlock powerful insights for learning. Save time and ensure accuracy with our seamless process.</p>
                    </div>
                    
                    {/* DATA INPUT WILL BE TAKEN FROM HERE */}
                    <div className='flex flex-col md:flex-row  items-center gap-10 mt-5'>
                        <div className=''>
                            <FileUpload />
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
