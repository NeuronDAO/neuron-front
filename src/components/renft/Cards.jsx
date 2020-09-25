import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

import CardHeader from "./CardHeader";
import CardSlider from "./CardSlider";

/**
 * [Создаём универсальную область в которую загружаем контент страниц
 * Для этого настраиваем одинкаовые отступы (margin, padding) и единый стиль области]
 *
 * @param {Array} props [Масив данных принимаемый от родителей]
 * @param {*} props.title [Название карточки]
 * @param {*} props.cont [Контент загружаемый в карточку товара]
 * @param {*} props.slider [Управлем статусом слайдера карты (показать / скрыть)]
 *
 */
export default function SimpleCards(props) {
  const classes = useStyles();

  // Вернуть слайдер в карту, если получен true
  function checkSlicer(value) {
    if (value === true) {
      return <CardSlider />;
    }
  }

  return (
    <Container size="lg">
      <Paper elevation={3} className={classes.card}>
        {/*  ENTER HEADER CARDS */}
        <CardHeader title={props.title} />
        {props.cont}
      </Paper>

      {checkSlicer(props.slider)}
    </Container>
  );
}

//  USE CSS AND MIN STYLE
const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: "220px",
    margin: theme.spacing(0),
    padding: theme.spacing(0), // Обнуляем внутренние отступы
  },
}));
