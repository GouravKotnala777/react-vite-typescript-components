import type { ReactNode } from "react";

interface BorderGradientAnimationPropTypes{
    child:ReactNode;
    width?:string;
    height?:string;
    thickness?:string;
    borderRadius?:string;
    blur?:string;
    backgroundColor?:string;
    gradient?:string[];
    duration?:number;

};

function BorderGradientAnimation({child, height="100%", width="100%", thickness="1px", borderRadius="12px", blur="0px", backgroundColor="black", gradient=["#ff006e", "#8338ec", "#3b82f6", "#06ffa5", "#ffbe0b", "#ff006e"], duration=1000}:BorderGradientAnimationPropTypes) {

    return (
        <div className="relative"
            style={{
                width, height, padding:thickness, borderRadius
            }}
        >

            <div
                className="absolute inset-0"
                style={{
                    borderRadius,
                    filter:`blur(${blur})`,
                    background: `conic-gradient(from var(--gradient-angle), ${gradient})`,
                    animation: `rotation ${duration/1000}s linear infinite`,
                }}
            />

            <div className="absolute inset-0 overflow-hidden"
                style={{
                    backgroundColor,
                    margin:thickness,
                    borderRadius
                }}
            >
                {child}
            </div>

            <style>
                {`
                @property --gradient-angle {
                    syntax: '<angle>';
                    initial-value: 0deg;
                    inherits: false;
                }

                @keyframes rotation {
                    from { --gradient-angle: 0deg; }
                    to   { --gradient-angle: 360deg; }
                }
                `}
            </style>
        </div>

    );
}

export default BorderGradientAnimation;