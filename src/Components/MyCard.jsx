import React from "react";
import {
  Typography,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
const MyCard = ({ clickFunction, element }) => {
  return (
    <Card sx={{ width: "100%", flexDirection: "column" }}>
      <CardActionArea
        propskey={element.imdbID}
        onClick={(e) => clickFunction(e, `${element.imdbID}`)}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: 500,
          height: 600,
        }}
      >
        {element.Poster !== "N/A" ? (
          <CardMedia
            className="poster"
            component="img"
            image={element.Poster}
            height="590"
            sx={{ width: "100%" }}
          />
        ) : (
          <div
            className="poster"
            style={{
              width: "100%",

              textAlign: "center",
              background: "grey",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
            }}
          >
            Picture not found.
          </div>
        )}

        <CardContent>
          <Typography
            sx={{ fontSize: 20, height: 50 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {element.Title}
          </Typography>
          <Typography variant="body2" color="text.disabled">
            {element.Type} {element.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MyCard;
