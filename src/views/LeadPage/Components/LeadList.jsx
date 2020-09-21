import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';


/**
 * [Формируем список лидеров. Просто передаём в функцию массив 
 * с данными (Имя, аватар, кошелёк, ценаю). И всё, будет нам счатье]
 */
export default function FolderList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {rows.map((row) => (
        <ListItem key={row.id}>
        <ListItemAvatar>
            <Avatar alt={row.name} src="/" />
        </ListItemAvatar>
        <ListItemText 
            primary={
                <Typography noWrap={true}>{row.name}</Typography>
            } 
            secondary={
                <>
                <Typography noWrap={true} component={Link} to='/userHash'>{row.hash}</Typography>
                <Typography className={classes.sale}>{row.sale} $</Typography>
                </>
            } />            
      </ListItem>
      ))}

    </List>
  );
}

// CReate Date
function createData(id, name, hash, sale) {
    return { id, name, hash, sale };
}
  
const rows = [
    createData(1,'Sergey Dolmatov', 'RandomHashEth', 159 ),
    createData(2,'Alex Duma', 'RandomHashEth', 237,),
    createData(3,'Dostoevskiy', 'RandomHashEth', 262,),
    createData(4,'Mishail Bulgakov', 'RandomHashEth', 305,),
    createData(5,'U look', 'RandomHashEth', 356,)
];

// LOC CSS
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    sale: {
        position: 'absolute',
        right: 15,
        top: 15,
        textAlign: 'right',
        fontSize: theme.typography.pxToRem(19),
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper
    }
  
}));
