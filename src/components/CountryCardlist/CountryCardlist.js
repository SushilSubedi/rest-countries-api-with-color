import React, { useContext, useEffect, useState} from 'react';
import CountryCard from './CountryCard/CountryCard';
import { Grid,makeStyles,createStyles } from '@material-ui/core';
import CountryData from '../../ContextAPI/CountryContextAPI/CountryContextAPI';
import SearchContextAPI from '../../ContextAPI/SearchContextAPI/SearchContextAPI';

const CountryCardlist = ()=> {
    const classes = useStyles();

    const { keyword } = useContext(SearchContextAPI);
    const { data  } = useContext(CountryData);

    const [cardData,setCardData] = useState([]);

    useEffect(() => {
        if(data.length){
            setCardData(data);
        }
    },[data])

    useEffect(() => {
        console.log("keyword",keyword);
    },[keyword])

    return (
        <Grid className={classes.root} item md={12}>
            <Grid container spacing={5}>
                {
                    cardData.map((item,index) => {
                       return(
                        <Grid key={index} item md={3}> 
                            <CountryCard
                                country={item.name}
                                population={item.population}
                                Region={item.region}
                                Capital={item.capital}
                                img={item.flag}
                            />                   
                        </Grid>
                       )
                    })
                    
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