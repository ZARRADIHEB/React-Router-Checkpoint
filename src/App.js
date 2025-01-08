import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Filter from "./components/Filter";
import moviesData from "./data";
import MovieList from "./components/MovieList";
import AddMovieBtn from "./components/AddMovieBtn";
import AddMovie from "./components/AddMovie";
import MovieTrailer from "./components/MovieTrailer";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  useEffect(() => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        movie.rating >= filterRating
      );
    });
    setFilteredMovies(filtered);
  }, [filterTitle, filterRating, movies]);

  const addNewMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header>
                <Filter
                  setFilterTitle={setFilterTitle}
                  setFilterRating={setFilterRating}
                />
                <AddMovieBtn />
              </header>
              <MovieList movies={filteredMovies} />
            </>
          }
        />

        <Route
          path="/add-movie"
          element={<AddMovie addNewMovie={addNewMovie} />}
        />
        <Route path="/movie/:name" element={<MovieTrailer />} />
      </Routes>
    </div>
  );
}

export default App;
