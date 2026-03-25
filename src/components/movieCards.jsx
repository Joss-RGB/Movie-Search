import { useContext } from "react";
import { FavoritesContext } from "../context/favoritesContext";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        )}
      </Link>
      <h3>{movie.title}</h3>
      <p>{movie.release_date?.slice(0, 4)}</p>

      {isFavorite ? (
        <button className="remove" onClick={() => removeFavorite(movie.id)}>❌ Quitar</button>
      ) : (
        <button onClick={() => addFavorite(movie)}>⭐ Guardar</button>
      )}
    </div>
  );
}

export default MovieCard;
