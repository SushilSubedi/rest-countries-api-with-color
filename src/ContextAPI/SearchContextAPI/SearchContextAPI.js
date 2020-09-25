import React from 'react';

// contextAPi for search keyword
const SearchContextAPI = React.createContext({
    keyword: '',
    setKeyword: () => {},
})

export default SearchContextAPI;