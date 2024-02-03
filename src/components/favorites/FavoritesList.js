import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <Grid container spacing={2}>
      {favorites.map((favorite) => (
        <Grid item key={favorite._id} xs={12} sm={6} md={4}>
          <Card>
            <Link
              to={`/product/${favorite.productId}`}
              style={{ textDecoration: "none" }}
            >
              <CardContent>
                <Typography variant="h6">{favorite.productName}</Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FavoritesList;
