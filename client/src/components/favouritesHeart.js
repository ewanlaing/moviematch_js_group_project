import React from "react";

const FavouritesHeart = ({ movie, toggleFavourites }) => {
  const handleClick = () => {
    toggleFavourites(movie);
  };

  const movieInFavourites = () => {
    return movie.Favourites;
  };

  return (
    <div className="zoom">
      {movieInFavourites() ? (
        <img
          onClick={handleClick}
          src={require("../images/HeartSolidWhite.png")}
          id='toggledHeartButton'
        />
      ) : (
        <img onClick={handleClick} src={require("../images/Heart1.png")} id='untoggledHeartButton' />
      )}
    </div>
  );
};

export default FavouritesHeart;
