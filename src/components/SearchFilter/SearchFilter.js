import React,{ useContext, useEffect } from 'react';
import { makeStyles, createStyles,InputBase,fade,Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import CountryContextAPI from '../../ContextAPI/CountryContextAPI/CountryContextAPI';
import SearchContextAPI from '../../ContextAPI/SearchContextAPI/SearchContextAPI';
import FilterContextAPI from '../../ContextAPI/FilterContextAPI/FilterContextAPI';

//filter
const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,

  });

const SearchFilter = () => {

    const classes = useStyles();
    const { data } = useContext(CountryContextAPI);
    const { setKeyword } = useContext(SearchContextAPI);
    const { setRegion } = useContext(FilterContextAPI);

    const listCountry = [];
    const region = [];

    useEffect(() => {
      if(data.length){
        data.forEach(country =>{
          let value = `${country.region}`.charAt(0).toUpperCase() + `${country.region}`.slice(1) ;
          if(!listCountry[value]){
            if(value !== ''){
              listCountry.push(value)
            }
          }
        }) 
        function getUnique(array) {
          const uniqueArray = [];
          for(let i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
                region.push({title:array[i], value:array[i]})
            }
          }
        }
        getUnique(listCountry)
      }

    },[data,listCountry,region])



    function handleSearch(e) {
      setKeyword(e.target.value);
    }

    function selectRegionHandler (e,value) {
      if(value !== null){
        setRegion(value.title);
      }else {
        setRegion('');
      }
    } 


    return(
        <Box className={classes.root}>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                  onChange={handleSearch}
                placeholder="Search for a country..."
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
          </div>
          <div className={classes.filter}>
            <Autocomplete
                color="textPrimary"
                id="filter-demo"
                options={region}
                getOptionLabel={(option) => option.title}
                className={classes.Autocomplete}
                filterOptions={filterOptions}
                onChange={selectRegionHandler}
                style={{ width: 200 }}
                renderInput={(params) => <TextField {...params} label="Filter By Region" variant="outlined" />}
            />
          </div>
        </Box>
    )
}

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            display:'flex',
            justifyContent:'space-between',
            padding: '2% 6% 2% 5%',
            [theme.breakpoints.between('xs','sm')]: {
              flexDirection:'column',
                margin:'3% 0'
            }
        },
        Autocomplete: {
          [theme.breakpoints.between('xs','sm')]: {
            fontSize:'14px'
          }
        },
        search: {
            position: 'relative',
            borderRadius: '4px',
            backgroundColor: fade(theme.palette.common.white, 0.45),
            '&:hover': {
              backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '442px',
            [theme.breakpoints.between('xs','sm')]: {
              margin:'inherit',
              width:'336px'
            },
          },
          filter: {
            [theme.breakpoints.between('xs','sm')]: {
              margin:'inherit'
            }
          },
          searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          inputRoot: {
            height:'56px',
            width:'442px',
            fontFamily:'inherit',
            fontSize:'16px',
            [theme.breakpoints.between('xs','sm')]: {
              width:'100%'
            }
          },
          inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            // fontFamily:'inherit',
            fontSize:'16px',
            [theme.breakpoints.between('xs','sm')]: {
              width: '12ch',
              fontSize:'14px',
              '&:focus': {
                width: '26ch',
              },
            },
          },
          
}))
export default SearchFilter;