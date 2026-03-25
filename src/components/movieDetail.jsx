import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&append_to_response=credits,recommendations`
      );
      const data = await res.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="app-container">
        <Link to="/" className="back-button">⬅ Volver</Link>
        <p className="loading-text">Cargando detalles de la película...</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h2>{movie.title} ({movie.release_date?.slice(0,4)})</h2>
      <img
        className="movie-detail-img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <p><strong>Sinopsis:</strong> {movie.overview}</p>
      <p><strong>Duración:</strong> {movie.runtime} min</p>
      <p><strong>Géneros:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
      <p><strong>Puntuación:</strong> {movie.vote_average} / 10 ({movie.vote_count} votos)</p>

      <p><strong>Reparto principal:</strong> 
        {movie.credits?.cast.slice(0,5).map(actor => actor.name).join(", ")}
      </p>

      <p><strong>Productora:</strong> 
        {movie.production_companies?.map(pc => pc.name).join(", ")}
      </p>

      <p><strong>Presupuesto:</strong> ${movie.budget?.toLocaleString()} USD</p>
      <p><strong>Recaudación:</strong> ${movie.revenue?.toLocaleString()} USD</p>

      <div className="recommendations">
        <h3>Películas recomendadas</h3>
        <div className="movies-grid">
          {movie.recommendations?.results.slice(0,8).map(rec => (
            <Link key={rec.id} to={`/movie/${rec.id}`} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w200${rec.poster_path}`}
                alt={rec.title}
              />
              <p>{rec.title} ({rec.release_date?.slice(0,4)})</p>
            </Link>
          ))}
        </div>
      </div>

      <Link to="/" className="back-button">⬅ Volver</Link>
    </div>
  );
}

export default MovieDetail;
