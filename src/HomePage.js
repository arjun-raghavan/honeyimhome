/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CursiveHeading, ImageWithInfo, MediaCard, MediaCardList } from './common';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function HomePage() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" >
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Create React App
                </Typography>

            </Box>
            <Grid container spacing={5}>
                <Grid container item spacing={1}>
                    <Grid item lg={3} zeroMinWidth>
                        <ImageWithInfo />
                    </Grid>
                    <Grid item lg={6}>
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item lg={3}>
                        <MediaCardList />
                    </Grid>
                </Grid>
                <Grid container item spacing={5}>
                    <Grid item xs={12}>
                        <MediaCard className={classes.paper}>xs=12</MediaCard>
                    </Grid>
                </Grid>
            </Grid>


        </Container>
    );
}