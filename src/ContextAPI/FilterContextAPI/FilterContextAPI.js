import React from 'react';

// contextAPi for list region for countries
const FilterContextAPI = React.createContext({
    Region: '',
    setRegion: () => {},
})

export default FilterContextAPI;