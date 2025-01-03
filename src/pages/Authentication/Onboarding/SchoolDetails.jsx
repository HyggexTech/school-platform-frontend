import OnboardingLayout from '@/layouts/onboarding'
import React, { useState } from 'react'
import School from '@/assets/images/Authentication/Schoolimage.webp'
import { useDispatch, useSelector } from 'react-redux'
import { setSchoolDetails } from '@/store/Slices/authSlice'
import toast from 'react-hot-toast'

const SchoolDetails = ({ nextPage }) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
  
    const submitSchoolDetails = () => {
        if (name !== '' && address !== '') {
            dispatch(setSchoolDetails({ name, address }))
            nextPage()
            
        } else {
            toast.error('NAME OR ADDRESS IS MISSING')
        }
    }

    return (
        <OnboardingLayout
            leftchildren={
                <div className='flex flex-col'>
                    <p className='text-[#4472CA] my-5 font-semibold'>2/4</p>
                    <p className="w-[338px] text-[28px] text-[#305196] font-semibold">
                        What’s your school’s name?
                    </p>
                    <input
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        className="outline-none border border-gray-300 p-2 my-2 shadow-[3px_3px_4px_2px_rgba(0,0,0,0.03)] placeholder:text-sm"
                        placeholder="Enter school name"
                        type="text"
                    />
                    <p className='mt-4 text-sm text-[#305196] font-medium'>Which city is your school located in?</p>
                    <input
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}
                        className="outline-none border border-gray-300 p-2 my-2 shadow-[3px_3px_4px_2px_rgba(0,0,0,0.03)] placeholder:text-sm"
                        placeholder="Enter city name"
                        type="text"
                    />
                    <div className='w-full mt-28'>
                        <button onClick={submitSchoolDetails} className='text-base bg-[#1D5AD5] text-white py-3 px-4 rounded-xl'>Continue</button>
                    </div>
                </div>
            }
            rightchildren={
                <img src={School} alt="School" />
            }
           
        />
    )
}

export default SchoolDetails
