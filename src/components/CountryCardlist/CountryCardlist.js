import React from 'react';
import CountryCard from './CountryCard/CountryCard';
import { Grid,makeStyles,createStyles } from '@material-ui/core';

const CountryCardlist = ()=> {
    const classes = useStyles();
    return (
        <Grid className={classes.root} item md={12}>
            <Grid container>
                <Grid item md={3}> 
                    <CountryCard/>                   
                </Grid>
                <Grid item md={3}>
                    <CountryCard/>
                </Grid>
                <Grid item md={3}>
                    <CountryCard/>
                </Grid>
                <Grid item md={3}>
                    <CountryCard/>
                </Grid>
            </Grid>
        </Grid>
    )
}
const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            paddingTop: "1%",
            paddingLeft: "2%",
            paddingRight: "2%"
        }
    }))

export default CountryCardlist;