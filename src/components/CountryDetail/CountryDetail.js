import React from 'react';
import { makeStyles,createStyles } from '@material-ui/core';
// import ThemeContext from '../../ContextAPI/ThemeContextAPI/ThemeContext'

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