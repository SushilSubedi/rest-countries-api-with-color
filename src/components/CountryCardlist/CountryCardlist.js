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
    },[region,data])
    

    return (
        <Grid  item md={12} className={classes.root}>
            <Grid className={classes.container} container spacing={9}>
                {
                    cardData.map((item,index) => {
                        let i = cardData.findIndex(items => items.name === item.name );
                        if(cardData[i].name.includes(keyword)){
                       return(
                        <Grid item md={4} key={index}> 
                            <CountryCard
                                country={item.name}
                                population={item.population}
                                Region={item.region}
                                Capital={item.capital}
                                img={item.flag}
                            />                   
                        </Grid>
                       )
                        }else return null;
                    })
                    
                }
            </Grid>
        </Grid>
    )
}
const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            padding:'1% 5% 0 4%',
            [theme.breakpoints.between('xs','sm')]: {
                padding:'1% 2% 0 0%',
            }
        },
        container: {
            display:'flex',
            justifyContent:'space-around'
        }
    }))

export default CountryCardlist;