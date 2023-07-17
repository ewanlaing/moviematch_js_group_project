import MovieByTitle from "./movieByTitle";
import TitleForm from "../components/titleForm";



const TitleList = ({movies, searchByTitle, addToFavourites, favouriteMovies}) => {

    const listItems = movies.map((movie) => {
      return(
        <MovieByTitle movie={movie} key={movie.imdbID} addToFavourites={addToFavourites} favouriteMovies={favouriteMovies}/>
      )
    })

  return(
    <>
    <TitleForm searchByTitle={searchByTitle}/>
    <div className="App">
    <h2>Search by Title</h2>
    </div>
    <div className="Item-container">
    {listItems}
    </div>
    </>
  )
}

export default TitleList;