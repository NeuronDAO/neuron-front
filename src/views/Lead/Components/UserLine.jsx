import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";

const UserInfo = ({id, userInfo, money, cashEth}) => {
  const classes = useStyles();

  function controlLink(str) {
    if (str.length === 0) {
      return "";
    } else if (str.length >= 40) {
      return (
        <Link to={str} className={classes.link}>
          {str.substr(0, 10) + "..." + str.substr(str.length - 10, 10)}
        </Link>
      );
    } else {
      return (
        <Link to={str} className={classes.link}>
          {str}
        </Link>
      );
    }
  }

  function humanNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <ListItem className={classes.item}>
      <ListItemAvatar>
        <Avatar>{id}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={userInfo.name} secondary={controlLink(cashEth)} />
      <ListItemSecondaryAction>
        <Typography variant="subtitle2">{humanNumber(money)} USD</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const useStyles = makeStyles((theme) => ({
  link: {
    fontSize: theme.typography.pxToRem(11),
    color: theme.palette.text.secondary,
  },
  item: {
    margin: "10px 0",
    backgroundColor: "#fff",
  },
}));

UserInfo.propTypes = {
  id: PropTypes.string,
  userInfo: PropTypes.string,
  money: PropTypes.string,
  cashEth: PropTypes.string,
};
UserInfo.defaultProps = {
  id: "id",
  userInfo: {
    name: "Kotik",
  },
  money: "123",
  cashEth: "234",
};

export default UserInfo;
