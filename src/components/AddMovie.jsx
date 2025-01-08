import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = ({ addNewMovie }) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDes, setMovieDes] = useState("");
  const [movieImg, setMovieImg] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const navigate = useNavigate();

  const addMovieFn = () => {
    const newMovie = {
      title: movieTitle,
      description: movieDes,
      posterURL: movieImg,
      rating: Number(movieRating),
    };
    addNewMovie(newMovie);
    setMovieTitle("");
    setMovieDes("");
    setMovieImg("");
    setMovieRating("");
    navigate("/");
  };

  return (
    <div className="wrapper-add-movie">
      <input
        type="text"
        placeholder="Title"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={movieDes}
        onChange={(e) => setMovieDes(e.target.value)}
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
      />
      <button className="add-movie-btn" type="submit" onClick={addMovieFn}>
        Add Movie
      </button>
    </div>
  );
};

export default AddMovie;
