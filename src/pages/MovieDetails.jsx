import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  // API vasitesi ile mehdusulu getirmek ve id-sine gore mehsulun details sehivesine getmek
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=7c61209b`
      );
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);
  // eger mehsul yoxdusa loading verir, yox eger varsa mehsulu melumatlarini cixardir
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <p>
        <strong>Director:</strong> {movie.Director}
      </p>
      <p>
        <strong>Year:</strong> {movie.Year}
      </p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default MovieDetails;
