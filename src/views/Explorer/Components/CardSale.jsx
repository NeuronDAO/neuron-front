import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import "sanitize.css";

/**
 * [Здесь мы обрезаем длинные значения цены и "ПРИБИВВЕМ" цену к правому
 * верхнему блоку компонента Card. ]
 *
 * @param {Array} props [Массив данных полученный из компонента Card]
 * @param {Num | String} props.usd [Сумма в USD которую заплатит пользователь]
 * @param {Num | String} props.eth [Сумма в ETH которую заплатит пользователь]
 * @returns {React Components} [Как итог возвращается цельный блок готовый к размещению в Карте]
 */

const CardSale = ({usd, eth}) => {
  // USE CSS
  const classes = useStyles();

  // Делаем из обычного числа человекочистемое число
  function humanNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  // Контролируем введенную сумму
  function controlLenght(x) {
    x = x.length > 10 ? x.substr(0, 5) + "..." + x.substr(x.length - 5, 5) : x;
    return x;
  }

  return (
    <div className={classes.Area}>
      <div>
        <Typography className={classes.Usd} noWrap>
          {humanNumber(usd)}{" "}
        </Typography>
        <Typography className={classes.Eth} noWrap>
          {controlLenght(eth)} ETH
        </Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  // FIXED AREA
  Area: {
    color: theme.palette.text.primary,
    position: "relative",
    right: "0",
    flexBasis: "45px",
    flexShrink: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexFlow: "wrap",
    textAlign: "right",
  },
  //
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

CardSale.defaultProps = {
  usd: PropTypes.number,
  eth: PropTypes.number,
};
CardSale.propTypes = {
  usd: 0,
  eth: 0,
};
export default CardSale;
