/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {  useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from 'firebase/auth';
import {auth} from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';
// import { computeHeadingLevel } from '@testing-library/react';
const Login = () => {
  
  const dispatch=useDispatch();

  const [isSignInForm,setIsSignInForm]=useState(true);
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const [errorMessage,setErrorMessage]=useState(null);



  const toggleSignInForm=()=>{
      setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick=()=>{
    //validating email and password input format -->return null if correctly entered so no message 
    const message=checkValidData(email.current.value,password.current.value);
    //if message is there means ,there is an error in email or password 
    setErrorMessage(message);

    //if message--->error --->return ==>no login 
    if(message) return;

    //sign up/in logic 

    if(!isSignInForm){
      //sign up logic -->create user with email and password  and auth token(auto generated)

      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // console.log(user);
            //once the user logged in then update the profile of the user 
                  updateProfile(user,{
                    displayName: name.current.value, photoURL: USER_AVATAR,
                  }).then(() => {
                    // Profile updated!
                    const {uid,email,displayName,photoURL}=auth.currentUser;
                    dispatch(
                      addUser({
                        uid:uid,
                        email:email,
                        displayName:displayName,
                        photoURL:photoURL,
                      })
                    );
                
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });

           

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+" "+errorMessage);
            // ..
          });

      

    }
    else{
      //sign in logic 
      
       signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            // const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+" "+errorMessage);
          });


    }

  }

  return (
    <div >
        <Header/>
        <div className='absolute'>
            <img 
                src={BG_URL}
                alt='background image not found in login component '
            />
        </div>

        <form 
          onSubmit={(e)=>e.preventDefault()}
        className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In":"Sign Up"} </h1>

        {/* this will only be shown in the signup form not in sign in form  */}
        {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700'/>}

            <input ref={email} type='text' placeholder='email address' className='p-2 my-2 w-full bg-gray-700'/>


            <input ref={password} type='password' placeholder='password' className='p-2 my-2 w-full bg-gray-700'/>

            <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>

            <button className='p-4 my-4 bg-red-700 rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"} </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
              {isSignInForm?"New to Netflix? Sign Up Now ":"Already Registered Sign In Now "}
            </p>
        </form>


    </div>
  )
}

export default Login