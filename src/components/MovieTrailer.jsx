import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

const MovieTrailer = () => {
  const { name } = useParams();
  const [movieKey, setMovieKey] = useState("");
  const [movieDescripiton, setMovieDescription] = useState("");

  const fetchData = useCallback(async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    try {
      const movieIdResponse = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${name}`
      );
      const movieDescripiton = movieIdResponse.data.results[0]?.overview;
      setMovieDescription(movieDescripiton);
      const movieId = movieIdResponse.data.results[0]?.id;
      if (!movieId) {
        console.error("No movie found with the given name");
        return;
      }

      const videosResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
      );

      const videos = videosResponse.data.results;
      const trailer = videos.find((video) =>
        video.name.toLowerCase().includes("trailer")
      );

      if (trailer) {
        setMovieKey(trailer.key);
      } else {
        console.error("No trailer found for this movie");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }, [name]); // Include `name` because it's used inside the function

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Use `fetchData` in the dependency array

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {movieKey ? (
        <>
          <iframe
            width="700"
            height="400"
            src={`https://www.youtube.com/embed/${movieKey}`}
            title={`${name} - Trailer`}
            allowFullScreen
          ></iframe>
          <p style={{ width: "80%", textAlign: "center", fontSize: "1.5em" }}>
            {movieDescripiton}
          </p>
          <Link to={"/"}>
            <button className="home-btn">Back To Home</button>
          </Link>
        </>
      ) : (
        <p>Loading trailer or no trailer available...</p>
      )}
    </div>
  );
};

export default MovieTrailer;
