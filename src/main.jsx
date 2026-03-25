import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MovieDetail from "./components/movieDetail";
import FavoritesPage from "./components/favoritesPage";
import { FavoritesProvider } from "./context/FavoritesProvider";
import { SearchProvider } from "./context/SearchProvider"; // 👈 nuevo

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </SearchProvider>
  </React.StrictMode>
);
