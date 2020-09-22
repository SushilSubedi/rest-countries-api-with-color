import React, { useContext, useEffect, useState} from 'react';
import CountryCard from './CountryCard/CountryCard';
import { Grid,makeStyles,createStyles } from '@material-ui/core';
import CountryData from '../../ContextAPI/CountryContextAPI/CountryContextAPI';
import SearchContextAPI from '../../ContextAPI/SearchContextAPI/SearchContextAPI';
import FilterContextAPI from '../../ContextAPI/FilterContextAPI/FilterContextAPI';

const CountryCardlist = ()=> {
    const classes = useStyles();

    const { keyword } = useContext(SearchContextAPI);
    const { data  } = useContext(CountryData);
    const { region  } = useContext(FilterContextAPI);

    const [cardData,setCardData] = useState([]);

    useEffect(() => {
        if(data.length){
            setCardData(data);
        }
    },[cardData,data])

    useEffect(() => {
        if(region !== undefined){
            if(region?.value !== null || region?.value !== undefined){
                const filterData = data.filter(item => item.region === region.value);
                setCardData(filterData);
            }   
        }else {
            setCardData(data)
        }
    },[region])

    return (
        <Grid className={classes.root} item md={12}>
            <Grid container spacing={5}>
                {
                    cardData.map((item,index) => {
                        const i = cardData.findIndex(items => items.name === item.name );
                        if(cardData[i].name.includes(keyword)){
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
                        }
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