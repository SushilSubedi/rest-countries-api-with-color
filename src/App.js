import React from 'react';
import { Box } from '@material-ui/core';
import CountryCardlist from './components/CountryCardlist/CountryCardlist';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SearchFilter from './components/SearchFilter/SearchFilter';

const App = (props) => {
  return(
    <Box>
        <NavigationBar/>
        <SearchFilter/>
        <CountryCardlist/>
    </Box>
  )
}
export default App;
