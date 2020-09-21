import React,{ useContext, useEffect } from 'react';
import { makeStyles, createStyles,InputBase,fade,Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import CountryContextAPI from '../../ContextAPI/CountryContextAPI/CountryContextAPI';
import SearchContextAPI from '../../ContextAPI/SearchContextAPI/SearchContextAPI';

//filter
const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
  });

const SearchFilter = (props) => {

    const classes = useStyles();

    const { data } = useContext(CountryContextAPI);
    const { keyword,setKeyword } = useContext(SearchContextAPI);

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
        getUnique(listCountry)
      }

    },[data,listCountry])


    function getUnique(array) {
      const uniqueArray = [];
      for(let i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
            region.push({title:array[i], value:array[i]})
        }
    }
    // return uniqueArray;
    }

    function handleSearch(e) {
      const i = "ops"
      setKeyword(e.target.value);
    }

    useEffect(() => {
      console.log(keyword,"(0")
    },[keyword])

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
                filterOptions={filterOptions}
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
            paddingTop:'2%',
            paddingBottom:'2%',
            paddingLeft:'3%',
            paddingRight:'8%'
        },
        search: {
            position: 'relative',
            borderRadius: '4px',
            backgroundColor: fade(theme.palette.common.white, 0.45),
            '&:hover': {
              backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              marginLeft: theme.spacing(1),
              width: 'auto',
            },
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
            fontSize:'16px'
          },
          inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            fontFamily:'inherit',
            fontSize:'16px',
            [theme.breakpoints.up('sm')]: {
              width: '12ch',
              '&:focus': {
                width: '26ch',
              },
            },
          },
          
}))
export default SearchFilter;