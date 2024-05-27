import React from 'react'
import { useSelector } from 'react-redux'

import lang from '../utils/languageConstansts';  

const GptSearchBar = () => {    

  const langKey=useSelector((store)=>store.config.lang);


  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2  grid grid-cols-12 bg-black'>


            <input type='text' className='p-4 m-4 col-span-9'
             placeholder={lang[langKey].gptSearchPlaceholder}  />


            <button className='py-2 px-4 bg-red-600 col-span-3 m-4 text-white rounded-lg'>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar