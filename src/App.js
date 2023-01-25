import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [movie, setMovie] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    searchMovies("Action");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovie(data.Search);
  };

  return (
    <div className="app">
      <div className="navbar">
        <div className="logo">
          <img src="https://img.icons8.com/external-others-pike-picture/100/null/external-movies-renting-movies-service-others-pike-picture-2.png" />
          <h1>MovieFlix</h1>
        </div>

        <div className="search-box">
          <img
            className="search-logo"
            src="https://img.icons8.com/cotton/64/null/search--v1.png"
          />
          <div className="input-search">
            <input
              className="search-bar"
              type="text"
              placeholder="Search for movies"
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
            />
            <span className="input-line"></span>
          </div>

          <button
            className="btn"
            onClick={() => {
              searchMovies(searchMovie);
            }}
          >
            Search
          </button>
        </div>

        <div className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">Movies</li>
          <li className="nav-item">Genres</li>
          <img
            className="nav-item"
            src="https://img.icons8.com/external-others-inmotus-design/67/null/external-Night-Mode-virtual-keyboard-others-inmotus-design.png"
          />
        </div>
      </div>

      {movie?.length > 0 ? (
        <div className="container">
          <h4 className="search-results">{movie.length} Movies Found</h4>
          <br />
          <div className="movies-cards">
            {movie.map((mov) => (
              <MovieCard mov={mov} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <h1 className="not-found">
            No movies that match that name. Please search for something else 🎬
          </h1>
        </div>
      )}
    </div>
  );
};

export default App;
