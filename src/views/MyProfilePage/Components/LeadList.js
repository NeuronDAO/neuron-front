import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
        <ListItemText 
            primary={
                <Typography variant="body1" noWrap={true}>{row.title}</Typography>
            } 
            secondary={
                <>
                <Typography variant="body2" noWrap={true} component={Link} to='/userHash'>{row.url}</Typography>
                <Typography className={classes.sale}>{row.sale} $</Typography>
                </>
            } />            
      </ListItem>
      ))}

    </List>
  );
}

// CReate Date
function createData(id, title, url, sale) {
    return { id, title, url, sale };
}
  
const rows = [
    createData(1,'KICK Token Exchange - 50,000 KICK + BONUS', 'Link_to_project', 159 ),
    createData(2,'Test bounty for Fantastic12 squad', 'Link_to_project', 237,),
    createData(3,'The Movement DAO - Social Change Engine - Adopt A Highway', 'Link_to_project', 262,),
    createData(4,'Resurrection Crypto Prize', 'Link_to_project', 305,),
    createData(5,'U look', 'Link_to_project', 356,)
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
