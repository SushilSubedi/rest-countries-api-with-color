import React,{ useContext } from 'react';
import { makeStyles,createStyles } from '@material-ui/core';
import ThemeContext from '../../ContextAPI/ThemeContextAPI/ThemeContext'

const CountryDetail = () => {
    const classes = useStyles();
    const { theme } = useContext(ThemeContext);
    console.log(theme)

    return(
        <div className={classes.root}>
            
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