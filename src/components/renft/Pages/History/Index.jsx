import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import CardInfoGreen from "./CardInfoGreen";
import CardInfoBlue from "./CardInfoBlue";
import CardGrapic from "./CardGrapic";

import "./HistoryPage.css";
/**
 * Генерируем статичную таблицу, ибо можем себе
 * это позволить. С однй стороны все данные можно отдавать
 * пропсами и разложить Table ROW на компоненты. Но с другой
 * можно добиться такого же результата обычным CSS
 */
const HistoryPage = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={0} className={classes.root}>
        <Grid item className="itemColumn">
          <Typography className={classes.subName} variant="subtitle2">
            Rented NFT&#39;s
          </Typography>
          <Divider />
        </Grid>

        {/* GRID CENTER ITEM */}
        <Grid item className="itemCont" align="center">
          <Typography className={classes.subName} variant="subtitle2">
            OverView
          </Typography>
          <Divider />

          {/* Синяя карточка */}
          <CardInfoBlue
            type="minus"
            name="Current Rented"
            run="34"
            procent="25"
            type="minus"
          />
          {/* Зелёная карточка */}
          <CardInfoGreen
            type="plus"
            name="Current Leased"
            run="7"
            procent="70"
            type="plus"
          />

          <div>
            <CardGrapic
              id="mgraphid"
              name="Total Sales:"
              color="#f54b42"
              start_run="25"
            />

            <CardGrapic
              id="twoGrapich"
              name="Total Interest:"
              color="#42ecf5"
              start_run="1245"
            />
          </div>

          {/* Синяя карточка */}
          <CardInfoBlue
            type="minus"
            name="Current Rented"
            run="34"
            procent="25"
            type="minus"
          />
          {/* Зелёная карточка */}
          <CardInfoGreen
            type="plus"
            name="Current Leased"
            run="7"
            procent="70"
            type="plus"
          />
        </Grid>

        {/* GRID RIGHT ITEM */}
        <Grid item className="itemColumn">
          <Typography className={classes.subName} variant="subtitle2">
            Leased NFT&#39;s
          </Typography>
          <Divider />
        </Grid>
      </Grid>
    </>
  );
};

export default HistoryPage;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
  subName: {
    fontSize: theme.typography.pxToRem(14),
    textAlign: "center",
    padding: theme.spacing(2, 0),
  },
  itemColumn: {
    maxWidth: "140px",
    width: "100%",
  },
}));
