import Navbar1 from '@/components/Navbar'
import React, { useState } from 'react'
import FileIcon from '@/assets/icons/Authentication/file.svg'
import DownloadIcon from '@/assets/icons/Authentication/download.svg'
import SideBar from '@/components/DataUploading/SideBar'
import FileUpload from '@/components/DataUploading/FileUpload'
import toast from 'react-hot-toast'

const DataUploading = () => {
    const [studentData, setStudentData] = useState(null)
    const [teacherData, setTeacherData] = useState(null)
    const [studentSetup, setStudentSetup] = useState(true)
    const [teacherSetup, setTeacherSetup] = useState(false)


    //FUNCTION TO CALL THE API TO UPLOAD STUDENT DATA IN DATABASE
    const uploadStudentData = (file) => {
        console.log(" STUDENT FILE DATA", file)
        setStudentData(file)
    }

    //FUNCTION TO CALL THE API TO UPLOAD THE TEACHER DATA IN DATABASE
    const uploadTeacherData = (file) => {
        console.log("TEACHER FILE DATA", file);
        setTeacherData(file)
    }
    
    const finsihStudentSetup = () => {
        if (studentData != null) {
            setStudentSetup(false)
            setTeacherSetup(true)
        } else {
            toast.error("PLEASE UPLOAD THE STUDENT DATA")
        }
    }

    const finishTeacherSetup = () => {
        if(teacherData && studentData != null){

        } else {
            toast.error("PLEASE UPLOAD THE TEACHER DATA")
        }
    }

    return (
        <div className='h-screen w-full flex flex-col'>
            <Navbar1 />
            <div className='flex-1 flex flex-col md:flex-row items-center w-full h-full'>

                {/* left sidebar */}
                <SideBar setup={studentSetup ? "STUDENT" : "TEACHER"} />

                {/* Data upload panel */}
                <div className='h-full  p-8 md:p-16'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-lg text-[#305196] font-semibold'>
                            Upload {studentSetup ? "Student" : "Teacher"} Details
                        </h1>
                        <p className='text-base font-medium text-[#7e7e7e]'>
                            Start by uploading {studentSetup ? "student" : "teacher"} details in one go to unlock powerful learning insights. Save time and ensure accuracy with our seamless process.
                        </p>

                    </div>

                    {/* DATA INPUT WILL BE TAKEN FROM HERE */}
                    <div className='flex flex-col md:flex-row  items-center gap-10 mt-5'>
                        <div className=''>
                            {studentSetup ? <FileUpload onFileSelect={uploadStudentData} setup={'STUDENT'} /> : <FileUpload onFileSelect={uploadTeacherData} setup={'TEACHER'} />}
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
                    {studentSetup ? <button onClick={finsihStudentSetup} className='bg-[#1D5AD5] text-white m-5 md:mt-20 md:mx-20 py-3 px-4 rounded-full font-bold'>CONTINUE TO SETUP TEACHER DATA</button> :
                        <button onClick={finishTeacherSetup} className='bg-[#1D5AD5] text-white m-5 md:mt-20 md:mx-20 py-3 px-4 rounded-full font-bold'>CONTINUE TO ACCESS DASHBOARD</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default DataUploading
