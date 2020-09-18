import React,{ useState } from 'react';
import { Box,CssBaseline } from '@material-ui/core';
import Routers from './Router/Router';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import ThemeContext from './ContextAPI/ThemeContextAPI/ThemeContext';

const App = () => {
  const [theme,setTheme] = useState(false);
  const value = {theme, setTheme}

  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      background: {
        default:'hsl(0, 0%, 98%)',
        paper:'hsl(0, 0%, 100%)'
      },
      text: {
        primary:' hsl(200, 15%, 8%)',
        secondary:'hsl(0, 0%, 52%)'
      },
      primary: {
        main:'hsl(0, 0%, 98%)'
      }
    },
    typography: {
      fontFamily:'"Nunito Sans", sans-serif'
    }
  })

  // dark theme 
  const darkTheme = createMuiTheme({
    palette: {
      type:'dark',
      background: {
        default:'hsl(207, 26%, 17%)',
        paper:'hsl(209, 23%, 22%)'
      },
      text: {
        primary:'hsl(0, 0%, 100%)',
        secondary:'hsl(0, 0%, 52%)'
      },
      primary: {
        main:'hsl(209, 23%, 22%)'
      }
    },
    typography: {
      fontFamily:'"Nunito Sans", sans-serif'
    }
  })

  console.log("s",theme);

  return(
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme= {!theme ? lightTheme : darkTheme}>
        <CssBaseline/>
        <Box>
          <Routers/>
        </Box>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
export default App;
