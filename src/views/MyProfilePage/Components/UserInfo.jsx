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
/**
 * Выводим информацию о создателе объявления
 */

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
}));

export default function UserInfo() {
  const classes = useStyles();

  return (
    <Accordion className={classes.root}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <List className={classes.listAll}>
          <ListItem alignItems="flex-start" className={classes.listAll}>
            <ListItemAvatar>
              <Avatar alt="Sergey Dolmatov" src="/" />
            </ListItemAvatar>
            <ListItemText
              primary="Sergey Dolmatov"
              secondary={
                <React.Fragment>
                  <Typography
                    component={Link}
                    variant="subtitle2"
                    className={classes.hash}
                    to="https://google.com"
                  >
                    0xb30361cbb...ee83ee0f2ddb4ea
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Информацию, которую пользователь указал в разделе "О себе". Я думаю будет
          правильно дать пользователю возможно немного познакомится с создателем проекта
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
