import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const AddMovie = ({ addNewMovie }) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDes, setMovieDes] = useState("");
  const [movieImg, setMovieImg] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const navigate = useNavigate();

  const addMovieFn = (e) => {
    e.preventDefault();
    const newMovie = {
      title: movieTitle,
      description: movieDes,
      posterURL: movieImg,
      rating: Number(movieRating),
      delete: "Delete",
    };

    const existingMovies = JSON.parse(localStorage.getItem("movieInfos")) || [];

    const updatedMovies = [...existingMovies, newMovie];

    localStorage.setItem("movieInfos", JSON.stringify(updatedMovies));

    addNewMovie(newMovie);
    setMovieTitle("");
    setMovieDes("");
    setMovieImg("");
    setMovieRating("");
    navigate("/");
  };

  return (
    <div className="wrapper-add-movie" style={{ textAlign: "center" }}>
      <form onSubmit={addMovieFn}>
        <input
          type="text"
          placeholder="Title"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={movieDes}
          onChange={(e) => setMovieDes(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          value={movieImg}
          onChange={(e) => setMovieImg(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating"
          value={movieRating}
          onChange={(e) => setMovieRating(e.target.value)}
          max={10}
          min={3}
          required
        />
        <button className="add-movie-btn" type="submit">
          Add Movie
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default AddMovie;
