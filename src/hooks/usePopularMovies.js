//this is basically a custom hook or a js function 

import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

//to fetch the movies list from TMDB api 


const usePopularMovies=()=>{


    const dispatch=useDispatch();

    const popularMovies=useSelector((store)=>store.movies.popularMovies);

    const getPopularMovies= async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/popular',API_OPTIONS);
  
        const json=await data.json();

        
          
        dispatch(addPopularMovies(json.results));
  
    }  
  
    useEffect(()=>{
      !popularMovies && getPopularMovies();
    },[])
  
}


export default usePopularMovies;

