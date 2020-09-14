import React from 'react';
import { Box } from '@material-ui/core';
import CountryCardlist from './components/CountryCardlist/CountryCardlist';
import NavigationBar from './components/NavigationBar/NavigationBar';

const App = (props) => {
  return(
    <Box>
        <NavigationBar/>
        <CountryCardlist/>
    </Box>
  )
}
export default App;
