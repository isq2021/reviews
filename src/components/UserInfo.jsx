import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import { useContext, useReducer } from "react";
import { Reducer } from "../Helper/Reducer";

import { GeneralContext } from "../Context/GeneralContext";
const initialState = [];

function UserInfo() {
  const { allReviews } = useContext(GeneralContext);
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <>
      <Card
        sx={{ maxWidth: 445 }}
        style={{ margin: "auto", marginTop: "50px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            alt="green iguana"
            image={allReviews[0]?.picture.medium}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${allReviews[0]?.name.title}   ${allReviews[0]?.name.first}  ${allReviews[0]?.name.last}`}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              email : {allReviews[0]?.email}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              country :{allReviews[0]?.location.country}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              street :{allReviews[0]?.location.street.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <ArrowBackIos />
        <ArrowForwardIos />
        <Divider />

        <Button onClick={() => dispatch("randomizeUser")}>Surprize me</Button>
      </Card>
    </>
  );
}

export default UserInfo;
