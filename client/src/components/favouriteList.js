import FavouriteMovie from "../components/favouriteMovie";

const FavouriteList = ({ movies, toggleFavourites }) => {
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
      </div>
      <div className="Item-container">
        {listIsPopulated() ? <>{listItems}</> : <h2>Favourites List Empty</h2>}
      </div>
    </>
  );
};

export default FavouriteList;
