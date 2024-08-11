import React from "react";
import NavBar from "../components/NavBar";
import { actors } from "../data";

function Actors() {
  const getActors = actors.map((actor, index) => (
    <article key={index}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie, i) => (
          <li key={i}>{movie}</li>
        ))}
      </ul>
    </article>
  ));

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {getActors}
      </main>
    </>
  );
}

export default Actors;
