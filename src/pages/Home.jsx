import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SearchBox from "../components/SearchBox";
import { Link } from "react-router-dom";
import AddFavorite from "../components/AddFavorite";
import RemoveFavorite from "../components/RemoveFavorite";
import Favorites from "./Favorites";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // APi-yi getirmek
  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=f718e734`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem("movie-app-favorites")
    );
    if (movieFavorites) {
      setFavorites(movieFavorites);
    } else {
      setFavorites([]);
    }
  }, []);

  // Favorilere dusen mehsullari LocalStorage-e setlemek
  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-app-favorites", JSON.stringify(items));
  };

  // Filmi elave etmek
  const addFavoriteMovie = (movie) => {
    if (!favorites.some((favorite) => favorite.imdbID === movie.imdbID)) {
      const newFavoriteList = [...favorites, movie];
      setFavorites(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
    }
  };

  // Film elavelerden silmek
  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className="home-section">
      <div className="home-container">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <MovieList
          movies={movies}
          handleFavoritesClick={addFavoriteMovie}
          favoriteComponent={AddFavorite}
        />
      </div>
      <div className="list-container">
        <div className="basket-section">
          <h3>Favorites</h3>
          <MovieList
            movies={favorites}
            handleFavoritesClick={removeFavoriteMovie}
            favoriteComponent={RemoveFavorite}
          />
          <Link to="/favorites">
            <button type="submit">Go To Basket</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
