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

const NavigationBar = (props) =>{
    const classes = useStyles();
    const [darkMode, setDarkMode] = useState(false);
    // const [store,setStore] = useState([]);

    const { theme,setTheme } = useContext(ThemeContext);
    const { data,setData } = useContext(CountryData);

    useEffect(() => {
      if(theme){
        setDarkMode(true);
      }else{
        setDarkMode(false);
      }
    },[theme])

    const handleChangeColor = () => {
      if (!darkMode) {
        setDarkMode(true);
        setTheme(true)
      } else {
        setDarkMode(false);
        setTheme(false);
      }
    };

    const getData = async() => {
      const response = await axios.get('https://restcountries.eu/rest/v2/all');
      setData(response.data);
    }

    useEffect(() => {
      if(data.length === 0){
        getData();
      }
    },[])

    return(
        <div className={classes.root}>
            <AppBar position="static" className={classes.Appbar}>
            <Toolbar>
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
            {props.children}
      </div>  
    )
}

const useStyles = makeStyles(theme => 
    createStyles({
        Appbar: {
             padding:'4px 4%'
        },
        typo2: {
          fontSize:'14px',
          fontWeight:'600',
          marginLeft:'2px'
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
            fontSize:'18px',
            fontWeight:'800'
          },
          icon: {
            width: "140px"
          }
    }))


export default NavigationBar;