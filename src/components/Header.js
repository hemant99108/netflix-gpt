import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from '..//utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toogleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const dispatch=useDispatch();

  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const showgptSearch=useSelector((store)=>store.gpt.showgptSearch); 

  const handleSignOut=()=>{
      signOut(auth).then(() => {
          // Sign-out successful.
        

        }).catch((error) => {
          // An error happened.
          navigate("/error"); 


        });
    
  }

  const handleGptSearchClick=()=>{
    dispatch(toogleGptSearchView());
  }


  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {//logged in 
         
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));

          navigate("/browse");
          // ...
        } else {//signed out case        

            dispatch(removeUser());

            navigate("/");
        }
      });

      return ()=>unsubscribe();
},[])

   const handleLanguageChange=(e)=>{
       dispatch(changeLanguage(e.target.value));
   }

  return (
    <div className='absolute w-screen flex flex-col md:flex-row justify-between px-8 py-2 bg-gradient-to-b from-black z-10' >

        <img
        className='w-44 mx-auto md:mx-0  '        
         src={LOGO}
         alt='logo'/>

        {user && <div className='flex p-2'>

          {showgptSearch &&  <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
              
              {SUPPORTED_LANGUAGES.map((lang)=>
              (<option value={lang.identifier} key={lang.identifier}>
               {lang.name} 
               </option>))}

            </select>}

            <button className='py-2 px-4 m-2 mx-4 my-2 bg-purple-800 text-white rounded-lg'
            onClick={handleGptSearchClick}>
                {showgptSearch?"HomePage":"GPT Search"}  
            </button>

             <img alt='usericon' src={user?.photoURL} className='w-12 h-12'/>

             <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>

         </div>}


    </div>
  )
}

export default Header



