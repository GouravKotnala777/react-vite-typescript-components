import { useEffect, useState } from "react";


interface AnimatedTextPropTypes{
    lines:string[];
    duration?:number;
};





function AnimatedText({lines, duration=1000}:AnimatedTextPropTypes) {
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
    const [step, setStep] = useState<number>(0);
    const [cloneLines, setCloneLines] = useState<string[]>([]);


    useEffect(() => {
        setCloneLines([...lines, lines[0]]);        
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
            }, 0);
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
                  <p key={index} className="text-2xl text-white h-full">{str}</p>
                ))
              }
            </div>
        </div>
    )
};

export default AnimatedText;