import React from 'react';

// contextAPi for change theme 
const ThemeContext = React.createContext({
    theme: false,
    setTheme: () =>{},
})

export default ThemeContext;