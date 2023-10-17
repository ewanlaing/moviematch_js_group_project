import MovieByActor from "./movieByActor";
import ActorForm from "./actorForm";

const ActorList = ({
  movies,
  searchByActor,
  toggleFavourites,
  allMovies,
  shuffle,
}) => {
  const listItems = movies.map((movie) => {
    return (
      <MovieByActor
        movie={movie}
        key={movie.imdbID}
        toggleFavourites={toggleFavourites}
      />
    );
  });


  const listIsPopulated = () => {
    return movies.length > 0;
  };

  return (
    <>
      <ActorForm
        searchByActor={searchByActor}
        movies={allMovies}
        shuffle={shuffle}
      />
      <div className="App">
        <h2>Search by Actor</h2>
      </div>
      <div className="Item-container">
        {listIsPopulated() ? <>{listItems}</> : <h2>Loading...</h2>}
      </div>
    </>
  );
};

export default ActorList;
