import React,{ useState } from 'react';
import { makeStyles,createStyles } from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Brightness2SharpIcon from "@material-ui/icons/Brightness2Sharp";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";

const NavigationBar = () =>{
    const classes = useStyles();
    const [darkMode, setDarkMode] = useState(false);

    const handleChangeColor = () => {
      if (!darkMode) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    };
    return(
        <div className={classes.root}>
            <AppBar position="static" className={classes.Appbar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                Where in the world?
                </Typography>
                <div>
                <IconButton onClick={handleChangeColor} className={classes.icon}>
                    {
                        !darkMode ? (
                        <Brightness2OutlinedIcon />
                        ) : (
                        <Brightness2SharpIcon />
                        )
                    }
                    <Typography>Dark Mode</Typography>
                </IconButton>
                </div>
            </Toolbar>
            </AppBar>
      </div>  
    )
}

const useStyles = makeStyles(theme => 
    createStyles({
        Appbar: {
            background: "white",
             color: "black",
             padding:'4px 3%'
        },
        root: {
            flexGrow: 1
          },
          title: {
            flexGrow: 1
          },
          icon: {
            width: "140px"
          }
    }))


export default NavigationBar;