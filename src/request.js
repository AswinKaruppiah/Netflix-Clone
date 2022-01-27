const API_KEY = "fbcb0357bf2af565c893b481f70fb089";

const request = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=fbcb0357bf2af565c893b481f70fb089`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/trending/tv/day?api_key=fbcb0357bf2af565c893b481f70fb089`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=fbcb0357bf2af565c893b481f70fb089&language=en-US`,
  fetchTopRatedtv: `https://api.themoviedb.org/3/tv/top_rated?api_key=fbcb0357bf2af565c893b481f70fb089&language=en-US&page=1`,
  fetchActionMovies: `https://api.themoviedb.org/3/trending/all/week?api_key=fbcb0357bf2af565c893b481f70fb089`,
  fetchComdeyMovies: `https://api.themoviedb.org/3/tv/popular?api_key=fbcb0357bf2af565c893b481f70fb089&language=en-US&page=1`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=fbcb0357bf2af565c893b481f70fb089&language=en-US&page=1`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/tv/on_the_air?api_key=fbcb0357bf2af565c893b481f70fb089&language=en-US&page=1`,
  fetchDocumentaries: `https://api.themoviedb.org/3/trending/tv/week?api_key=fbcb0357bf2af565c893b481f70fb089`,
};
export default request;
//https://api.themoviedb.org/3/trending/all/week?api_key=fbcb0357bf2af565c893b481f70fb089
//https://api.themoviedb.org/3/trending/movie/day?api_key=fbcb0357bf2af565c893b481f70fb089
//https://api.themoviedb.org/3/trending/tv/day?api_key=fbcb0357bf2af565c893b481f70fb089
//https://api.themoviedb.org/3/movie/now_playing?api_key=fbcb0357bf2af565c893b481f70fb089&language=en-US&page=1
