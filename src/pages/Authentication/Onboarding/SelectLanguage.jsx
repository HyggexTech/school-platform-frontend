import React, { useState } from 'react'
import OnboardingLayout from '@/layouts/onboarding'
import Langauges from '@/assets/images/Authentication/langs.png';
import { ChevronDown } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '@/store/Slices/authSlice';
import toast from 'react-hot-toast';

const SelectLanguage = ({nextPage}) => {
  const dispatch = useDispatch()
  const [langValue,setLangValue] = useState('')
  const languages = [
    'English',
    'Arabic',
    'Gujarati',
    'Hindi',
    'Kannada',
    'Malayalam',
    'Punjabi',
    'Sanskrit',
    'Tamil',
    'Telugu',
    'Urdu',
  ];

  const submitLanguage = () => {
    if(langValue !== ''){
      dispatch(setLanguage(langValue))
      nextPage()
    } else {
      toast.error("PLEASE SELECT LANGUAGE")
    }
  }
  

  return (
    <OnboardingLayout
      leftchildren={
        <div className='flex flex-col justify-center h-full'>
          <p className='text-[#4472CA] my-5 font-semibold'>1/4</p>
          <p className="w-[338px] text-[28px] text-[#305196] font-semibold">
            Let’s personalize your experience
          </p>

          {/* The selection of language from here should change the be applicable to whole platform */}
          <div className="relative w-[343px] mt-4">
            <select
            onChange={(e)=>{
              setLangValue(e.target.value)
            }}
              name="language"
              id="language-select"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#305196] focus:border-[#305196] appearance-none"
            >
              <option selected disabled value="">
                Choose your preferred language
              </option>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
            <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <ChevronDown className="text-gray-500" size={20} />
            </span>
          </div>

          <div className='w-full mt-28'>
            <button onClick={submitLanguage} className='text-base bg-[#1D5AD5] text-white py-3 px-4 rounded-xl'>Continue</button>
          </div>
        </div>
      }
      rightchildren={
        <img src={Langauges} alt="Languages" />
      }
    />
  )
}

export default SelectLanguage
