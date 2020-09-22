import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

/**
 * [Выводим состояние ссылки пользвоателя в зависимости от полученных данных
 * Ссылка по умолчанию - не активна и не куда не переходит. ]
 *
 * @param {Array} props [Список ссылок в массиве]
 *
 * Тепрь мы получаем список данных из сторибук, так что
 * сюда я не вижу необходимости дотошно их дублировать
 *
 * */
export default function MiddleDividers(props) {
  const classes = useStyles();

  // Если мы не получили ссылку то выводим заглушку на блок
  if (props.link.length === 0) {
    return (
      <Chip
        variant="outlined"
        disabled={true}
        size="small"
        label={props.label}
        icon={props.icon}
        className={classes.chip}
      />
    );
  } else {
    return (
      <Chip
        component="a"
        size="small"
        variant="outlined"
        label={props.label}
        icon={props.icon}
        href={props.link}
        className={classes.chip}
      />
    );
  }
}

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(1, 0.5),
    color: theme.palette.secondary,
  },
}));
