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
import { useContext } from "react";

import { GeneralContext } from "../Context/GeneralContext";

function UserInfo() {
  const { allReviews, getData } = useContext(GeneralContext);

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
        <ArrowBackIos onClick={() => getData()} />
        <ArrowForwardIos onClick={() => getData()} />
        <Divider />

        <Button onClick={() => getData()}>Surprize me</Button>
      </Card>
    </>
  );
}

export default UserInfo;
