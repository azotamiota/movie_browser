import Hero from "./Hero";
import { Link } from "react-router-dom";
// 9f7313e498853544872070c02469e729
// Example movie search = https://api.themoviedb.org/3/search/movie?api_key=9f7313e498853544872070c02469e729&language=en-US&query=alien&page=1&include_adult=false
const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
const detailUrl = `/movies/${movie.id}`

  return (
    <div className="card col-lg-2 m-3">
      <img src={posterUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>

        <Link to={detailUrl} className="btn btn-primary">
          Show details
        </Link>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  return (
    <>
      <Hero text={title} />
      <div className="container">
        <div className="row">{resultsHtml}</div>
      </div>
    </>
  );
};

export default SearchView;
