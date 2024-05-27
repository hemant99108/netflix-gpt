import React from 'react'
import GptSearchBar from './gptSearchBar'
import GptMovieSuggestion from './gptMovieSuggestion'
import { BG_URL } from '../utils/constants'


const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img 
                src={BG_URL}
                    alt='logo'
                />
        </div>

        <GptSearchBar/>
        <GptMovieSuggestion/>

    </div>
  )
}

export default GptSearch