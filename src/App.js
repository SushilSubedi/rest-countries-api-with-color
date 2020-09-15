import React,{ useState } from 'react';
import { Box } from '@material-ui/core';
import Routers from './Router/Router';
import { ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import ThemeContext from './ContextAPI/ThemeContextAPI/ThemeContext';

const App = (props) => {
  const [theme,setTheme] = useState(false);
  const value = {theme, setTheme}

  const lightTheme = createMuiTheme({
    palette: {
      type: 'light'
    }
  })
  const darkTheme = createMuiTheme({
    palette: {
      type:'dark'
    }
  })

  return(
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme= {!theme ? lightTheme : darkTheme}>
        <Box>
          <Routers/>
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
export default App;
