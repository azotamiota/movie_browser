import Hero from "./Hero";
import { Link } from "react-router-dom";
// 9f7313e498853544872070c02469e729
// Example movie search = https://api.themoviedb.org/3/search/movie?api_key=9f7313e498853544872070c02469e729&language=en-US&query=alien&page=1&include_adult=false
const MovieCard = ({ movie }) => {
  let posterUrl, detailUrl;

  if (movie.poster_path) {
    posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    detailUrl = `/movies/${movie.id}`;
  } else {
    posterUrl =
      "https://images.unsplash.com/photo-1496268280706-ec91c5e133c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";
  }

  return (
    <div className="card col-lg-2 m-3">
      <img
        src={posterUrl}
        className="card-img-top"
        alt={movie.original_title}
      />
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
  console.log(searchResults, "are the search results");
  let resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  return (
    <>
      <Hero text={`You are searching for ${keyword}`} />
      <div className="container">
        <div className="row">
          {resultsHtml.length === 0
            ? (resultsHtml = (
                <h1
                  className="mt-5 text-center"
                  style={{ width: "70vw", height: "50vh" }}
                >
                  Nothing <span className="badge bg-secondary">Found</span>
                </h1>
              ))
            : resultsHtml}
          {/* {resultsHtml} */}
        </div>
      </div>
    </>
  );
};

export default SearchView;
