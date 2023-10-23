import React, { useState, useRef } from "react";
import ScrollToTop from "./scrollToTop";

const ActorForm = ({ searchByActor, movies, shuffle }) => {
  const [text, setText] = useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchByActor(text);
  };

  const handleRandomActor = () => {
    const actors = movies.map((movie) => {
      return movie.Actors;
    });
    const randomActor = actors[Math.floor(Math.random() * actors.length)];
    const singleRandomActor = randomActor.split(",");
    const ActualSingleRandomActor = singleRandomActor[0];
    console.log({ ActualSingleRandomActor });
    searchByActor(ActualSingleRandomActor);
  };

  const handleShuffle = () => {
    shuffle(movies);
  };

  return (
    <>
      <div  className="App">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Actor"
            onChange={handleText}
            className="text-input-box"
          />
          <input type="submit" className="submit" />
        </form>

        <button className="random" onClick={handleRandomActor}>
          Random Actor
        </button>
        <button className="reset" onClick={handleShuffle}>
          Reset
        </button>
      </div>
    </>
  );
};

export default ActorForm;
