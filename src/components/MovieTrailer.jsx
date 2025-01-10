import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";

const MovieTrailer = () => {
  const { name } = useParams();
  const [movieKey, setMovieKey] = useState("");
  const [movieDescripiton, setMovieDescription] = useState("");
  const [noMovie, setNoMovie] = useState(false);
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

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
        setNoMovie(true);
        console.error("No movie found with the given name");

        const interval = setInterval(() => {
          setCount((prev) => {
            if (prev === 1) {
              clearInterval(interval);
              navigate("/");
            }
            return prev - 1;
          });
        }, 1000);
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
  }, [name, navigate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginBottom: "50px",
      }}
    >
      {noMovie ? (
        <>
          <h1>No trailer available for this movie</h1>
          <h3>Return to home page in {count}</h3>
        </>
      ) : (
        <>
          {movieKey ? (
            <>
              <iframe
                width="60%"
                height="400"
                src={`https://www.youtube.com/embed/${movieKey}`}
                title={`${name} - Trailer`}
                allowFullScreen
                style={{ borderRadius: "20px" }}
              ></iframe>
              <p
                style={{
                  width: "90%",
                  textAlign: "center",
                  fontSize: "clamp(1.2em,3vw,1.5rem",
                }}
              >
                {movieDescripiton}
              </p>
              <Link to={"/"}>
                <button className="home-btn">Back To Home</button>
              </Link>
            </>
          ) : (
            <p>Loading trailer...</p>
          )}
        </>
      )}

      <Footer />
    </div>
  );
};

export default MovieTrailer;
