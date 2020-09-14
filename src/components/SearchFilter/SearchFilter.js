import React from 'react';
import { makeStyles, createStyles,InputBase,fade } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

//filter
const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
  });

const SearchFilter = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
          </div>
          <div className={classes.filter}>
            <Autocomplete
                id="filter-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                filterOptions={filterOptions}
                style={{ width: 200 }}
                renderInput={(params) => <TextField {...params} label="Filter By Region" variant="outlined" />}
            />
          </div>
        </div>
    )
}
const top100Films = [
    { title: 'Africa', value:'Africa' },
    { title: 'Asia', value:'Asia' },
    { title: 'Australia', value:'Australia' },
    { title: 'Europe', value:'Europe' },
  
  ];

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
            color: 'inherit',
            height:'48px',
            width:'442px'
          },
          inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              width: '12ch',
              '&:focus': {
                width: '26ch',
              },
            },
          },
          
}))
export default SearchFilter;