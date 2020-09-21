import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';

import UploadForm from './UploadAvatar';


/**
 * Сюда тянем аватарку пользователя
 */
export default function ControlledAccordions() {
  const classes = useStyles();

  return (    
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="edit-photo"
        >
          <Typography className={classes.heading}>Edit Avatar</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.centerItem}>
          <UploadForm />
        </AccordionDetails>
      </Accordion>
  );
}

// Loc Css
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },

  centerItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }
  
}));