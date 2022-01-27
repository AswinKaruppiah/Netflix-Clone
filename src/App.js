//netflix-clone-7acba
import React from "react";
import "./App.css";
import Row from "./row";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Navbar";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row
        title="NetFlix Original"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Trending Week" fetchUrl={request.fetchDocumentaries} />
      <Row title="Top Rated TV" fetchUrl={request.fetchTopRatedtv} />
      <Row title="Popular" fetchUrl={request.fetchComdeyMovies} />
      <Row title="Action movies" fetchUrl={request.fetchActionMovies} />
      <Row title="movies rigth now" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Darma movies" fetchUrl={request.fetchRomanceMovies} />
    </div>
  );
}

export default App;
