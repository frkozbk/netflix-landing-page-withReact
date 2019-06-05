import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import TitleList from './components/TitleList';
const  App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <TitleList title="Top TV picks" url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
    </>
  );
}

export default App;
