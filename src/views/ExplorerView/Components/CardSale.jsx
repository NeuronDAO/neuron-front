import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import "sanitize.css";

/**
 * [Здесь мы обрезаем стоимость. Цена отлчается о цены со странице Explorer
 * тем что она прибита к левому блоку (кнопке) и занимает всё остальное простарнства]
 * @param {Array} props  [Массив данных принимаемый от родителя]
 * @param {String, Number, Float} props.usd [Цена, уазанная в доллараз ]
 * @param {String, Number, Float} props.eth [Цена, уазанная в Ефириумах ]
 */
export default function CardSale(props) {
  // USE CSS
  const classes = useStyles();

  // Делаем из обычного числа человекочистемое число
  function humanNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <div className={classes.Area}>
      <div>
        <Typography className={classes.Usd} noWrap>
          USD: {humanNumber(props.usd)}
        </Typography>
        <Typography className={classes.Eth} noWrap>
          ETH: {props.eth}{" "}
        </Typography>
      </div>
    </div>
  );
}

// LOC CSS
const useStyles = makeStyles((theme) => ({
  Area: {
    color: theme.palette.text.primary,
    position: "relative",
    left: "15px",
    flexBasis: "45px",
    flexShrink: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexFlow: "wrap",
    textAlign: "left",
    maxWidth: "calc(100% - 150px)",
  },
  Usd: {
    fontSize: theme.typography.pxToRem(17),
    color: theme.palette.text.primary,
    width: "100%",
  },
  Eth: {
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.text.primary,
    width: "100%",
  },
}));
