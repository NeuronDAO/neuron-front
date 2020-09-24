import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import List from "@material-ui/core/List";
import ListItem from "./ListItem";
import {Typography} from "@material-ui/core";

import Button from "../../Button";

/**
 * [Так выглядит код страницы OverView. Я писал из расчёта, что
 * страница статичная и в неё просто перетикают данные. По этому,
 * особого разделения на множество компонентов писать не стал.]
 *
 */
export default function Overview() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2} className={classes.root}>
        {/* IMG PAGE  */}
        <Grid item xs={12} md={6} lg={4} sm={6}>
          <div className={classes.paper}>
            <CardMedia
              className={classes.img}
              image="https://image.freepik.com/free-vector/close-up-of-cool-cat_36380-133.jpg"
            />

            <Button label="Rent" variant="contained" />
            <Button label="Return" variant="outlined" />
          </div>
        </Grid>

        {/* LIST DESC PAGE */}
        <Grid item xs={12} md={6} lg={4} sm={6}>
          <List className={classes.paper}>
            <ListItem title="ID" text="1" />
            <ListItem title="NFT NAME" text="Не читаемый текст(" />
            <ListItem title="Price" text="0.001 ETH" />
            <ListItem title="Collaternal" text="0.01ETH" />
            <ListItem
              title="Rental Duration"
              text={
                <>
                  <Typography>Month min</Typography>
                  <Typography>Month min</Typography>
                </>
              }
            />
            <ListItem title="Adress" text="THIS IS ADRESS" />
          </List>
        </Grid>

        <Grid item xs={12} md={12} lg={4} sm={12}>
          <List className={classes.paper}>
            <ListItem
              title="Previus Rentals"
              text={
                <>
                  <Typography
                    display="block"
                    noWrap
                    component="a"
                    href="toLink"
                    color="textSecondary"
                  >
                    THIS_IS_LONG_TEXT_ADDRESS
                  </Typography>
                  <Typography
                    display="block"
                    noWrap
                    component="a"
                    href="toLink"
                    color="textSecondary"
                  >
                    THIS_IS_LONG_TEXT_ADDRESS
                  </Typography>
                  <Typography
                    display="block"
                    noWrap
                    component="a"
                    href="toLink"
                    color="textSecondary"
                  >
                    THIS_IS_LONG_TEXT_ADDRESS
                  </Typography>
                  <Typography
                    display="block"
                    noWrap
                    component="a"
                    href="toLink"
                    color="textSecondary"
                  >
                    THIS_IS_LONG_TEXT_ADDRESS
                  </Typography>
                  <Typography
                    display="block"
                    noWrap
                    component="a"
                    href="toLink"
                    color="textSecondary"
                  >
                    THIS_IS_LONG_TEXT_ADDRESS
                  </Typography>
                  <Typography
                    display="block"
                    noWrap
                    component="a"
                    href="toLink"
                    color="textSecondary"
                  >
                    THIS_IS_LONG_TEXT_ADDRESS
                  </Typography>
                  <Typography
                    display="block"
                    noWrap
                    component="a"
                    href="toLink"
                    color="textSecondary"
                  >
                    THIS_IS_LONG_TEXT_ADDRESS
                  </Typography>
                  <Typography
                    display="block"
                    noWrap
                    component="a"
                    href="toLink"
                    color="textSecondary"
                  >
                    THIS_IS_LONG_TEXT_ADDRESS
                  </Typography>
                </>
              }
            />
          </List>
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2, 1.5),
  },
  paper: {
    padding: theme.spacing(1, 0),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  img: {
    minHeight: "250px",
    borderRadius: "5px",
    margin: theme.spacing(0, 0, 2, 0),
  },
}));
