import React from 'react';
import Navbar from '../../components/NavBar/Navbar'
import Container from '@material-ui/core/Container';
import {makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import UserInfo from './Components/UserInfo';
import EditAvatar from './Components/EditAvatar';
import EditAbout from './Components/EditAbout'
import EditSocial from './Components/EditSocial';
import { Button } from '@material-ui/core';





export default function LeadPage () {
    const classes = useStyles();

    return (
        <>
            <Navbar isAutch={false} pTitle="My Setting"></Navbar> 
            <Container maxWidth="md" className={classes.root}>
             
            <List>
            {/* BLCK ISER INFO */}
            <UserInfo 
                name="Sergey" 
                surName="Dolmatov" 
                hash="0x9e11119be78779a7ce912d9ceb698fb3ef5a2fb0"
                avatar="/" />

            {/* BLCK EDIT AVATAR */}
            <EditAvatar />

            {/* BLCK EDIT AVATAR */}
            <EditAbout />

            {/* BLCK EDIT SOCIAL LINK */}
            <EditSocial />

            </List>

            <Button variant="outlined" className={classes.out}>
                Sign out
            </Button>

            </Container>
        </>
    );
}

//  LOC CSS
const useStyles = makeStyles((theme) => ({
    root: {flexGrow: 1,margin: '20px auto',},
    out: {
        marginTop: '20px'
}}));

  