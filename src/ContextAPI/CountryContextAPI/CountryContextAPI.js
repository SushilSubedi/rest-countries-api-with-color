import React from 'react';

// contextAPi for country data
const CountryContextAPI = React.createContext({
    data: [],
    setData: () => {},
})

export default CountryContextAPI;