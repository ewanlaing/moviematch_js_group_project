import React from "react";

const ClearFavouritesButton = ({ favouriteMovies, toggleFavourites }) => {
  const handleClick = () => {
    favouriteMovies.forEach((movie) => {
      toggleFavourites(movie);
    });
  };

  return (
    <button onClick={handleClick} className="clearFavouritesButton">
      Clear Favourites
    </button>
  );
};

export default ClearFavouritesButton;
