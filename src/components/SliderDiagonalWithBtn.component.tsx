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
    else if (screenWidth < 580 && screenWidth >= 460) {
        return {height:240, width:350};
    }
    else if (screenWidth < 460 && screenWidth >= 360) {
        return {height:240, width:350};
    }
    else {
        return {height:240, width:310};
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
    else if (screenWidth < 580 && screenWidth >= 460) {
        return 100;
    }
    else if (screenWidth < 460 && screenWidth >= 360) {
        return 100;
    }
    else {
        return 140;
    }
};
function adjustPaddingWithResize(screenWidth:number){
    if (screenWidth >= 1320) {
        return 37;
    }
    else if (screenWidth < 1320 && screenWidth >= 1200) {
        return 37;
    }
    else if (screenWidth < 1212 && screenWidth >= 1080) {
        return 35;
    }
    else if (screenWidth < 1080 && screenWidth >= 960) {
        return 33;
    }
    else if (screenWidth < 960 && screenWidth >= 840) {
        return 31;
    }
    else if (screenWidth < 840 && screenWidth >= 710) {
        return 27;
    }
    else if (screenWidth < 710 && screenWidth >= 580) {
        return 23;
    }
    else if (screenWidth < 580 && screenWidth >= 522) {
        return 18;
    }
    else if (screenWidth < 522 && screenWidth >= 470) {
        return 15;
    }
    else if (screenWidth < 470 && screenWidth >= 420) {
        return 10;
    }
    else if (screenWidth < 420 && screenWidth >= 380) {
        return 6;
    }
    else if (screenWidth < 380 && screenWidth >= 320) {
        return 2;
    }
    else {
        return 1;
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
            className="bg-pink-100 overflow-hidden mt-10 py-4"
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

        <button className="w-[50px] h-[50px] bg-neutral-600 rounded-full text-white cursor-pointer hover:bg-neutral-500 z-20 mt-5 ml-auto block mr-5 "
          onClick={handler}
        >
          <div className="flex rotate-30"
            style={{
              transform:isBtnTransitioning?"translateX(-100%)":"translateX(0%)",
              transition:isBtnTransitioning?"ease-in-out 0.5s":"none"
            }}
          >
            <img className="rotate-140" src="right-bottom-arrow2.svg" alt="right-bottom-arrow2" />
            <img className="rotate-140" src="right-bottom-arrow2.svg" alt="right-bottom-arrow2" />
          </div>
        </button>
      </>
    )
};

export default SliderDiagonalWithBtn;