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
        <Grid className={classes.root} item md={12}>
            <Grid container spacing={4}>
                {
                    cardData.map((item,index) => {
                        let i = cardData.findIndex(items => items.name === item.name );
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
            padding:'1% 2% 0 2%',
            [theme.breakpoints.down('sm')]: {
                padding:'1% 2% 0 8%',
            }
        }
    }))

export default CountryCardlist;