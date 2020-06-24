const {MovieDb} = require('moviedb-promise');

const moviedb = new MovieDb('6d696dadb0c5a3f9a8c59238a643ac06')


    
async  function searchSerie() {
    let data = await moviedb.movieInfo({ id:410685});
    // const { imdb_id }  =  data 
    //  data = await moviedb.find({id:imdb_id, language:'pt-br',external_source:'imdb_id'})
    //  const serieInfo = await data.movie_results.map((movie) => ({
    //     title: movie.title,
    //     poster: `//image.tmdb.org/t/p/original${movie.poster_path}`,
    //     background: `//image.tmdb.org/t/p/original${movie.backdrop_path}`,
    //     overview: movie.overview     
    //   }))
    console.log(data);
}

     searchSerie()

   



