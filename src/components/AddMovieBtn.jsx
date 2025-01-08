import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const AddMovieBtn = () => {
  return (
    <div>
      <Link to="/add-movie">
        <button className="add-movie-btn" type="submit">
          Add new movie
        </button>
      </Link>
    </div>
  );
};

export default AddMovieBtn;
