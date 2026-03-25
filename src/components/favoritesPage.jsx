import { useContext } from "react";
import { FavoritesContext } from "../context/favoritesContext";
import MovieCard from "./movieCards";

function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="app-container">
      <h1>Mis Favoritos ⭐</h1>
      {favorites.length === 0 ? (
        <p>No tienes películas guardadas</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
