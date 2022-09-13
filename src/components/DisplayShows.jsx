import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ReadMore from "./ReadMore";

const DisplayActor = ({ search, val }) => {
  const [searchShow, setSearchShow] = useState([]);

  let data = "";

  if (search.length > 0) {
    data = `https://api.tvmaze.com/search/shows?q=${search}`;
  } else {
    data = `https://api.tvmaze.com/search/shows?q="friends"`;
  }

  useEffect(() => {
    if (val == "shows") {
      if (searchShow.length > 0) {
        axios.get(data).then((res) => {
          setSearchShow(res.data);
        });
      } else {
        axios.get(data).then((res) => {
          setSearchShow(res.data);
        });
      }
    } else {
      setSearchShow([]);
    }
  }, [search, val]);

  const filteredSearchShow = searchShow.filter((s) =>
    s.show.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Grid container justify="center" spacing="10">
      {filteredSearchShow.map((s, id) => (
        <Grid item key={id}>
          <Card sx={{ padding: "0.5rem" }}>
            <CardMedia
              component="img"
              alt="Akon Actor"
              image={
                s && s.show && s.show.image && s.show.image.medium
                  ? s.show.image.medium
                  : "https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png"
              }
              sx={{ height: "300px", width: "300px" }}
            />
            <CardContent sx={{ width: "15rem" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                sx={{ color: "#5B2A8C", fontWeight: "600" }}
              >
                {s && s.show && s.show.name}
              </Typography>
              {/* <Typography component="p">{s.show.summary}</Typography> */}
              <ReadMore details={s && s.show && s.show.summary} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DisplayActor;
