import { useEffect, useState } from "react";


interface Navbar2PropTypes{
    fontSize?:string;
    padding?:string;
}

const navItems = [
    {icon:"H", text:"Home"},
    {icon:"P", text:"Profile"},
    {icon:"C", text:"Components"},
    {icon:"L", text:"Logout"},
    {icon:"E", text:"Exit"}
];
let timer = 0;
function Navbar2({fontSize="18px", padding="6px 24px"}:Navbar2PropTypes) {
    const [hoveringNavItem, setHoveringNavItem] = useState<number|null>(null);
    const [a, setA] = useState<boolean>(false);


    function func(e:globalThis.MouseEvent) {
        const dataNavItem = (e.target as HTMLElement).getAttribute("data-nav-item");
        clearTimeout(timer);
        setA(false);
        if (dataNavItem) {
            setHoveringNavItem(Number(dataNavItem));
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
        <div>
            <div className="flex w-min mx-auto rounded-md bg-white [box-shadow:0px_0px_8px_0.1px_gray] text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                {
                    navItems.map((nav, index) => (
                        <div className="relative"
                            style={{
                                fontSize
                            }}
                        >
                            <div className="border border-gray-500 bg-gray-800 text-gray-400 dark:bg-gray-50 dark:text-gray-600 absolute left-[50%] -translate-x-[50%] -z-1"
                                style={{
                                    padding,
                                    top:(hoveringNavItem===index)?"-150%":"0%",
                                    transition:(hoveringNavItem===index&&a)?
                                        "0.6s ease-in-out"
                                        :
                                        (hoveringNavItem===index)?
                                        "0.4s ease":"0.2s ease-in-out",
                                    scale:(hoveringNavItem===index&&a)?
                                        "1 1"
                                        :
                                        (hoveringNavItem===index)?
                                        "0.07 0.17":"0.07 0.17",
                                    filter:(hoveringNavItem===index&&a)?"blur(0)":"blur(5px)",
                                    borderRadius:(hoveringNavItem===index&&a)?"4px":"2rem"
                                }}
                            >{nav.text}</div>
                            <div className="absolute w-full h-full inset-0 text-black dark:text-white text-center content-center blur-sm ">{nav.icon}</div>
                            <div data-nav-item={index} className="hover:bg-gray-800 dark:hover:bg-gray-50 dark:hover:text-gray-500 cursor-default"
                                style={{
                                    padding, boxShadow:"0 0 4px 0.2px #a9a9a910 inset",
                                    borderRadius:(index === 0)?
                                        "6px 0 0 6px":
                                        (index === navItems.length-1)?
                                        "0 6px 6px 0"
                                        :
                                        "0px",
                                    transition:"0.4s",
                                    scale:(hoveringNavItem===index)?
                                        "1 1"
                                        :
                                        "0.9 0.9",
                                }}
                            >{nav.icon}</div>
                        </div>
                    ))
                }
            </div>     
        </div>
    )
};

export default Navbar2;