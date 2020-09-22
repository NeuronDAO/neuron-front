import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Driver from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: "#fff",
  },
}));

export default function UserInfo(props) {
  const classes = useStyles();
  const userName = props.name + " " + props.surName;
  return (
    <ListItem className={classes.listItem}>
      <ListItemAvatar>
        <Avatar alt={userName} src={props.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={userName}
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
}
