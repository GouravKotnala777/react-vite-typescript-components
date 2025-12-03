import type { ReactNode } from "react";


interface BorderGradientHorizontalAnimationPropTypes{
    width?:string;
    height?:string;
    gradientArray?:string[];
    thickness?:string;
    borderRadius?:string;
    blur?:string;
    isTranslucent?:boolean;
    child:ReactNode;
};

function BorderGradientHorizontalAnimation({width="400px", height="240px", thickness="1px", gradientArray=[ "#ff00ff", "#ffff00", "#00ffff", "#ff00ff"], borderRadius="1rem", blur="0", isTranslucent=false, child}:BorderGradientHorizontalAnimationPropTypes) {
    
    return(
        <div
            style={{
                width, height,
            }}
            className="mx-auto my-30 relative">
            <div
                style={{
                    background:`linear-gradient(90deg, ${gradientArray})`,
                    filter:`blur(${blur})`,
                    backgroundPosition:"var(--move) 0%",
                    backgroundSize:"300% 100%",
                    animation:"wave 10s linear infinite"
                }}
                className="bg-[linear-gradient(90deg,#ff00ff,#ffff00,#00ffff,#ff00ff)] absolute inset-0 z-1"></div>
            <div
                style={{
                    inset:thickness,
                    borderRadius,
                    opacity:isTranslucent?"85%":"100%",
                }}
                className="absolute bg-black text-white z-2"
            >
                {child}
            </div>

            <style>
                {`
                    @property --move{
                        syntax: '<percentage>';
                        initial-value: 0%;
                        inherits: false;
                    }
                    
                    @keyframes wave {
                        0%{
                            --move:-100%;
                        }
                        40%{
                            --move:100%;
                        }
                        60%{
                            --move:100%;
                        }
                        100%{
                            --move:-100%;
                        }
                    }
                `}
            </style>
        </div>
    )
};

export default BorderGradientHorizontalAnimation;