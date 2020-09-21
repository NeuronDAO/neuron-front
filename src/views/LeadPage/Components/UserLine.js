import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';



import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
/**
 * Выводим информмацию о лидере (По сути просто размноживаем список )
 */

const useStyles = makeStyles((theme) => ({
    link: {        
        fontSize: theme.typography.pxToRem(11),
        color: theme.palette.text.secondary,  
    },
    item: {
        margin: '10px 0',
        backgroundColor: '#fff',
    }
}));

export default function UserInfo(props) {
    const classes = useStyles();
      // 
    function controlLink (str) {
        if(str.length === 0) {return('');}
        else if(str.length >= 40) {
            return(
                <Link to={str} className={classes.link}>
                    {str.substr(0,10) + '...' + str.substr(str.length - 10, 10)}
                </Link> 
            )
        }
        else {
            return(<Link to={str} className={classes.link} >{str}</Link> )
        }
    }
    // Делаем из обычного числа человекочистемое число
    function humanNumber (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
          
                <ListItem className={classes.item}>
                  <ListItemAvatar>
                    <Avatar>
                        {props.id}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={props.name + ' ' + props.surName}
                    secondary={controlLink(props.cashEth)}
                  />
                  <ListItemSecondaryAction>
                   <Typography variant="subtitle2">{humanNumber(props.money)} USD</Typography>
                  </ListItemSecondaryAction>
                </ListItem>

    );
  }