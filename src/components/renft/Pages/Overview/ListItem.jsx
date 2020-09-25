import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

/**
 * [Генерируем простенький список, который будем использовать
 * на странице OverViews]
 *
 * @param {Arrat} props [Массив данных от родителей]
 * @param {String} props.title [Название списка]
 * @param {String} props.text [Текст описания списка]
 */
export default function DescList(props) {
  const classes = useStyles();

  return (
    <ListItem noWrap alignItems="flex-start">
      <ListItemText
        // Header  text
        primary={
          <React.Fragment>
            <Typography className={classes.title} variant="body1" color={props.color}>
              {props.title}
            </Typography>
          </React.Fragment>
        }
        // Description text
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.desc}
              color="textPrimary"
            >
              {props.text}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    fontWeight: 700,
  },
  desc: {
    display: "inline",
  },
}));
