import Navbar1 from '@/components/Navbar'
import React from 'react'
import QuestionMark from '@/assets/icons/Authentication/questionmark.svg'
const OnboardingLayout = ({ leftchildren, rightchildren, percentage }) => {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <Navbar1 />
            <div className={`h-3 w-[${percentage}%] bg-[#305196]`}></div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full flex-1">
                {/* Left Section */}
                <div className="w-full h-full flex flex-col items-center justify-center">
                    {leftchildren}
                </div>
                {/* Right Section */}
                <div className="w-full h-full flex flex-col items-center justify-center relative">
                    {rightchildren}
                    <div className='cursor-pointer absolute bottom-4 right-5'>
                        <img src={QuestionMark} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnboardingLayout
