import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  //get the movies from the store
  const movies=useSelector(store=>store.movies);

  return (
    <div className='bg-black'>

      <div className='-mt-20 bg-transparent relative z-2'>

          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Most Played"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Horror"} movies={movies.popularMovies} />

      </div>

    </div>
  )
}

export default SecondaryContainer