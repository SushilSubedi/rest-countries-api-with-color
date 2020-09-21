import React,{ useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import Routers from './Router/Router';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import ThemeContext from './ContextAPI/ThemeContextAPI/ThemeContext';
import NavigationBar from './components/NavigationBar/NavigationBar';
import CountryData from './ContextAPI/CountryContextAPI/CountryContextAPI';

const App = () => {
  const [theme,setTheme] = useState(false);
  const value = {theme, setTheme}

  const [data,setData] = useState([]);
    const store = { data,setData };



  // light theme 
  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      background: {
        default:'hsl(0, 0%, 98%)',
        paper:'hsl(0, 0%, 100%)'
      },
      text: {
        primary:'hsl(200, 15%, 8%)',
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

  return(
    <ThemeContext.Provider value={value}>
      <CountryData.Provider value={store}>
        <MuiThemeProvider theme= {!theme ? lightTheme : darkTheme}>
            <CssBaseline/>
            <NavigationBar>
              <Routers/>
            </NavigationBar>
          </MuiThemeProvider>
      </CountryData.Provider>
    </ThemeContext.Provider>
  )
}
export default App;
