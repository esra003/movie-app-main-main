import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent;
  return (
    <div>
      {Array.isArray(props.movies) && props.movies.length > 0 ? (
        props.movies.map((movie, index) => (
          <div className="movielist-container" key={movie.imdbID}>
            <img src={movie.Poster} alt="movie" width={100} />
            <div className="right-section">
              <p>{movie.Title.slice(0, 25)}...</p>
              <div onClick={() => props.handleFavoritesClick(movie)}>
                <FavoriteComponent />
              </div>
              <Link to={`/movie/${movie.imdbID}`}>
                <button type="submit">Read More</button>
              </Link>
              <Link
                to={`https://www.imdb.com/title/${movie.imdbID}/`}
                target="_blank">
                <button type="submit">Go to IMDB Link</button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
