import { createContext,useState } from "react";

const ThemeContext=createContext();

const ThemeProvider = ({children})=>{
    const [theme,setTheme]=useState("light");

    const themes={
        theme,
        setTheme,
        ChangeMood:()=>{
            if(theme==="light"){
                setTheme("dark")
            }
            else{
                setTheme("light")
            }
        },
    };

return (
    <ThemeContext.Provider value={themes}>
    {children}
</ThemeContext.Provider>
);
};

export {ThemeContext,ThemeProvider}