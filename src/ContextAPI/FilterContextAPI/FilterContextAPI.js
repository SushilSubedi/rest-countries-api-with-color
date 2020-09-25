import React from 'react';

const FilterContextAPI = React.createContext({
    Region: '',
    setRegion: () => {},
})

export default FilterContextAPI;