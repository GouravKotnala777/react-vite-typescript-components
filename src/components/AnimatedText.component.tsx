import { useEffect, useState } from "react";


interface AnimatedTextPropTypes{
    textLines:string[];
    duration?:number;
    fontSize?:string;
    color?:string;
    backgroundColor?:string;
    fontFamily?:string;
};





function AnimatedText({textLines, duration=1000, fontSize="2rem", color="black", backgroundColor="transparent", fontFamily="sans-serif"}:AnimatedTextPropTypes) {
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
    const [step, setStep] = useState<number>(0);
    const [cloneLines, setCloneLines] = useState<string[]>([]);


    useEffect(() => {
        setCloneLines([...textLines, textLines[0]]);        
    }, []);

    useEffect(() => {
        if (step === cloneLines.length) {
            setIsTransitionEnabled(false);
            setStep(0);
            return;
        }
        if (isTransitionEnabled) {
            const timer = setTimeout(() => {
                setIsTransitionEnabled(true);
                setStep(step+1);
            }, duration);
            return() => {clearTimeout(timer)};
        }
        else{
            const timer = setTimeout(() => {
                setIsTransitionEnabled(true);
                setStep(step+1);
            }, 100);
            return() => {clearTimeout(timer)};
        }
    }, [step, cloneLines]);

    function getTransformValue() {
        return `translateY(-${100*step}%)`;
    };
    function getTransitionValue() {
        if (step === 0 && !isTransitionEnabled) return "none";
        return isTransitionEnabled ? "transform 0.6s ease-in-out":"none";
    };
    
    return(
        <div className="w-max h-[50px] overflow-y-hidden">
            <div className="h-full"
              style={{
                transform:getTransformValue(),
                transition:getTransitionValue()
              }}
            >
              {
                cloneLines.map((str, index) => (
                  <p key={index} style={{fontSize, color, backgroundColor, fontFamily}} className="h-full">{str}</p>
                ))
              }
            </div>
        </div>
    )
};

export default AnimatedText;