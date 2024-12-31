import React, { useState } from 'react'
import Background from '@/assets/images/Authentication/LoginBackground.webp'
import Logo from '@/assets/images/Logo/Logo.png'
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{
            background: `url(${Background})`,
        }} className='min-h-screen flex flex-col items-center justify-center gap-2'>
            <img src={Logo} alt="" />
            <div className='w-96 bg-white  rounded-2xl flex items-center flex-col shadow-[0px_0px_9px_0px_rgba(0, 0, 0, 0.25)] p-8'>
                <h1 className='text-3xl font-bold text-[#305196] my-3'>Login</h1>
                <div className='flex flex-col my-3 gap-2 w-full'>
                    <label htmlFor="">Enter your email ID</label>
                    <input className='outline-none border border-gray-300 px-2 py-2 rounded-md placeholder:text-xs' placeholder='example@gmail.com' type="email" />
                </div>
                <div className="flex flex-col my-3 gap-2 w-full">
                    <label htmlFor="password">Enter your password</label>
                    <div className="relative w-full">
                        <input
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
                </div>
                <p className='self-end text-xs text-[#292D32] underline font-bold'>Forgot password?</p>
                <button className='w-full bg-[#305196] my-4 py-2 text-lg text-white font-bold rounded-lg'>Log in</button>
            </div>
        </div>
    )
}

export default Login
