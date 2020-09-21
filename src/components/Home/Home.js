import React,{ useState } from 'react';
import { Box } from '@material-ui/core';
import CountryCardlist from '../CountryCardlist/CountryCardlist';
import SearchFilter from '../SearchFilter/SearchFilter';
import SearchContextAPI from '../../ContextAPI/SearchContextAPI/SearchContextAPI';
import FilterContextAPI from '../../ContextAPI/FilterContextAPI/FilterContextAPI';


const Home = () => {

  const [keyword,setKeyword] = useState('');
  const searchValue = { keyword,setKeyword };

  const [region,setRegion] = useState('');
  const filterValue = { region,setRegion }

  return(
    <Box>
        <SearchContextAPI.Provider value={searchValue}>
          <FilterContextAPI.Provider value={filterValue}>
            <SearchFilter/>
            <CountryCardlist/>
          </FilterContextAPI.Provider>
        </SearchContextAPI.Provider>
    </Box>
  )
}
export default Home;