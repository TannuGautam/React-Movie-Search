import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ReadMore from "./ReadMore";

const DisplayActor = ({ search, val }) => {
  const [searchActor, setSearchActor] = useState([]);

  let data = "";

  if (search.length > 0) {
    data = `https://api.tvmaze.com/search/people?q=${search}`;
  } else {
    data = `https://api.tvmaze.com/search/people?q="akon"`;
  }

  useEffect(() => {
    if (val === "actor") {
      axios.get(data).then((res) => {
        axios
          .get(
            `https://api.tvmaze.com/people/${res.data[0].person.id}/castcredits?embed=show`
          )
          .then((value) => setSearchActor(value.data));
      });
      // }
    } else {
      setSearchActor([]);
    }
  }, [search, val]);

  return (
    <Grid>
      {searchActor && searchActor.length === 0 ? (
        <Typography
        gutterBottom
        variant="h5"
        component="h2"
        sx={{ color: "#fff"}}
      >Not Found</Typography>
      ) : (
        <Grid container justify="center" spacing="10">
          {searchActor.map((s, id) => (
            <Grid item key={id}>
              <Card sx={{ padding: "0.5rem" }}>
                <CardMedia
                  component="img"
                  alt="Akon Actor"
                  image={
                    s &&
                    s._embedded &&
                    s._embedded.show &&
                    s._embedded.show.image &&
                    s._embedded.show.image.medium
                      ? s._embedded.show.image.medium
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
                    {s &&
                      s._embedded &&
                      s._embedded.show &&
                      s._embedded.show.name}
                  </Typography>
                  <ReadMore
                    details={
                      s &&
                      s._embedded &&
                      s._embedded.show &&
                      s._embedded.show.summary
                    }
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default DisplayActor;
