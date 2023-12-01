import FavouriteMovie from "../components/favouriteMovie";
import ClearFavouritesButton from "./clearFavouritesButton";

const FavouriteList = ({ movies, toggleFavourites, clearFavourites }) => {
  const favouriteMovies = movies.filter((movie) => {
    return movie.Favourites === true;
  });

  const listItems = favouriteMovies.map((movie) => {
    return (
      <FavouriteMovie
        movie={movie}
        key={movie.imdbID}
        toggleFavourites={toggleFavourites}
      />
    );
  });

  const listIsPopulated = () => {
    return favouriteMovies.length > 0;
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
      <div className="App">
        <h2>Favourites</h2>
        {listIsPopulated() ? <ClearFavouritesButton favouriteMovies={favouriteMovies} toggleFavourites={toggleFavourites} /> : null}
      </div>
      <div className="Item-container">
        {listIsPopulated() ? <>{listItems}</> : <h2>Favourites List Empty</h2>}
      </div>
    </>
  );
};

export default FavouriteList;
