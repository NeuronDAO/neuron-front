import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import UserLinks from "./UserLinks";

const controlLength = (x) => {
  if (x == null) {
    return x;
  }
  return x.length > 10 ? x.substr(0, 5) + "..." + x.substr(x.length - 5, 5) : x;
};

/**
 * [Формируем раскрывающийся блок информации о пользователи.
 * Внимание, все данные, кроме Avatar - объязательны]
 *
 * @param {Array} props [Массив данных полученый от родителя]
 * @param {String} props.name [Имя пользователя] *
 * @param {String} props.avatar [Аватарка пользователя] *
 * @param {String} props.cash [ETH кошелёк пользователя] *
 * @param {String} props.about [Информация об о мне]
 *
 * @return {React Components} [Возвращает цельный компонент (Аккаурдеон) с минимальным набором информации о пользователе]
 */
const UserInfo = ({name, avatar, cash, about}) => {
  const classes = useStyles();

  return (
    <Accordion className={classes.root}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <List className={classes.listAll}>
          <ListItem alignItems="flex-start" className={classes.listAll}>
            <ListItemAvatar>
              <Avatar alt={name} src={avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={name}
              secondary={
                <React.Fragment>
                  <Typography
                    component={Link}
                    variant="subtitle2"
                    className={classes.hash}
                    to="https://google.com" // UNCOMMENT CREATE LINK
                  >
                    {controlLength(cash)}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </AccordionSummary>
      <AccordionDetails className={classes.accDop}>
        <Typography gutterBottom>{about}</Typography>

        <UserLinks
          site="https://dolmatov.me/"
          twitter={false}
          github={false}
          linkedIn={false}
          telegram="dolmatov_s"
        />
      </AccordionDetails>
    </Accordion>
  );
};

// LOC CSS
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "20px 0",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  listAll: {
    margin: 0,
    padding: 0,
  },
  hash: {
    fontSize: theme.typography.pxToRem(11),
    color: theme.palette.text.secondary,
  },
  accDop: {
    display: "Block",
    width: "100%",
  },
}));

UserInfo.defaultProps = {};
export default UserInfo;
