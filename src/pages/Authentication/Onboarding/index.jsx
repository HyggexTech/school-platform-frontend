import React, { useEffect, useState } from 'react';
import SelectLanguage from './SelectLanguage';
import SchoolDetails from './SchoolDetails';
import SelectCategory from './SelectCategory';
import Signup from './Signup';
import Navbar1 from '@/components/Navbar';

const Onboarding = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [percentage, setPercentage] = useState(25);

    useEffect(() => {
        // Calculate percentage based on current page
        const newPercentage = (currentPage / 4) * 100;
        setPercentage(newPercentage);
    }, [currentPage]);

    const nextPage = () => setCurrentPage((prev) => prev + 1);
    return (
        <div className="h-screen w-full flex flex-col">
            <Navbar1 />
            {/* <div className={`h-3 w-[${percentage}%] bg-[#305196]`}></div> */}
            <div className="h-3 w-full bg-gray-200">
                <div
                    className="h-full bg-[#305196] transition-all duration-500 ease-in-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            {currentPage === 1 && <SelectLanguage nextPage={nextPage} />}
            {currentPage === 2 && <SchoolDetails nextPage={nextPage} />}
            {currentPage === 3 && <SelectCategory nextPage={nextPage} />}
            {currentPage === 4 && <Signup />}
        </div>
    );
};

export default Onboarding;
