import React, { useState } from 'react';
import Navbar1 from '@/components/Navbar';

const Onboarding = () => {
    
    return (
        <div className="min-h-screen w-full flex flex-col">
            <Navbar1 />
            <div className='h-3 w-[100%] bg-[#305196]'></div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full flex-1">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center">
                   
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
