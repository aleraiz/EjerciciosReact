import React from "react";
import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Card = ({ movie }) => {
  const [movieInfo, setMovieInfo] = useState("");

  useEffect(() => {
    const getInfo = async () => {
      const response = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${movie}?api_key=a83bb3b8bfd5c202ec70e0f79fb4d4e2`,
      });
      console.log(response.data);
      setMovieInfo(response.data);
    };
    getInfo();
  }, [movie]);

  return (
    <div className="card">
      <div className="movieName">
        {movieInfo.original_title} ({movieInfo.release_date})
      </div>
      <div
        className={
          movieInfo.vote_average > 8
            ? "puntajeExcelente"
            : movieInfo.vote_average > 5
            ? "puntajeRegular"
            : "puntaje"
        }
      >
        {movieInfo.vote_average}
      </div>
      <div className="imgDiv">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
          alt="imagenPelicula"
        />
      </div>
    </div>
  );
};

export default Card;
