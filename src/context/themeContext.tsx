import { createContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

interface ThemeContextType {
    theme:"light"|"dark";
    setTheme:Dispatch<SetStateAction<"light"|"dark">>;
};


export const ThemeContext = createContext<ThemeContextType|null>(null);


export function ThemeProvider({children}:{children:ReactNode}) {
    const [theme, setTheme] = useState<ThemeContextType["theme"]>("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as ThemeContextType["theme"];
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        }
        else{
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};