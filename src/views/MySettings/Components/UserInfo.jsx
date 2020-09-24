import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Driver from "@material-ui/core/Divider";

const UserInfo = ({userInfo}) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem}>
      <ListItemAvatar>
        <Avatar alt={userInfo.name} src={userInfo.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={userInfo.name}
        secondary={
          <React.Fragment>
            <Typography component={Link} variant="subtitle2" to="https://google.com">
              0xb30361cbb...ee83ee0f2ddb4ea
            </Typography>
          </React.Fragment>
        }
      />
      <Driver />
    </ListItem>
  );
};

const useStyles = makeStyles(() => ({
  listItem: {
    backgroundColor: "#fff",
  },
}));

UserInfo.propTypes = {
  userInfo: PropTypes.object,
};
UserInfo.defaultProps = {
  userInfo: {
    name: "Kotik",
    avatar: "https://klike.net/uploads/posts/2019-07/1564314090_3.jpg",
  },
};
export default UserInfo;
