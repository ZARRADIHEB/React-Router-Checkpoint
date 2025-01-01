import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import { moviesData } from "./data";
import MovieList from "./components/MovieList";

function App() {
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  useEffect(() => {
    const filtered = moviesData.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        movie.rating >= filterRating
      );
    });
    setFilteredMovies(filtered);
  }, [filterTitle, filterRating]);

  return (
    <div className="App">
      <Filter
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
