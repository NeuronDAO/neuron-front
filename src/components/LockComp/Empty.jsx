import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconEmpty from "@material-ui/icons/Fullscreen";

import "sanitize.css";

/**
 * [Если по каким то причинам у нас в блоке нет данных, то передаёт этот
 * блок как заглушку. Здесь выводится заголовок и комментарий к блоку ]
 *
 * @param {Array} props [Массив данных полеченнный от родителей]
 * @param {String} props.header [Загаловок пустого блока]
 * @param {String} props.text [Текст пустого блока]
 */
export default ({header, text}) => {
  // USE CSS
  const classes = useStyles();
  //  Обрабатываем пустые значения

  return (
    <div className={classes.root}>
      <IconEmpty className={classes.icon} />
      <Typography align="center" variant="subtitle1" color="textPrimary">
        {header}
      </Typography>
      <Typography align="center" variant="subtitle2" color="textSecondary">
        {text}
      </Typography>
    </div>
  );
};

//  LOC CSS
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "40px 0",
    textAlign: "center",
  },
  icon: {
    width: "45px",
    height: "45px",
    fill: "#d2d2d2",
  },
}));
