import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        height: "650px",
        textAlign: "center",
        border: "none",
      }}
    >
      <img
        src={movie.posterURL}
        className="card-img-top"
        alt={movie.title}
        style={{ height: "400px" }}
      />
      <div className="card-body bg-dark text-white">
        <h5 style={{ textTransform: "capitalize" }} className="card-title">
          {movie.title}
        </h5>
        <p className="card-text text-danger fw-bold fs-5">
          {movie.rating} / 10
        </p>
        <h6 style={{ marginBottom: "15px" }}>{movie.description}</h6>
        <Link to={`/movie/${movie.title}`}>
          <button className="btn btn-success">Watch Trailer</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
