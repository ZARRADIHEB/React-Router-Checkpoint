import React from "react";
import MovieCard from "./MovieCard";
import Footer from "./Footer";

const MovieList = ({ movies }) => {
  return (
    <div
      className="movie-wrapper"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        justifyContent: "center",
        marginBlock: "70px",
      }}
    >
      {movies && movies.length > 0 ? (
        movies.map((movie, index) => <MovieCard movie={movie} key={index} />)
      ) : (
        <h1 style={{ display: "flex", alignItems: "center" }}>
          No Movies Found
        </h1>
      )}
      <Footer />
    </div>
  );
};

export default MovieList;
