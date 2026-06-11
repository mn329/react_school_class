import { createContext } from "react";

export const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => {console.log('toggleTheme')}
});