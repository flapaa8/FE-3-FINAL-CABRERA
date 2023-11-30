
import React, { useEffect, useState } from "react";
import CardO from "../Components/CardO";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((favorite) => (
          <CardO key={favorite.id} odontologo={favorite} />
        ))}
      </div>
    </>
  );
};

export default Favs;
