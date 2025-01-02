import OnboardingLayout from '@/layouts/onboarding'
import React, { useState } from 'react'
import Students from '@/assets/images/Authentication/Studentgroup.webp'
import { ChevronDown } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSchoolCategory } from '@/store/Slices/authSlice';
import toast from 'react-hot-toast';

const SelectCategory = (nextPage) => {
    const dispatch = useDispatch()
    const [categoryValue,setCategoryValue] = useState('')
    const categories = [
        '0-100',
        '101-500',
        '501-1000',
        '1001-1500'
    ]
    const submitSchoolCategory = () => {
        if(categoryValue !== ''){
            dispatch(setSchoolCategory(categoryValue))
            nextPage()
        }else {
            toast.error("PLEASE SELECT THE CATEGORY")
        }
    }
    return (
        <OnboardingLayout
            leftchildren={
                <div className='flex flex-col'>
                    <p className='text-[#4472CA] my-5 font-semibold'>3/4</p>
                    <p className="w-[338px] text-[28px] text-[#305196] font-semibold">
                        How many students will use Hyggex?
                    </p>
                    {/* These categories will decide the price tier for the organisation */}
                    <div className="relative w-[343px] mt-4">
                        <select 
                            onChange={(e)=>{
                                setCategoryValue(e.target.value)
                            }}
                            name="language"
                            id="language-select"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#305196] focus:border-[#305196] appearance-none"
                        >
                            <option selected disabled value="">
                                Select number of students
                            </option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>

                        <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <ChevronDown className="text-gray-500" size={20} />
                        </span>
                    </div>
                    
                    <div className='w-full mt-28'>
                        <button onClick={submitSchoolCategory} className='text-base bg-[#1D5AD5] text-white py-3 px-4 rounded-xl'>Continue</button>
                    </div>
                </div>
            }
            rightchildren={
                <img src={Students} alt="Students" />
            }
            percentage={75}
        />
    )
}

export default SelectCategory
