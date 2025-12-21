import { useEffect, useState } from "react";

interface TooltipPanelPropTypes {
    delay?:number;
    follower?:boolean;
    hasLoader?:boolean;
    fontSize?:string;
}

let timer = 0;

function TooltipPanel({delay=1200, follower=false, hasLoader=false, fontSize="14px"}:TooltipPanelPropTypes) {
    const [text, setText] = useState<string>("");
    const [tooltipPosition, setTooltipPosition] = useState<{x:number; y:number;}>({x:0,y:0});
    const [timerPosition, setTimerPosition] = useState<{x:number; y:number;}>({x:0,y:0});
    const [visible, setVisible] = useState<boolean>(false);
    
    function setPositionHandler(e:globalThis.MouseEvent) {
        const curPosition = {x:e.clientX, y:e.clientY};
        const divPosition = (e.target as HTMLElement).getBoundingClientRect();
 
        setTooltipPosition(follower ? curPosition : divPosition);
        setTimerPosition(curPosition);
    };

    function show(e:globalThis.MouseEvent) {
        const tooltipText = (e.target as HTMLElement).getAttribute("data-tooltip");

        if (!tooltipText) {
            return;
        }

        clearTimeout(timer);

        timer = setTimeout(() => {
            setText(tooltipText);
        }, delay);
        setVisible(true);

    };
    
    function hide() {
        setText("");
        setVisible(false);
    };

    useEffect(() => {
        document.addEventListener("mouseover", show);
        document.addEventListener("mouseout", hide);
        
        return() => {
            document.removeEventListener("mouseover", show);
            document.removeEventListener("mouseout", hide);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", setPositionHandler);

        return() => window.removeEventListener("mousemove", setPositionHandler);
    }, []);

    return(
        <>
            <div className="fixed w-3 h-3 rounded-full"
                style={{
                    display:hasLoader?"block":"none",
                    top:timerPosition.y+12,
                    left:timerPosition.x+12,
                    opacity:(visible && !text)?1:0,
                    background:"conic-gradient(black var(--loader-angle), transparent var(--loader-angle))",
                    ...(visible&&{animation:`loader-animation ${delay/1000}s linear infinite`})
                }}
            >
                <div className="inset-0.5 absolute rounded-full bg-white">

                </div>

                <style>
                    {`
                        @property --loader-angle{
                            syntax:'<angle>';
                            initial-value:0deg;
                            inherits:false;
                        }

                        @keyframes loader-animation{
                            0%{--loader-angle:0deg;}
                            100%{--loader-angle:360deg;}
                        }
                    `}
                </style>
            </div>
            <div
                className="fixed px-2 py-1 bg-black text-white rounded pointer-events-none"
                style={{
                    top: tooltipPosition.y + 30,
                    left: tooltipPosition.x + 30,
                    transition:"0.3s",
                    transformOrigin:"left",
                    transform:(visible && text)?`scale(1)`:`scale(0)`,
                    filter:(visible && text)?"blur(0)":"blur(7px)",
                    opacity:(visible && text)?1:0,
                    fontSize
                }}
            >
                {text}
            </div>
        </>
    )
};


export default TooltipPanel;