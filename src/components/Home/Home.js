import React from 'react';
import { Box } from '@material-ui/core';
import CountryCardlist from '../CountryCardlist/CountryCardlist';
import SearchFilter from '../SearchFilter/SearchFilter';

const Home = () => {
  return(
    <Box>
        <SearchFilter/>
        <CountryCardlist/>
    </Box>
  )
}
export default Home;