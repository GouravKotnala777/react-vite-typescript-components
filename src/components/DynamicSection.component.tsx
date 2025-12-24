import { useRef, type ReactNode } from 'react';
import {motion, useScroll, useTransform} from "motion/react";


interface DynamicSectionPropTypes{
    initialMarginTop?:string;
    child:ReactNode;
};


function DynamicSection({initialMarginTop="100vh", child}:DynamicSectionPropTypes) {
    const ref = useRef<HTMLDivElement|null>(null);
	const {scrollYProgress} = useScroll({target:ref, offset:["start end", "end start"]});
	const height = useTransform(scrollYProgress, [0.3, 0.65], ["10vh", "100vh"]);
	const width = useTransform(scrollYProgress, [0.3, 0.65], ["10%", "100%"]);
	const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
    
    return(
        <>
            <div
                style={{
                    height:initialMarginTop
                }}
            className="border-2 border-black"></div>
            <div ref={ref} className="border-2 border-red-600 h-[200vh]">
                <motion.div
                    style={{
                        height, width, opacity,
                        top:"20%"
                    }}
                    className="border-2 border-violet-600 sticky mx-auto"
                >
                    {child}
                </motion.div>
            </div>
        </>
    )
};

export default DynamicSection;