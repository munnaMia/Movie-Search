import { useEffect, useState } from "react";
import "../style.css";
import searchIcon from "../search.svg";
import MovieCard from "./MovieCard";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=884de661";

export default function MainPage() {
  const [searchMovieinput, setSearchMovieInput] = useState("");
  const [movie, setMovie] = useState([]);

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search);
  };

  useEffect(() => {
    searchMovie("supermen");
  }, []);

  return (
    <>
      <div className="main-Container">
        <h1>Movie Search</h1>

        <div className="search-box">
          <input
            placeholder="Search movie"
            value={searchMovieinput}
            onChange={(e) => {
              setSearchMovieInput(e.target.value);
            }}
          />

          <img
            src={searchIcon}
            onClick={() => {
              searchMovie(searchMovieinput);
            }}
          />
        </div>

        {movie?.length > 0 ? (
          <div className="movie-result">
            {movie.map((ele) => {
              <MovieCard movieData={ele} />;
            })}
          </div>
        ) : (
          <div className="noMovie">
            <h2>No Movie Avaiable</h2>
          </div>
        )}
      </div>
    </>
  );
}
