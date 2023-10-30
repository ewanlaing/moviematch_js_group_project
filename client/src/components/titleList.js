import MovieByTitle from "./movieByTitle";
import TitleForm from "../components/titleForm";

const TitleList = ({
  movies,
  searchByTitle,
  toggleFavourites,
  favouriteMovies,
  allMovies,
  shuffle,
}) => {
  const listItems = movies.map((movie) => {
    return (
      <MovieByTitle
        movie={movie}
        key={movie.imdbID}
        toggleFavourites={toggleFavourites}
        favouriteMovies={favouriteMovies}
      />
    );
  });

  const listIsPopulated = () => {
    return movies.length > 0;
  };

  return (

    <>
      <br></br>
    <br></br>
    <br></br>
    <br></br> 
    <br></br> 
    <br></br> 
    <br></br> 
    <br></br> 
    <br></br> 
      <TitleForm
        searchByTitle={searchByTitle}
        movies={allMovies}
        shuffle={shuffle}
      />
      <div className="App">
        <h2>Search by Title</h2>
      </div>
      <div className="Item-container">
        {listIsPopulated() ? <>{listItems}</> : <h2>Loading...</h2>}
      </div>
    </>
  );
};
export default TitleList;
