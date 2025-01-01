import React from "react";

function MovieCard({ movie }) {
  return (
    <div
      class="card"
      style={{
        width: "18rem",
        height: "750px",
        textAlign: "center",
        border: "none",
      }}
    >
      <img
        src={movie.posterURL}
        class="card-img-top"
        alt={movie.title}
        style={{ height: "400px" }}
      />
      <div class="card-body bg-dark text-white">
        <h5 class="card-title">{movie.title}</h5>
        <p class="card-text text-danger fw-bold fs-5">{movie.rating} / 10</p>
        <h6 style={{ marginBottom: "15px" }}>{movie.description}</h6>
        <button class="btn btn-success">Go somewhere</button>
      </div>
    </div>
  );
}

export default MovieCard;
