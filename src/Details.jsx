import React from "react";
import { useParams } from "react-router-dom"; // useParams is a hook
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

export const Details = () => {
  const { id } = useParams(); // useParams returns an object with the id property
  const result = useQuery(["details", id], fetchPet);
  if (result.isLoading) return <h1>Loading...</h1>;
  if (result.isError) return <h1>Something went wrong</h1>;

  const pet = result.data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};
