//this is basically a custom hook or a js function 

import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

//to fetch the movies list from TMDB api 


const useNowPlayingMovies=()=>{


    const dispatch=useDispatch();

    const getNowPlayingMovies= async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing',API_OPTIONS);
  
        const json=await data.json();

        
          
        dispatch(addNowPlayingMovies(json.results));
  
    }
  
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
  
}


export default useNowPlayingMovies;

