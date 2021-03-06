import React,{ useState,useContext, useEffect } from 'react';
import { makeStyles,createStyles } from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Brightness2SharpIcon from "@material-ui/icons/Brightness2Sharp";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import ThemeContext from '../../ContextAPI/ThemeContextAPI/ThemeContext';
import CountryData from '../../ContextAPI/CountryContextAPI/CountryContextAPI';
import axios from 'axios';

const NavigationBar = () =>{
    const classes = useStyles();
    const [darkMode, setDarkMode] = useState(false);

    //Context api value for country data and themeContext to reset the data or theme
    const { theme,setTheme } = useContext(ThemeContext);
    const { data,setData } = useContext(CountryData);

    // change the color mode of website
    useEffect(() => {
      if(theme){
        setDarkMode(true);
      }else{
        setDarkMode(false);
      }
    },[theme])

    // change the mode of website
    const handleChangeColor = () => {
      if (!darkMode) {
        setDarkMode(true);
        setTheme(true)
      } else {
        setDarkMode(false);
        setTheme(false);
      }
    };

    //get request api for countries data
    useEffect(() => {
      if(data.length === 0){
        const getData = async() => {
          const response = await axios.get('https://restcountries.eu/rest/v2/all');
          setData(response.data);
        }
        getData();
      }
    },[data,setData])

    return(
        <div className={classes.root}>
            <AppBar position="sticky" className={classes.Appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                  Where in the world?
                </Typography>
                <div>
                <IconButton onClick={handleChangeColor} className={classes.icon}>
                    {
                        !darkMode ? (
                        <Brightness2OutlinedIcon className={classes.SingleIcon} />
                        ) : (
                        <Brightness2SharpIcon className={classes.SingleIcon} />
                        )
                    }
                    <Typography className={classes.typo2}>Dark Mode</Typography>
                </IconButton>
                </div>
            </Toolbar>
            </AppBar>
      </div>  
    )
}
// style for navigation
const useStyles = makeStyles(theme => 
    createStyles({
        Appbar: {
             padding:'4px 4%',
             [theme.breakpoints.between('xs','sm')]: {
               padding:'4px 0'
             }
        },
        toolbar: {
          [theme.breakpoints.between('xs','sm')]: {
            padding:'1% 10px'
          }
        },
        typo2: {
          fontSize:'16px',
          fontWeight:'600',
          marginLeft:'2px',
        },
        SingleIcon: {
          transform: 'rotateZ(140deg)',
          paddingLeft:'3px',
          fontSize:'20px'
        },
        root: {
            flexGrow: 1
          },
          title: {
            flexGrow: 1,
            fontSize:'24px',
            fontWeight:'800',
            [theme.breakpoints.between('xs','sm')]: {
              fontSize:'16px',
              flexGrow: 1,
              fontWeight:'800',
            }
          },
          icon: {
            width: "140px"
          }
    }))


export default NavigationBar;