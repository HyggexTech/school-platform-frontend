import React, { useState } from 'react';
import SelectLanguage from './SelectLanguage';
import SchoolDetails from './SchoolDetails';
import SelectCategory from './SelectCategory';
import Signup from './Signup';

const Onboarding = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const nextPage = () => setCurrentPage((prev) => prev + 1);
    return (
        <div>
            {currentPage === 1 && <SelectLanguage nextPage={nextPage} />}
            {currentPage === 2 && <SchoolDetails nextPage={nextPage} /> }
            {currentPage === 3 && <SelectCategory nextPage={nextPage} />}
            {currentPage === 4 && <Signup />} 
        </div>
    );
};

export default Onboarding;
