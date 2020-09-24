import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Select from "@material-ui/core/Select";
// import Typography from "@material-ui/core/Typography";

import "sanitize.css";

const PayInputNew = ({rewardAmount, rewardToken, handleChange}) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root} variant="outlined">
        <InputBase
          className={classes.input}
          placeholder="Enter payment"
          value={rewardAmount}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <Select
          className={classes.actionSelect}
          variant="standard"
          native
          value={rewardToken}
          onChange={handleChange}
        >
          <option value="ETH" className={classes.select}>
            ETH
          </option>
          <option value="DAI" className={classes.select}>
            DAI
          </option>
          <option value="OCEAN" className={classes.select}>
            OCEAN
          </option>
        </Select>
      </Paper>
      {/* <Typography variant="caption" display="block" className={classes.help}>
        Доступный баланс:
        <strong className={classes.link} onClick={handleClick}>
          THIS_IS_NUMBER{" "}
        </strong>
        {state.payType}{" "}
      </Typography> */}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "350px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  select: {
    fontSize: theme.typography.pxToRem(13),
  },
  actionSelect: {
    fontSize: theme.typography.pxToRem(14),
  },
  link: {
    color: theme.palette.text.secondary,
    cursor: "pointer",
    fontWeight: "700",
  },

  help: {margin: "7px 2px"},
}));

PayInputNew.propTypes = {
  rewardAmount: PropTypes.number,
  rewardToken: PropTypes.oneOf(["ETH", "DAI", "OCEAN"]),
  handleChange: PropTypes.func,
};
PayInputNew.defaultProps = {
  rewardAmount: 0,
  rewardToken: "OCEAN",
  handleChange: () => {},
};
export default PayInputNew;
