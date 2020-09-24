import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

/**
 * Выводим информацию о создателе объявления
 */

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "20px 0",
  },
  meMini: {
    maxWidth: "420px",
    width: "100%",
    margin: "20px auto",
    textAlign: "center",
    flexFlow: "wrap row",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "10px auto",
  },
}));

export default function UserInfo() {
  const classes = useStyles();

  return (
    <div className={classes.meMini}>
      <Avatar alt="Sergey Dolmatov" src="/" className={classes.large} />
      <Typography variant="h6">Sergey Dolmatov</Typography>
      <Typography variant="subtitle2">
        Сюда выводится текст описания, из графы &quot;об омне&quot;. Раз уж мы её сделали,
        то должны вывести. Да и к тому же посмотрим, как вытягивается пространство
      </Typography>
    </div>
  );
}
