import {motion, type Easing} from "motion/react";
import { useEffect, useState } from "react";



interface TextStaggeredPropTypes{
    text:string;
    animationType?:"first"|"second"|"third"|"fourth"|"fifth"|"sixth"|"seventh";
    duration?:0.5|0.7|0.9|1|1.2|1.4;
    staggeringDelay?:0.02|0.03|0.04|0.05|0.08|0.1|0.12|0.14;
    color?:string;
    fontSize?:string;
    fontWeight?:"lighter"|"light"|"normal"|"bold"|"bolder";
    gap?:"2px"|"4px"|"6px"|"8px"|"10px"|"12px";
};

const getMiddleNumber = (length:number) => {
    return (length/2)-0.5;
};

const getAnimationType = (index:number) => ({
    first:[{
        initial:{x:0, y:0, scale:1, filter:"blur(0px)"},
        hover:{x:0, y:0, scale:0, filter:"blur(7px)"}
    }
    ,{
        initial:{x:0, y:0, scale:0, filter:"blur(7px)"},
        hover:{x:0, y:0, scale:1, filter:"blur(0px)"}
    }],
    second:[{
        initial:{x:0, y:0, scaleY:1, filter:"blur(0px)"},
        hover:{x:0, y:0, scaleY:0, filter:"blur(7px)"}
    }
    ,{
        initial:{x:0, y:0, scaleY:0, filter:"blur(7px)"},
        hover:{x:0, y:0, scaleY:1, filter:"blur(0px)"}
    }],
    third:[{
        initial:{x:0, y:0, opacity:1, rotateX:"0deg", rotateY:"0deg", rotateZ:"0deg"},
        hover:{x:-30, y:[0, -30, 30], opacity:0, rotateX:"180deg", rotateY:"40deg", rotateZ:"-40deg"}
    },
    {
        initial:{x:0, y:-40, opacity:0, rotateX:"-180deg", rotateY:"-40deg", rotateZ:"40deg"},
        hover:{x:[0, 30, 0], y:[-30, -30, 0], opacity:1, rotateX:"0deg", rotateY:"0deg", rotateZ:"0deg"}
    }],
    fourth:[{
        initial:{x:0, y:0, opacity:1, rotateX:"0deg", rotateY:"0deg", rotateZ:"0deg"},
        hover:{x:-30, y:-50, opacity:0, rotateX:"180deg", rotateY:"40deg", rotateZ:"-40deg"}
    }
    ,{
        initial:{x:30, y:50, opacity:0, rotateX:"-180deg", rotateY:"-40deg", rotateZ:"40deg"},
        hover:{x:0, y:0, opacity:1, rotateX:"0deg", rotateY:"0deg", rotateZ:"0deg"}
    }],
    fifth:[{
        initial:{x:0, y:0, opacity:1, rotateX:"0deg", rotateY:"0deg", rotateZ:"0deg"},
        hover:{x:-30, y:50, opacity:0, rotateX:"180deg", rotateY:"40deg", rotateZ:"-40deg"}
    }
    ,{
        initial:{x:30, y:50, opacity:0, rotateX:"-180deg", rotateY:"-40deg", rotateZ:"40deg"},
        hover:{x:0, y:0, opacity:1, rotateX:"0deg", rotateY:"0deg", rotateZ:"0deg"}
    }],
    sixth:[{
        initial:{translateX:"0px", translateY:"0px", opacity:1, scale:1, filter:"blur(0px)"},
        hover:{translateX:`${(23)*(7-index)}px`, translateY:"-60px", opacity:0, scale:0.3, filter:"blur(7px)"}
    }
    ,{
        initial:{translateX:`${(23)*(7-index)}px`, translateY:"60px", opacity:0, scale:0.3, filter:"blur(7px)"},
        hover:{translateX:"0px", translateY:"0px", opacity:1, scale:1, filter:"blur(0px)"}
    }],
    seventh:[{
        initial:{translateX:"0px", translateY:"0px", opacity:1, filter:"blur(0px)"},
        hover:{translateX:"0px", translateY:"-60px", opacity:0, filter:"blur(7px)"}
    }
    ,{
        initial:{translateX:"0px", translateY:"60px", opacity:0, filter:"blur(7px)"},
        hover:{translateX:"0px", translateY:"0px", opacity:1, filter:"blur(0px)"}
    }]
});

function TextStaggered({text, animationType="first", duration=0.7, staggeringDelay=0.14, fontSize="48px", fontWeight="normal", color="white", gap="2px"}:TextStaggeredPropTypes) {
    const [characters, setCharacters] = useState<string[]>([]);
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const getTransitionValue = (index:number) => ({
        duration,
        ease:"easeInOut" as Easing|Easing[],
        delay:(staggeringDelay*index)
    });

    useEffect(() => {
        setCharacters(text.split(""));
    }, []);
    
    return(
        <motion.div
            initial="initial"
            whileHover={isHovering?"hover":"initial"}
            style={{
                color, fontSize, fontWeight
            }}
            className="relative w-max"
        >
            <motion.div
                style={{
                    display:"flex",
                }}
                className="w-max">
                {
                    characters.map((str, index) => 
                        typeof str === "string" && str.trim() ?
                        (
                        <motion.div
                            key={index}
                            variants={getAnimationType(index)[animationType][0]}
                            transition={{
                                ...getTransitionValue(index),
                                ...(animationType==="seventh"&&{
                                    delay:Math.abs((getMiddleNumber(characters.length)-index)*0.3)
                                })
                            }}
                            style={{
                                transformOrigin:"top",
                                gap
                            }}
                        >{str}</motion.div>
                        )
                        :
                        (<span>&nbsp;</span>)
                    )
                }
            </motion.div>
            <motion.div
                style={{
                    display:"flex"
                }}
                className="absolute top-0 left-0">
                {
                    characters.map((str, index) => 
                        typeof str === "string" && str.trim() ?
                        (
                        <motion.div
                            key={index}
                            variants={getAnimationType(index)[animationType][1]}
                            transition={{
                                ...getTransitionValue(index),
                                ...(animationType==="seventh"&&{
                                    delay:Math.abs((getMiddleNumber(characters.length)-index)*0.3)
                                })
                            }}
                            style={{
                                transformOrigin:"bottom",
                                gap
                            }}
                        >{str}</motion.div>
                        )
                        :
                        <span>&nbsp;</span>
                    )
                }
            </motion.div>

            <motion.div
                onMouseEnter={() => {setIsHovering(true)}}
                onMouseLeave={() => {setIsHovering(false)}}
                className="absolute top-0 left-0 w-full h-full"
            >
            </motion.div>

        </motion.div>
    )
};

export default TextStaggered;