import React,{ useState } from 'react';
import { Box } from '@material-ui/core';
import CountryCardlist from '../CountryCardlist/CountryCardlist';
import SearchFilter from '../SearchFilter/SearchFilter';
import SearchContextAPI from '../../ContextAPI/SearchContextAPI/SearchContextAPI';


const Home = () => {

  const [keyword,setKeyword] = useState('');
  const searchValue = { keyword,setKeyword };

  return(
    <Box>
        <SearchContextAPI.Provider value={searchValue}>
          <SearchFilter/>
          <CountryCardlist/>
        </SearchContextAPI.Provider>
    </Box>
  )
}
export default Home;