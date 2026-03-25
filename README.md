# Movie Search App

A movie search application built with **React + Vite**, using the **TMDB API**.  
It allows users to search for movies, view detailed information (synopsis, genres, runtime, cast, production companies, budget, revenue), and explore recommended movies.  
The app also includes a favorites section to save preferred titles.

---

## Features

- Search movies by title using the TMDB API.
- Results sorted by release year.
- Detailed movie view with:
  - Synopsis
  - Runtime
  - Genres
  - Rating and vote count
  - Main cast
  - Production companies
  - Budget and revenue
- Recommended movies section.
- Favorites list to save movies.
- Search state synchronized with the URL (`/?query=naruto`), ensuring correct results when navigating back.
- Styled interface with loading indicators.

---

## Technologies

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) for navigation
- [TMDB API](https://developer.themoviedb.org/) for movie data
- Context API for global state management
- Custom CSS for styling

---

## Project Structure

## Project Structure

src/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── assets/
│   └── (static files, images, etc.)
├── components/
│   ├── favoritesPage.jsx
│   ├── movieCards.jsx
│   ├── movieDetail.jsx
├── context/
│   ├── favoritesContext.jsx
│   ├── FavoritesProvider.jsx
│   ├── SearchContext.jsx
│   ├── SearchProvider.jsx
.env

---

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Joss-RGB/Movie-Search.git
   cd Movie-Search
2. Install dependencies:
   ```bash
   npm install
3. Create a .env file in the root directory with your TMDB API key:
   ```Code
   VITE_TMDB_API_KEY=ea951ad86afd3fb41e355f87a2228407
4. Start the development server:
   ```bash
   npm run dev
---

## Screenshots
![alt text](/Screenshots/image.png)
![alt text](/Screenshots/image-1.png)
![alt text](/Screenshots/image-2.png)

## Author
Developed by Jose as a practice project with React, Vite, and API integration.

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute it.