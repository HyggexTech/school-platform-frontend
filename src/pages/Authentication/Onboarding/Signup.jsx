import OnboardingLayout from '@/layouts/onboarding'
import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';
import SignUpPhoto from '@/assets/images/Authentication/Signupphoto.webp'
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/store/Slices/authSlice';
import toast from 'react-hot-toast';

const Signup = () => {
    const dispatch = useDispatch()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const finishSignUp = () => {
        if(email !== '' && password !== ''){
            dispatch(setCredentials({
                email,
                password
            }))
            // API CALL TO FINISH THE SIGN UP PROCESS AND REGISTER THE SCHOOL
        }
        else {
            toast.error("EMAIL OR PASSWORD IS MISSING")
        }
    }
       
    
    return (
        <OnboardingLayout
            leftchildren={
                <div className='flex flex-col'>
                    <p className='text-[#4472CA] my-5 font-semibold'>4/4</p>
                    <p className="w-[338px] text-[28px] text-[#305196] font-semibold">
                        Set up your login details
                    </p>
                    <p className='mt-4 text-sm text-[#305196] font-medium'>Please provide your email address</p>
                    <input
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        className="outline-none border border-gray-300 p-2 my-2 shadow-[3px_3px_4px_2px_rgba(0,0,0,0.03)] placeholder:text-sm"
                        placeholder="Enter your email"
                        type="text"
                    />
                    <p className='mt-4 text-sm text-[#305196] font-medium'>Create a password to secure your account</p>
                    <div className="relative w-full mt-2">
                        <input
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                            id="password"
                            className="outline-none border border-gray-300 px-2 py-2 rounded-md placeholder:text-xs w-full pr-10"
                            placeholder="Enter your password"
                            type={showPassword ? 'text' : 'password'}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-3 text-gray-300 hover:text-gray-500 focus:outline-none"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Implemented the secure password validation on Frontend */}

                    <div className='flex items-center justify-center flex-col mt-5'>
                        <p className='text-center text-[10px] text-[#7E7E7E] font-medium'>Use 8 or more characters, with a mix of letters, numbers & symbols.</p>
                        <p className='text-center text-[10px] text-[#7E7E7E] font-medium'>
                            Avoid using personal information like birthdays or simple sequences (e.g., 1234).</p>
                        <p className='text-center text-[10px] text-[#7E7E7E] font-medium'>
                            Keep your password confidential and do not share it with others.</p>
                    </div>
                    
                    <div className='w-full mt-20'>
                        <button className='text-base bg-[#1D5AD5] text-white py-3 px-8 rounded-xl'>Finish</button>
                    </div>
                </div>
            }
            rightchildren={
                <img className='p-5 md:pr-16 rounded-full' src={SignUpPhoto} alt="" />
            }
        />
    )
}

export default Signup
