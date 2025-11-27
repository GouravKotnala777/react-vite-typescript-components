import { motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState, type ReactNode } from "react"

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
        return {height:"240px", width:"350px"};
    }
    else if (screenWidth >= 1010) {
        return {height:"240px", width:"350px"};
    }
    else if (screenWidth >= 690) {
        return {height:"140px", width:"250px"};
    }
    else {
        return {height:"120px", width:"240px"};
    }
};
function adjustGapWithResize(screenWidth:number){
    if (screenWidth >= 1320) {
        return {gap:"40px"};
    }
    else if (screenWidth >= 1010) {
        return {gap:"40px"};
    }
    else if (screenWidth >= 690) {
        return {gap:"100px"};
    }
    else {
        return {gap:"120px"};
    }
};

function UseScrollAdvance({item, options, style}:UseScrollAdvancePropTypes){
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const translateX = useTransform(scrollYProgress, [0,1], ["50vw", "-40vw"]);
    const rotateZ = useTransform(scrollYProgress, [0,1], ["55deg","-45deg"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], ["0.6", "1.2", "0.6"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5 ,1], [0, 1 ,0]);

    return(
        <motion.div ref={ref}
            className={`rounded-2xl overflow-hidden ${style}`}
            style={{
                ...(options?.height&&{maxHeight:options?.height}),
                ...(options?.width&&{maxWidth:options?.width}),
                ...(options?.height&&{height:options?.height}),
                ...(options?.width&&{width:options?.width}),
                ...(options?.boxShadow&&{boxShadow:options?.boxShadow}),
                ...(options?.padding&&{padding:options?.padding}),
                rotateZ, translateX, scale, opacity
            }}>
                {item}
        </motion.div>
    )
};

function SliderDiagonal({items, options, style}:SliderDiagonalPropTypes) {
    const [viewPortWidth, setViewPortWidth] = useState<number>(getScreenWidth());

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

    return(
        <section
            className="flex flex-col justify-center items-center overflow-x-hidden"
            style={{
                ...adjustGapWithResize(viewPortWidth)
            }}
        >
            <UseScrollAdvance item={<></>} options={{height:options?.height, width:options?.width}} />
            {
                items.map((item, index) => (
                    <UseScrollAdvance key={index} item={item} options={{...adjustWidthWithResize(viewPortWidth), padding:options?.padding, boxShadow:options?.boxShadow}} style={style} />
                ))
            }
            <UseScrollAdvance item={<></>} options={{height:options?.height, width:options?.width}} />
            <UseScrollAdvance item={<></>} options={{height:options?.height, width:options?.width}} />
        </section>
    )
};

export default SliderDiagonal;