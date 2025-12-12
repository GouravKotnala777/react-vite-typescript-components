import { useEffect, useRef, useState, type MouseEvent } from "react";

interface NavbarPropTypes{
    navlinks:{icon:string; text:string;}[];
    left?:string;
    translateX?:string;
    padding?:string;
    previewGap?:string;
    borderRadius?:string;
};

function Navbar({navlinks, left="0px", translateX="0px", padding="0px 0px", previewGap="-48px", borderRadius="0px"}:NavbarPropTypes) {
    const[hoveringNav, setHoveringNav] = useState<{x:number; width:number; left:number;}>({x:0, width:0, left:0});
    const [hoveringNavText, setHoveringNavText] = useState<string>("");
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [parentDivX, setParentDivX] = useState(0);
    const parentDivRef = useRef<HTMLDivElement|null>(null);

    function moveHandler(e:MouseEvent<HTMLDivElement>) {
        const dataNavItem = (e.target as HTMLElement).getAttribute("data-nav-item");
        if (!dataNavItem) return;
        const {x, width, left} = (e.target as HTMLElement).getBoundingClientRect();

        setHoveringNavText(dataNavItem);
        setHoveringNav({x, width, left});
    };

    function showHandler(e:MouseEvent<HTMLDivElement>) {
        const dataNavItem = (e.target as HTMLElement).getAttribute("data-nav-item");
        if (!dataNavItem) return;
        setIsVisible(true);
    };

    function hideHandler(e:MouseEvent<HTMLDivElement>) {
        const dataNavItem = (e.target as HTMLElement).getAttribute("data-nav-item");
        if (!dataNavItem) return;
        setIsVisible(false);
    };

    function parentDivXCalculator() {
        const parentDivElement = parentDivRef.current;

        if (!parentDivElement) return;

        const {x} = parentDivElement.getBoundingClientRect();

        setParentDivX(x);
    }
    useEffect(() => {
        parentDivXCalculator();
    }, []);
    
    return(
        <div
            className="fixed text-gray-500 bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
            style={{
                left, translate:translateX,
                boxShadow:"0px 0px 8px 0.1px gray",
                borderRadius
            }}
        >
            <div ref={parentDivRef}
                className="relative w-min"
                onMouseOver={showHandler}
                onMouseMove={moveHandler}
                onMouseOut={hideHandler}
            >
                <div className="rounded-sm absolute left-0 w-23 overflow-hidden transition-all ease-in-out duration-1000 border border-gray-500"
                    style={{
                        translate:isVisible?`${(hoveringNav.x-parentDivX)}px`:`${(hoveringNav.x-parentDivX)}px`,
                        width:isVisible?hoveringNav.width:hoveringNav.width,
                        opacity:isVisible?1:0,
                        top:previewGap,
                        borderRadius
                    }}
                >
                    <div className="w-max transition-all ease-in-out duration-1000 flex"
                        style={{
                            translate:`${-hoveringNav.x+parentDivX}px`
                        }}
                    >
                        {
                            navlinks.map(({icon, text}, index) => (
                                <div key={index} className="transition-all ease duration-600 text-lg bg-gray-800 text-gray-200"
                                    style={{
                                        transform:hoveringNavText === text?"scale(1)":"scale(0.5)",
                                        filter:hoveringNavText === text?"blur(0)":"blur(7px)",
                                        padding
                                    }}
                                >{text}</div>
                            ))
                        }
                    </div>
                </div>
                <div
                    style={{
                        borderRadius
                    }}
                    className="flex overflow-hidden">
                    {
                        navlinks.map(({icon, text}, index) => (
                            <div key={index} className="text-lg h-full cursor-pointer flex items-center relative transition-all ease-in-out duration-600 hover:bg-gray-800"
                                style={{
                                    padding,
                                    scale:(hoveringNavText === text)?1:0.9
                                }}
                            >
                                <div className="text-gray-300">{text}</div>
                                <div data-nav-item={text} className="backdrop-blur-md absolute left-0 top-0 h-full w-full text-center content-center">{icon}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Navbar;