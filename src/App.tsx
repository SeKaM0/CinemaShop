import { Box, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getData } from './api/api';
import './App.scss';
import { Header } from './components/Header/Header';
import { Intro } from './components/Intro/Intro';
import { MoviesList } from './components/MoviesList/MoviesList';

export const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  const getMovies = async () => {
    const data: Data = await getData();

    setMovies(data.Films);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Header />
      <Intro />
      {movies ? <MoviesList movies={movies} />
        : (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )}
    </>
  );
};
