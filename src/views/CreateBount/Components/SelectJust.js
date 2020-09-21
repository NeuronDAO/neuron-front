import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    width: 'calc(100% - 60px)',
  },
  label: {
    display: 'flex',        
    alignItems: 'baseline',
    width: '100%',
    maxWidth: '100%',
    margin: '10px 0',
    color: theme.palette.text.secondary,  
}

}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
      <FormControl variant="outlined" size="small" fullWidth color="primary" className={classes.formControl}>

        <FormLabel className={classes.label}>Select Difficulty</FormLabel>        
        <Select 
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          
        >
          <MenuItem value={1}>Beginner</MenuItem>
          <MenuItem value={2}>Intermediate</MenuItem>
          <MenuItem value={3}>Expert</MenuItem>
        </Select>
      </FormControl>
     
  );
}