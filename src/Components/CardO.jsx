
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";

const CardO = ({ odontologo }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    
    const isAlreadyFavorite = favorites.some((fav) => fav.id === odontologo.id);

   
    if (!isAlreadyFavorite) {
      favorites.push(odontologo);
    } else {
      const updatedFavorites = favorites.filter((fav) => fav.id !== odontologo.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      return; 
    }

    
    localStorage.setItem("favorites", JSON.stringify(favorites));

    
    setIsFavorite(true);
  };

  return (
    <Card sx={{ width: 300, height: 400 }}>
      <CardHeader title={odontologo.name} subheader={odontologo.username} />
      <CardMedia
        component="img"
        height="194"
        image="https://i.pinimg.com/564x/e1/4b/51/e14b511da02190bfb083f91d96995749.jpg"
        alt="Paella dish"
      />

      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
          <FavoriteIcon color={isFavorite ? "error" : "inherit"} />
        </IconButton>
        
        <Link to={`/detail/${odontologo.id}`}>
          <Button variant="contained" color="primary">
            Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardO;
