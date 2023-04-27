import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';

const Home = lazy(() => import('./pages/home/Home'));
const Movies = lazy(() => import('./pages/movies/Movies'));
const MovieDetails = lazy(() => import('./pages/movieDetails/MovieDetails'));

export default function App() {
  return (
    <div>
      <Nav />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
}
