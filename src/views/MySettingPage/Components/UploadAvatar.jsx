import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {'& > *': {margin: theme.spacing(1),},},
  input: {display: 'none',},
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    margin: '5px auto 15px auto',
  },
  downBtn: {
    marginBottom: '25px'
  }
}));

export default function UploadAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.large} alt="File name" />
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple={false}
        type="file"
      />
      <label htmlFor="contained-button-file" >
        <Button variant="outlined" color="inherit" component="span" className={classes.downBtn}>Upload Avatar </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
    </div>
  );
}