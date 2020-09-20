import React, { useContext, useEffect} from 'react';
import CountryCard from './CountryCard/CountryCard';
import { Grid,makeStyles,createStyles } from '@material-ui/core';
import CountryData from '../../ContextAPI/CountryContextAPI/CountryContextAPI';

const CountryCardlist = ()=> {
    const classes = useStyles();
    const { data  } = useContext(CountryData);

    useEffect(()=> {    
        console.log("country",data);
    },[data])

    return (
        <Grid className={classes.root} item md={12}>
            <Grid container spacing={5}>
                {
                    data.map((item,index) => (
                        <Grid key={index} item md={3}> 
                        <CountryCard
                            country={item.name}
                            population={item.population}
                            Region={item.region}
                            Capital={item.capital}
                            img={item.flag}
                        />                   
                    </Grid>
                    ))
                }
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