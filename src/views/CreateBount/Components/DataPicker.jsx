import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  label: {
    display: "flex",
    alignItems: "baseline",
    margin: "10px 0",
    width: "100%",
    maxWidth: "calc(100% - 70px)",
    fontSize: "9px",
    color: theme.palette.text.secondary,
  },
}));

export default function DatePickers() {
  const classes = useStyles();

  return (
    <FormControlLabel
      control={
        <TextField
          fullWidth
          id="date"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          type="date"
          defaultValue="2020-09-14"
          variant="outlined"
        />
      }
      label="Deadline"
      labelPlacement="top"
      className={classes.label}
    />
  );
}
