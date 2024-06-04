import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // local storagede setlenmis favori mehsullari parse-layib movie favorites-e setleyirik. daha sonra onu da favorites-e setleyirik
  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem("movie-app-favorites")
    );
    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);

  return (
    // eger mehsulumuz yoxdusa mehsulumuz yoxdu deyir yox eger varsa favorileri map-leyerek mehsullari cixardir
    <>
      <h1 className="favorites-text">Favorites</h1>
      <div className="favorites-section">
        {favorites.length === 0 ? (
          <p>There is not favorite movie. </p>
        ) : (
          favorites.map((movie) => (
            <div key={movie.imdbID}>
              <h2>{movie.Title.slice(0, 10)}...</h2>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Favorites;
