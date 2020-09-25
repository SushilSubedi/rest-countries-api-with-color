import React from 'react';

const SearchContextAPI = React.createContext({
    keyword: '',
    setKeyword: () => {},
})

export default SearchContextAPI;