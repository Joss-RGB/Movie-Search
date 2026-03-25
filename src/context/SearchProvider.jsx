import { useState } from "react";
import { SearchContext } from "./SearchContext";

export function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <SearchContext.Provider
      value={{ query, setQuery, movies, setMovies, loading, setLoading, error, setError }}
    >
      {children}
    </SearchContext.Provider>
  );
}
