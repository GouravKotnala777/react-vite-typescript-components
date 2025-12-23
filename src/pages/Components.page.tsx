import { type ReactNode } from "react";
import AnimatedText from "../components/AnimatedText.component";
import Navbar from "../components/Navbar.component";
import TextStaggered from "../components/TextStaggered.component";
import TooltipPanel from "../components/Tooltip.component";
import BorderedImage from "../components/BorderedImage.component";
import BorderGradientAnimation from "../components/BorderGradientAnimation.component";
import Navbar2 from "../components/Navbar2.component";
import Navbar3 from "../components/Navbar3.component";



const NAVITEMS = [
    {icon:"H", text:"Home"},
    {icon:"P", text:"Profile"},
    {icon:"C", text:"Components"},
    {icon:"L", text:"Logout"},
    {icon:"E", text:"Exit"}
];


function Components() {
    
    return(
        <section className="max-w-3xl mx-auto min-h-screen mt-30 px-4">
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="sourceGraphic" stdDeviation="8" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                        <feBlend in="sourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <h2 className="text-2xl font-semibold mt-10">Navbar</h2>
            <p className="tracking-normal leading-7 text-gray-600 dark:text-gray-200">A stylish dark mode supported navbar component-</p>



            <div className="mt-30 mx-auto w-min">
                <Navbar navlinks={NAVITEMS} padding="6px 12px" fontSize="18px" borderRadius="8px" previewGap="-60px" />
            </div>
            <div className="mt-30 mx-auto w-min">
                <Navbar2 />
            </div>
            <div className="mt-30 mx-auto w-min">
                <Navbar3 navItems={NAVITEMS} />
            </div>









            <h2 className="text-2xl font-semibold mt-10">Animated Text</h2>
            <p className="tracking-normal leading-7 text-gray-600 dark:text-gray-200">A text component with different types of cool animation-</p>
            <div className="">
                <CodeWithComment childElement={
                    <div className="flex text-xl gap-3">
                        <div className="flex justify-between items-center gap-1 w-max">I am a </div>
                        <AnimatedText textLines={["MERN Stack Developer", "Problem Solver", "Tech Explorer", "JavaScript Lover", "Developer", "Designer"]} color={["#ffff00", "#ff00ff", "#00ffff", "#fff000", "#0fff00", "#00fff0", "#ffff00"]} duration={2000} height="45px" fontSize="20px"  />
                    </div>
                } comment="{ color?:{[ '#ffff00', '#ff00ff', '#00ffff', '#fff000', '#0fff00', '#00fff0', '#ffff00' ]} , duration:{2000} , height:'45px' }" />
                <CodeWithComment childElement={
                    <div className="flex justify-between items-center text-xl gap-3">
                        <div className="flex justify-between items-center gap-1 w-max">I am a </div>
                        <AnimatedText textLines={["MERN Stack Developer", "Problem Solver", "Tech Explorer", "JavaScript Lover", "Developer", "Designer"]} color="gray" duration={2000} height="45px" fontSize="20px"  />
                    </div>
                } comment="{ color:'gray' , duration:{2000} , height:'45px' }" />
            </div>


            <h2 className="text-2xl font-semibold mt-10">Staggered Text (on hover)</h2>
            <p className="tracking-normal leading-7 text-gray-600 dark:text-gray-200">A text component with different types of cool animation-</p>
            <div className="">
                <CodeWithComment childElement={
                    <TextStaggered text="Gourav Kotnala" color="black" fontSize="2rem" />
                } comment="{ text : 'Gourav Kotnala' , color : 'black' , fontSize : '2rem' }" />

                <CodeWithComment
                    childElement={
                        <TextStaggered text="Gourav Kotnala" color="black" fontSize="2rem" animationType="second" />
                    } comment="{ text : 'Gourav Kotnala' , color : 'black' , fontSize : '2rem' , animationType : 'second' }"
                />
                <CodeWithComment
                    childElement={
                        <TextStaggered text="Gourav Kotnala" color="black" fontSize="2rem" animationType="third" />
                    } comment="{ text : 'Gourav Kotnala' , color : 'black' , fontSize : '2rem' , animationType : 'third' }"
                />
                <CodeWithComment
                    childElement={
                        <TextStaggered text="Gourav Kotnala" color="black" fontSize="2rem" animationType="fourth" />
                    } comment="{ text : 'Gourav Kotnala' , color : 'black' , fontSize : '2rem' , animationType : 'fourth' }"
                />
                <CodeWithComment
                    childElement={
                        <TextStaggered text="Gourav Kotnala" color="black" fontSize="2rem" animationType="fifth" />
                    } comment="{ text : 'Gourav Kotnala' , color : 'black' , fontSize : '2rem' , animationType : 'fifth' }"
                />
                <CodeWithComment
                    childElement={
                        <TextStaggered text="Gourav Kotnala" color="black" fontSize="2rem" animationType="sixth" />
                    } comment="{ text : 'Gourav Kotnala' , color : 'black' , fontSize : '2rem' , animationType : 'sixth' }"
                />
                <CodeWithComment
                    childElement={
                        <TextStaggered text="Gourav Kotnala" color="black" fontSize="2rem" animationType="seventh" />
                    } comment="{ text : 'Gourav Kotnala' , color : 'black' , fontSize : '2rem' , animationType : 'seventh' }"
                />
                <CodeWithComment
                    childElement={
                        <TextStaggered text="Gourav Kotnala" color="black" fontSize="2rem" fontWeight="bolder" />
                    } comment="{ text : 'Gourav Kotnala' , color : 'black' , fontSize : '2rem' , fontWeight : 'bolder' }"
                />
            </div>


            <h2 className="text-2xl font-semibold mt-10">Tooltip</h2>
            <p className="tracking-normal leading-7 text-gray-600 dark:text-gray-200">A tooltip component-</p>
            <div>
                <div className="border-2 border-red-500 h-[200px]">
                    <TooltipPanel fontSize="10px" />                    
                    <div data-tooltip="<div data-tooltip='tooltip-content' className='w-max m-10 cursor-default hover:opacity-30'>Gourav</div>" className="w-max m-10 cursor-default hover:opacity-30">Gourav (hover me)</div>
                    <div data-tooltip="<div data-tooltip='tooltip-content' className='w-max m-10 cursor-default hover:opacity-30'>Kotnala</div>" className="w-max m-10 cursor-default hover:opacity-30">Kotnala (hover me)</div>
                </div>
            </div>


            <h2 className="text-2xl font-semibold mt-10">Border Gradient</h2>
            <p className="tracking-normal leading-7 text-gray-600 dark:text-gray-200">Stylish image background component-</p>
            <div className="my-20">
                <div>
                    <CodeWithComment
                        childElement={<BorderedImage imgURL="ecommerce.jpg" height="200px" width="300px" borderRadius="8px" thickness="20px" blur="1px" borderType="soft" />}
                        comment="{ imgURL : 'ecommerce.jpg' height : '200px' width : '300px' borderRadius : '8px' thickness : '20px' blur : '1px' borderType : 'soft' }"
                    />
                </div>
                <div>
                    <CodeWithComment
                        childElement={<BorderedImage imgURL="ecommerce.jpg" height="200px" width="300px" borderRadius="8px" thickness="20px" blur="7px" borderType="soft" />}
                        comment="{ imgURL : 'ecommerce.jpg' height : '200px' width : '300px' borderRadius : '8px' thickness : '20px' blur : '7px' borderType : 'soft' }"
                    />
                </div>
                <div>
                    <CodeWithComment
                        childElement={<BorderedImage imgURL="ecommerce.jpg" height="200px" width="300px" borderRadius="8px" thickness="4px" borderType="soft" />}
                        comment="{ imgURL : 'ecommerce.jpg' height : '200px' width : '300px' borderRadius : '8px' thickness : '2px' borderType : 'soft' }"
                    />
                </div>
                <div>
                    <CodeWithComment
                        childElement={<BorderedImage imgURL="ecommerce.jpg" height="200px" width="300px" borderRadius="8px" thickness="4px" borderType="vibrant" />}
                        comment="{ imgURL : 'ecommerce.jpg' height : '200px' width : '300px' borderRadius : '8px' thickness : '2px' borderType : 'vibrant' }"
                    />
                </div>
                
            </div>


            <h2 className="text-2xl font-semibold mt-10">Border Gradient</h2>
            <p className="tracking-normal leading-7 text-gray-600 dark:text-gray-200">Stylish image background component-</p>
            <div className="border border-red-500">
                <CodeWithComment
                    childElement={
                        <BorderGradientAnimation child={
                            <div className="relative text-white p-2 h-full w-full dark:bg-gray-200">
                                <h1 className="text-neutral-600 font-semibold text-lg">Heading</h1>
                                <p className="text-neutral-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus assumenda ea dolor quibusdam in error nam minima aspernatur hic placeat?</p>
                            </div>
                        } width="300px" height="200px" gradient={["#ffff00", "#ff00ff", "#00ffff", "#ffff00"]} backgroundColor="white" thickness="3px" borderRadius="8px" duration={4000} />
                    }
                    comment="{ child:{...} , width:'300px' , height:'200px' , gradient:{['#ffff00', '#ff00ff', '#00ffff', '#ffff00']} , backgroundColor:'white' , thickness:'3px' , borderRadius:'8px', duration:4000 }"
                />
                <CodeWithComment
                    childElement={
                        <BorderGradientAnimation child={
                            <div className="relative text-white p-2 h-full w-full dark:bg-gray-200">
                                <h1 className="text-neutral-600 font-semibold text-lg">Heading</h1>
                                <p className="text-neutral-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus assumenda ea dolor quibusdam in error nam minima aspernatur hic placeat?</p>
                            </div>
                        } width="300px" height="200px" gradient={["#000", "#fff", "#000"]} backgroundColor="white" thickness="3px" borderRadius="8px" blur="7px" duration={3000} />
                    }
                    comment="{ child:{...} , width:'300px' , height:'200px' , gradient:{['#000', '#fff', '#000']} , backgroundColor:'white' , thickness:'3px' , borderRadius:'8px' , blur:'7px' , duration:3000 }"
                />
            </div>

        </section>
    )
};


function CodeWithComment({childElement, comment}:{childElement:ReactNode; comment:string;}) {
    
    return(
        <div className="flex justify-between items-center gap-10 my-5 border-b border-gray-100">
            {childElement}
            <span className="text-green-600 text-xs">// props={comment}</span>
        </div>
    )
}

export default Components;