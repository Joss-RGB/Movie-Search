import "./App.css";
import MovieCard from "./components/movieCards";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { SearchContext } from "./context/SearchContext";

function App() {
  const { query, setQuery, movies, setMovies, loading, setLoading, error, setError } =
    useContext(SearchContext);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Al cargar o cambiar la URL, lee el parámetro "query"
  useEffect(() => {
    const q = searchParams.get("query") || "";
    setQuery(q);

    const fetchMovies = async () => {
      if (!q) return;
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&query=${q}`
        );
        const data = await res.json();

        const sorted = data.results.sort((a, b) => {
          const yearA = a.release_date ? parseInt(a.release_date.slice(0, 4)) : 0;
          const yearB = b.release_date ? parseInt(b.release_date.slice(0, 4)) : 0;
          return yearA - yearB;
        });

        setMovies(sorted);
      } catch (err) {
        console.error(err);
        setError("Error al buscar películas");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchParams, setQuery, setMovies, setLoading, setError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Actualiza la URL con el query
    navigate(`/?query=${query}`);
  };

  return (
    <div className="app-container">
      <h1>Buscador de Películas 🎬</h1>
      <Link to="/favorites" className="favorites-link">Ver mis Favoritos</Link>

      <div className="search-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Escribe una película..."
          />
          <button type="submit">Buscar</button>
        </form>
      </div>

      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {movies.length === 0 && !loading && query !== "" && (
        <p>No se encontraron películas</p>
      )}
      {movies.length === 0 && !loading && query === "" && (
        <p>Escribe el nombre de una película y presiona buscar</p>
      )}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
