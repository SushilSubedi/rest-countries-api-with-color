import React from 'react';
import { makeStyles,createStyles } from '@material-ui/core';

const CountryDetail = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
                Country Details
        </div>
    )
}
const useStyles = makeStyles(theme => 
    createStyles({
        root: {
             padding:'2% 4%'
        },
    }))


export default CountryDetail;