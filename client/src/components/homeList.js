import Movie from "./movie";

const HomeList = ({ movies, toggleFavourites }) => {
  const listItems = movies.map((movie) => {
    return (
      <Movie
        movie={movie}
        key={movie.imdbID}
        toggleFavourites={toggleFavourites}
      />
    );
  });

  return (
    <>
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
        <div className="App"></div>
        <div className="Item-container">{listItems}</div>
      </>
    </>
  );
};

export default HomeList;
