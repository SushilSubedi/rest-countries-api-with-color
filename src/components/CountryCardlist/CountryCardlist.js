import React, { useContext, useEffect, useState} from 'react';
import CountryCard from './CountryCard/CountryCard';
import { Grid,makeStyles,createStyles } from '@material-ui/core';
import CountryData from '../../ContextAPI/CountryContextAPI/CountryContextAPI';
import SearchContextAPI from '../../ContextAPI/SearchContextAPI/SearchContextAPI';
import FilterContextAPI from '../../ContextAPI/FilterContextAPI/FilterContextAPI';

const CountryCardlist = ()=> {
    const classes = useStyles();

    // context API for search value to search the country
    const { keyword } = useContext(SearchContextAPI);
    // context API for countries data to pass to different card
    const { data  } = useContext(CountryData);
    // context API for list the region select by user
    const { region  } = useContext(FilterContextAPI);

    // local state to store data so that further changes can be done without effecting the real data
    const [cardData,setCardData] = useState([]);

    // store data in local state
    useEffect(() => {
        if(data.length){
            setCardData(data);
        }
    },[data])

    // after effect to change the region according to user selections
    useEffect(() => {
        if(region !== undefined){
            if(region !== ''){
                // filter the region which is selected by user
                const filterData = data.filter(item => item.region === region);
                // update the local state so that change can be refect back in card
                setCardData(filterData);
            }else if(region === '') {
                // change back to pervious value during the starting point
                setCardData(data);
            }   
        }
    },[region,data])
    

    return (
        <Grid  item md={12} className={classes.root}>
            <Grid className={classes.container} container spacing={9}>
                {
                    cardData.map((item,index) => {
                        // search keyword for which user changes to reflect back in webpages
                        let i = cardData.findIndex(items => items.name === item.name );
                        if(cardData[i].name.includes(keyword)){
                       return(
                        <Grid item md={3} key={index}> 
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
// style of countryCardlist
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