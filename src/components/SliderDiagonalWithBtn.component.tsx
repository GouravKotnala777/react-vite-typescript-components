import { useEffect, useRef, useState, type ReactNode } from "react";


interface UseScrollAdvancePropTypes{
    item:ReactNode;
    options?:{
        height?:string;
        width?:string;
        padding?:string;
        boxShadow?:string;
    };
    style?:string;
};
interface SliderDiagonalPropTypes{
    items:ReactNode[];
    options?:{
        height?:string;
        width?:string;
        padding?:string;
        boxShadow?:string;
    };
    style?:string;
};

function adjustWidthWithResize(screenWidth:number){
  if (screenWidth >= 1320) {
        return {height:240, width:350};
    }
    else if (screenWidth < 1320 && screenWidth >= 1200) {
        return {height:240, width:350};
    }
    else if (screenWidth < 1200 && screenWidth >= 1080) {
        return {height:240, width:350};
    }
    else if (screenWidth < 1080 && screenWidth >= 960) {
        return {height:240, width:350};
    }
    else if (screenWidth < 960 && screenWidth >= 840) {
        return {height:240, width:350};
    }
    else if (screenWidth < 840 && screenWidth >= 710) {
        return {height:240, width:350};
    }
    else if (screenWidth < 840 && screenWidth >= 710) {
        return {height:240, width:350};
    }
    else if (screenWidth < 710 && screenWidth >= 580) {
        return {height:240, width:350};
    }
    else if (screenWidth < 580 && screenWidth >= 522) {
        return {height:240, width:350};
    }
    else if (screenWidth < 522 && screenWidth >= 460) {
        return {height:240, width:350};
    }
    else if (screenWidth < 460 && screenWidth >= 410) {
        return {height:240, width:330};
    }
    else if (screenWidth < 410 && screenWidth >= 350) {
        return {height:240, width:280};
    }
    else if (screenWidth < 350 && screenWidth >= 300) {
        return {height:240, width:250};
    }
    else if (screenWidth < 300 && screenWidth >= 250) {
        return {height:240, width:250};
    }
    else {
        return {height:240, width:290};
    }
};
function adjustGapWithResize(screenWidth:number){
    if (screenWidth >= 1320) {
        return 100;
    }
    else if (screenWidth < 1320 && screenWidth >= 1200) {
        return 100;
    }
    else if (screenWidth < 1200 && screenWidth >= 1080) {
        return 100;
    }
    else if (screenWidth < 1080 && screenWidth >= 960) {
        return 100;
    }
    else if (screenWidth < 960 && screenWidth >= 840) {
        return 100;
    }
    else if (screenWidth < 840 && screenWidth >= 710) {
        return 100;
    }
    else if (screenWidth < 840 && screenWidth >= 710) {
        return 100;
    }
    else if (screenWidth < 710 && screenWidth >= 580) {
        return 100;
    }
    else if (screenWidth < 580 && screenWidth >= 522) {
        return 100;
    }
    else if (screenWidth < 522 && screenWidth >= 460) {
        return 100;
    }
    else if (screenWidth < 460 && screenWidth >= 410) {
        return 120;
    }
    else if (screenWidth < 410 && screenWidth >= 350) {
        return 170;
    }
    else if (screenWidth < 350 && screenWidth >= 300) {
        return 200;
    }
    else if (screenWidth < 300 && screenWidth >= 250) {
        return 200;
    }
    else {
        return 160;
    }
};
function adjustPaddingWithResize(screenWidth:number){
    if (screenWidth >= 1420) {
        return 10;
    }
    else if (screenWidth < 1420 && screenWidth >= 1320) {
        return 14;
    }
    else if (screenWidth < 1320 && screenWidth >= 1212) {
        return 14;
    }
    else if (screenWidth < 1212 && screenWidth >= 1080) {
        return 16;
    }
    else if (screenWidth < 1080 && screenWidth >= 960) {
        return 18;
    }
    else if (screenWidth < 960 && screenWidth >= 840) {
        return 20;
    }
    else if (screenWidth < 840 && screenWidth >= 710) {
        return 24;
    }
    else if (screenWidth < 710 && screenWidth >= 580) {
        return 19;
    }
    else if (screenWidth < 580 && screenWidth >= 522) {
        return 16;
    }
    else if (screenWidth < 522 && screenWidth >= 460) {
        return 12;
    }
    else if (screenWidth < 460 && screenWidth >= 410) {
        return 9;
    }
    else if (screenWidth < 410 && screenWidth >= 350) {
        return 8;
    }
    else if (screenWidth < 350 && screenWidth >= 300) {
        return 6;
    }
    else if (screenWidth < 300 && screenWidth >= 250) {
        return 6;
    }
    else {
        return 16;
    }
};

function UseScrollAdvance({item, options, style}:UseScrollAdvancePropTypes){
    const ref = useRef(null);

    return(
        <div ref={ref}
            className={`rounded-2xl ${style} transform rotate-[-30deg]`}
            style={{
                ...(options?.height&&{maxHeight:options?.height}),
                ...(options?.width&&{maxWidth:options?.width}),
                ...(options?.height&&{minHeight:options?.height}),
                ...(options?.width&&{minWidth:options?.width}),
                ...(options?.height&&{height:options?.height}),
                ...(options?.width&&{width:options?.width}),
                ...(options?.boxShadow&&{boxShadow:options?.boxShadow}),
                ...(options?.padding&&{padding:options?.padding}),
                //rotateZ, translateX, scale, opacity
            }}>
                {item}
        </div>
    )
};

function SliderDiagonalWithBtn({items, options, style}:SliderDiagonalPropTypes) {
    const parentRef = useRef<HTMLDivElement|null>(null);
    const [viewPortWidth, setViewPortWidth] = useState<number>(getScreenWidth());
    const [step, setStep] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const [mutatedItems, setMutatedItems] = useState<ReactNode[]>([]);
    const [isBtnTransitioning, setIsBtnTransitioning] = useState<boolean>(false);

    function getScreenWidth() {
        return window.innerWidth;
    };

    useEffect(() => {
        function handleViewPortWidthResize() {
            setViewPortWidth(getScreenWidth());
        }

        addEventListener("resize", handleViewPortWidthResize);



        return() => removeEventListener("resize", handleViewPortWidthResize);
    }, []);

    function handler(){
      setIsBtnTransitioning(true);
      if (isTransitioning) return;

      setIsTransitioning(true);
      setStep(step+1);
    };

    useEffect(() => {
        setMutatedItems([...items, items[0]]);
    }, []);

    useEffect(() => {
      if(!isTransitioning) return;

      const element = parentRef.current;
        
      if (!element) return;
      
      const firstChild = element.firstElementChild;
      const lastChild = element.lastElementChild;
      if (!firstChild) return;
      if (!lastChild) return;

      if (items.length === step) {
        const timer = setTimeout(() => {
          setIsTransitioning(false);
          setStep(0);
        }, 700);

        return() => clearTimeout(timer);
      }
      else{
        const timer = setTimeout(() => {
          setIsTransitioning(false);
        }, 700);
        
        return() => clearTimeout(timer);
      }
    }, [isTransitioning, step]);

    function getTransformValue() {
      return `translateX(-${
        (adjustWidthWithResize(viewPortWidth).width + (adjustGapWithResize(viewPortWidth)))
        *step}px)`
    };

    function getTransitionStyle() {
      if (step === 0 && !isTransitioning) return "none";
      return isTransitioning ? "transform 0.7s ease-in-out" : "none";
    };

    function getOpacity(itemIndex:number) {
      return itemIndex === step ? "opacity-100 duration-700 scale-100" : "opacity-40 duration-700 scale-80";
    };

    const displayItems = mutatedItems.length > 0 ? mutatedItems : items;

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsBtnTransitioning(false);
      }, 500);

      return() => clearTimeout(timer);      
    }, [isBtnTransitioning]);

    return(
      <>
        <section
            className="overflow-hidden mt-10 py-4"
        >
            <div
                ref={parentRef}
                style={{
                  transform:getTransformValue(),
                  transition:getTransitionStyle(),
                  gap:`450px`,
                  paddingLeft:`${adjustPaddingWithResize(viewPortWidth)}vw`
                }}
                className="grid grid-cols-6 transform transition-transform ease-in-out duration-700 rotate-30"
            >

                {
                    displayItems.map((item, index) => (
                        <UseScrollAdvance key={index} item={item} options={{
                          height:`${adjustWidthWithResize(viewPortWidth).height}px`,
                          width:`${adjustWidthWithResize(viewPortWidth).width}px`,
                          padding:options?.padding, boxShadow:options?.boxShadow
                        }} style={`${style} ${getOpacity(index)}`} />
                    ))
                }
            </div>
        </section>

        <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full -rotate-45 overflow-hidden ml-auto">
            <div className="w-[50%] h-full left-0 absolute bg-[conic-gradient(from_var(--gradient-angle),white_0deg_324deg,black_324deg_360deg)] dark:bg-[conic-gradient(from_var(--gradient-angle),black_0deg_324deg,white_324deg_360deg)]"
                style={{
                    animation:"rotation 3s ease-in-out infinite"
                }}
            ></div>
            <div className="w-[50%] h-full right-0 absolute bg-[conic-gradient(from_var(--gradient-angle),white_0deg_324deg,black_324deg_360deg)] dark:bg-[conic-gradient(from_var(--gradient-angle),black_0deg_324deg,white_324deg_360deg)]"
                style={{
                    animation:"rotation 3s 0.2s ease-in-out reverse infinite"
                }}
            ></div>
            <button className="m-px rounded-full cursor-pointer z-20 
                bg-white dark:bg-transparent dark:backdrop-blur-3xl
            overflow-hidden"
            onClick={handler}
            >
            <div className="flex rotate-80"
                style={{
                transform:isBtnTransitioning?"translateX(-100%)":"translateX(0%)",
                transition:isBtnTransitioning?"ease-in-out 0.5s":"none"
                }}
            >
                <img className="rotate-140" src="right-bottom-arrow2.svg" alt="right-bottom-arrow2" />
                <img className="rotate-140" src="right-bottom-arrow2.svg" alt="right-bottom-arrow2" />
            </div>
            </button>
        </div>

        <style>
            {
                `
                @property --gradient-angle{
                    syntax:"<angle>";
                    initial-value:0deg;
                    inherits:false;
                }
                
                @keyframes rotation {
                    from { --gradient-angle: 0deg; }
                    to   { --gradient-angle: 360deg; }
                }
                `
            }
        </style>
      </>
    )
};

export default SliderDiagonalWithBtn;