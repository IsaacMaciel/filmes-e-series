const { MovieDb } = require('moviedb-promise');

const moviedb = new MovieDb('6d696dadb0c5a3f9a8c59238a643ac06');

module.exports = {
  async searchMovie(name) {
    const data = await moviedb.searchMovie({ query: name, language: 'pt-br'});
    const movies = await data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster: `//image.tmdb.org/t/p/original${movie.poster_path}`,
      background: `//image.tmdb.org/t/p/original${movie.backdrop_path}`,
      overview: movie.overview,
      type:'movie'
    }));
    return movies;
  },

  async searchSerie(name) {
    const data = await moviedb.searchTv({ query: name, language: 'pt-br' });
    const series = await  data.results.map((serie) => ({
      id: serie.id,
      title: serie.name,
      poster: `//image.tmdb.org/t/p/original${serie.poster_path}`,
      background: `//image.tmdb.org/t/p/original${serie.backdrop_path}`,
      type:'serie'
    }));

    return series;

  },

  async infoMovie (id) {
    let data = await moviedb.movieInfo({ id:id});
    const { imdb_id } = data;
    data = await moviedb.find({id:imdb_id, language:'pt-br',external_source:'imdb_id'})
    const movieInfo = await data.movie_results.map((movie) => ({
       name: movie.title,
       poster: `//image.tmdb.org/t/p/original${movie.poster_path}`,
       background: `//image.tmdb.org/t/p/original${movie.backdrop_path}`,
       overview: movie.overview
     }))

     return movieInfo;

  },
  async infoSerie( id) {
    let data =await moviedb.tvExternalIds({id:id,language:'pt-br'})
    const { imdb_id } = data;
    data = await moviedb.find({id:imdb_id, language:'pt-br',external_source:'imdb_id'});
    const serieInfo = await data.tv_results.map((serie) => ({
      name: serie.name,
      poster: `//image.tmdb.org/t/p/original${serie.poster_path}`,
      background: `//image.tmdb.org/t/p/original${serie.backdrop_path}`,
      overview: serie.overview
    }))

    return serieInfo;

  }
};
