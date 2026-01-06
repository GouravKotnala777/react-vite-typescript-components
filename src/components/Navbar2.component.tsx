import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


interface Navbar2PropTypes{
    navItems:{
        iconPath: string;
        text: string;
        url: string;
    }[];
    fontSize?:string;
    padding?:string;
}

const IconHandler = (iconPath:string) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className="w-5 h-5 stroke-1"
    style={{
        stroke:"#99a1af"
    }}
>
    <path stroke-linecap="round"
        stroke-linejoin="round"
        d={iconPath}
    />
</svg>;

let timer = 0;
function Navbar2({navItems, fontSize="18px", padding="6px 24px"}:Navbar2PropTypes) {
    const [hoveringNavItem, setHoveringNavItem] = useState<string|null>(null);
    const [a, setA] = useState<boolean>(false);


    function func(e:globalThis.MouseEvent) {
        const dataNavItem = (e.target as HTMLElement).getAttribute("data-nav-item");
        clearTimeout(timer);
        setA(false);
        if (dataNavItem) {
            setHoveringNavItem(dataNavItem);
            timer = setTimeout(() => {
                setA(true);
            }, 200);
        }
        else{
            setHoveringNavItem(null);
        }
    };

    useEffect(() => {
        window.addEventListener("mouseover", func);

        return() => window.removeEventListener("mouseover", func);
    }, []);

    return(
        <div className="flex w-min mx-auto rounded-md bg-white [box-shadow:0px_0px_8px_0.1px_gray] text-gray-500 dark:bg-gray-800 dark:text-gray-400">
            {
                navItems.map(({iconPath, text, url}, index) => (
                    <div className="relative"
                        style={{
                            fontSize
                        }}
                    >

                        <div className="absolute w-full h-full inset-0 text-black dark:text-white text-center content-center blur-sm">O</div>

                        <div className="border border-gray-500 bg-gray-800 text-gray-400 dark:bg-gray-50 dark:text-gray-600 absolute left-[50%] -translate-x-[50%]"
                            style={{
                                padding,
                                top:(hoveringNavItem===text)?"-150%":"0%",
                                transition:(hoveringNavItem===text&&a)?
                                    "0.6s ease-in-out"
                                    :
                                    (hoveringNavItem===text)?
                                    "0.4s ease":"0.2s ease-in-out",
                                scale:(hoveringNavItem===text&&a)?
                                    "1 1"
                                    :
                                    (hoveringNavItem===text)?
                                    "0.07 0.17":"0.07 0.17",
                                filter:(hoveringNavItem===text&&a)?"blur(0)":"blur(5px)",
                                borderRadius:(hoveringNavItem===text&&a)?"4px":"2rem"
                            }}
                        >{text}</div>
                        
                        <div className={`${hoveringNavItem === text?"bg-gray-800 dark:bg-gray-50":"bg-gray-50 dark:bg-gray-800"}`}
                            style={{
                                padding,
                                transition:"0.6s",
                                borderRadius:(index === 0)?
                                    "6px 0 0 6px":
                                    (index === navItems.length-1)?
                                    "0 6px 6px 0"
                                    :
                                    "0px",
                                scale:(hoveringNavItem===text)?
                                    "1 1"
                                    :
                                    "0.9 0.9",
                                    boxShadow:"0 0 4px 0.2px #a9a9a910 inset"
                            }}
                        >
                            {IconHandler(iconPath)}
                        </div>

                        <NavLink to={url} data-nav-item={text} className="cursor-default absolute w-full h-full inset-0 text-center content-center text-transparent"
                            style={{
                                padding
                            }}
                        >{text}
                        </NavLink>
                        
                    </div>
                ))
            }
        </div>
    )
};

export default Navbar2;