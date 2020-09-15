import React from 'react';

const ThemeContext = React.createContext({
    theme: false,
    setTheme: () =>{},
})

export default ThemeContext;