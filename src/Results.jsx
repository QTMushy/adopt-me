import Pet from "./Pet";

import React from "react";

export default function Results({ animalList }) {
  return (
    <div className="search">
      {animalList.length === 0 ? (
        <h1>No Animals Found</h1>
      ) : (
        animalList.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
}
