import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const handleDelete = (e) => {
    e.preventDefault();
    const card = e.target.closest(".card");
    card.remove();
    let movies = JSON.parse(localStorage.getItem("movieInfos")) || [];
    movies = movies.filter((m) => m.title !== movie.title);
    localStorage.setItem("movieInfos", JSON.stringify(movies));
  };

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
      <Link to={`/movie/${movie.title}`} style={{ textDecoration: "none" }}>
        <img
          src={movie.posterURL || "https://via.placeholder.com/288x400"}
          className="card-img-top"
          alt={movie.title}
          style={{ height: "400px" }}
        />
      </Link>
      <div className="card-body bg-dark text-white">
        <h5 style={{ textTransform: "capitalize" }} className="card-title">
          {movie.title}
        </h5>
        <p className="card-text text-danger fw-bold fs-5">
          {movie.rating} / 10
        </p>
        <h6 style={{ marginBottom: "15px" }}>{movie.description}</h6>
        <Link to={`/movie/${movie.title}`} style={{ textDecoration: "none" }}>
          <button className="btn btn-success">Watch Trailer</button>
        </Link>
        <br />
        <span
          onClick={handleDelete}
          style={{
            marginTop: "10px",
            cursor: "pointer",
            color: "red",
            fontSize: "1.1rem",
            display: "inline-block",
          }}
        >
          {movie.delete}{" "}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
