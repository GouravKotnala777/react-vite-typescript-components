import { useEffect, useState } from "react";
import { MoonSVG, SunSVG } from "./TextPanel.component";
import "../index.css";

interface HeaderPropType{
    isHeaderVisible:boolean;
};

function Header({isHeaderVisible}:HeaderPropType) {
    const [theme, setTheme] = useState<"light"|"dark">("light");


    useEffect(() => {
        document.documentElement.classList.toggle("dark");
    }, [theme]);
    
    return(
        <header className="aaaa z-20 fixed max-w-3xl ml-[50%] translate-x-[-50%] w-full h-25 bg-[linear-gradient(90deg,#ffff00,#ff00ff,#00ffff,#ffff00)] rounded-[0px_0px_8px_8px]"
            style={{
                top:isHeaderVisible?"0%":"-100%",
                transition:"0.5s ease-in-out",
                borderLeft:"2px dashed #ffffff90",
                borderRight:"2px dashed #ffffff90",
                borderBottom:"2px dashed #ffffff90"
            }}
        >
            <div className="flex justify-between items-center absolute h-full inset-0 backdrop-blur-xl bg-white dark:bg-gray-950 rounded-[0px_0px_8px_8px] px-4">
                <div className="flex gap-4 items-center">
                    <div>
                        <img src="vite.svg" alt="vite.svg" className="w-13 h-13" />
                    </div>
                    <div className="flex gap-4 text-gray-600 dark:text-gray-200">
                        <nav>Work</nav>
                        <nav>Blogs</nav>
                        <nav>Projects</nav>
                    </div>
                </div>
                <div className="flex gap-4 items-center text-gray-600 dark:text-gray-200">
                    <div>search</div>
                    <button
                        className="w-5 h-5 cursor-pointer"
                        style={{
                            color:theme === "light"?"black":"white"
                        }}
                        onClick={() => setTheme(theme === "light"?"dark":"light")}
                    >
                        {
                            theme === "light" ? <MoonSVG /> : <SunSVG />
                        }
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;