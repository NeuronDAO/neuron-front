import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

/**
 * [Обрабатываем заголовок карточки со страницы ExpolrerPage]
 *
 * @param {Array}  props [Массив данных полученный из компонента Card]
 * @param {String} props.title [Название карточки]
 * @returns {React Components} [Возвращаем полностью обработанный заголовок карты ExplorerPage]
 */
export default function CardHeader(props) {
  // USE CSS
  const classes = useStyles();

  var title = props.title;

  // Если получили пустую строку
  if (title.length < 1) {
    title = "Автори не придумал название";
  }
  // Если строка слишком длинная, то обрезаем
  else if (title.length > 120) {
    title = title.substr(0, 115) + "...";
  }

  return (
    <Typography variant="body1" gutterBottom className={classes.title}>
      {title}
    </Typography>
  );
}
//  LOCAL CSS
const useStyles = makeStyles(() => ({title: {fontWeight: 700}}));
