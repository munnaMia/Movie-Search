import { useState } from 'react';
import '../style.css'

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=884de661";

export default function MainPage(){
    const [searchMovieinput, setSearchMovieInput] = useState('')

    // const searchMovie = async (title)=>{
    //     const res = await fetch(`${API_URL}&s=${title}`)
    //     const data = await res.json()
    // }

    return(<>
        <div className='main-Container'>
            <h1>Movie Search</h1>

            <div className='search-box'>
                <input placeholder='Search movie'
                value={searchMovieinput}
                onChange={(e)=>{setSearchMovieInput(e.target.value)}} />

                <img src="" alt="" />
            </div>

            <div className='movie-result'>

            </div>

        </div>
    </>)
}
