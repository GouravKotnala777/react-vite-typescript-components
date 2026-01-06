import Navbar from "../components/Navbar.component";
import Navbar2 from "../components/Navbar2.component";
import Navbar3 from "../components/Navbar3.component";
import Navbar4 from "../components/Navbar4.component";
import Input from "../components/Input.component";
import CodeBlock from "../components/CodeBlock.component";
import Tab from "../components/Tab.component";
import useTheme from "../hooks/useTheme";
import HeadingPara from "../components/HeadingPara.component";
import { INPUT1_CODE, NAVBAR2_CODE, NAVBAR3_CODE, NAVBAR4_CODE, NAVBAR_CODE } from "../utils/codeStrings";

const CODE_ICON = () => {
    return(
        <>
            <path d="M8 9l3 3l-3 3"></path>
            <path d="M13 15l3 0"></path>
            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
        </>
    )
}
const PREVIEW_ICON = () => {
    return (
        <>
            <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M6 8h.01"></path>
            <path d="M9 8h.01"></path>
        </>        
    )
}


const NAVITEMS:{
    iconPath: string;
    text: string;
    url: string;
}[] = [
    {iconPath:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25", text:"Home", url:"/home"},
    {iconPath:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z", text:"Chat", url:"/chat"},
    {iconPath:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0", text:"Notifications", url:"/notifications"},
    {iconPath:"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z", text:"Payments", url:"/payments"},
    {iconPath:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9", text:"Signout", url:"/signout"}
];


function Components() {
    const {theme} = useTheme();
    
    return(
        <section className="max-w-3xl mx-auto min-h-screen mt-30 px-4">

            <HeadingPara
                heading="Particle-Based Input Component"
                para="A creative React input component where the typed text smoothly disintegrates into animated particles. This component demonstrates advanced DOM manipulation, canvas/animation logic, and React state handling without using any external animation libraries. Designed to be reusable, lightweight, and visually engaging."
                url="/input"
            />
            <Tab
                panels={[
                    {
                        tabIconPath:PREVIEW_ICON(),
                        tabName:"Preview",
                        content:(
                            <div className="h-80 flex justify-center items-center">
                                <Input themeToggler={theme === "dark"} />
                            </div>
                        )
                    },
                    {
                        tabIconPath:CODE_ICON(),
                        tabName:"Code",
                        content:<CodeBlock code={INPUT1_CODE} language="jsx" />
                    }
                ]}
            />


            <HeadingPara
                heading="Navbar with Scroll-Synced Hover Indicator"
                para="A modern navigation bar where a floating label box follows hovered icons, scrolling internally to display the relevant navigation text. Designed to deliver smooth micro-interactions and a clean user experience."
                url="/navbar"
            />
            <Tab
                panels={[
                    {
                        tabIconPath:PREVIEW_ICON(),
                        tabName:"Preview",
                        content:(
                            <div className="h-80 flex justify-center items-center">
                                <Navbar navItems={NAVITEMS} padding="6px 12px" fontSize="18px" borderRadius="10px" previewGap="-60px" />
                            </div>
                        )
                    },
                    {
                        tabIconPath:CODE_ICON(),
                        tabName:"Code",
                        content:<CodeBlock code={NAVBAR_CODE} language="jsx" />
                    }
                ]}
            />



            <HeadingPara
                heading="Animated Navbar Component"
                para="A navbar with a popping up hover indicator that smoothly transitions across navigation items, delivering a modern and interactive navigation experience."
                url="/navbar"
            />
            <Tab
                panels={[
                    {
                        tabIconPath:PREVIEW_ICON(),
                        tabName:"Preview",
                        content:(
                            <div className="h-80 flex justify-center items-center">
                                <Navbar2 navItems={NAVITEMS} fontSize="15px" />
                            </div>
                        )
                    },
                    {
                        tabIconPath:CODE_ICON(),
                        tabName:"Code",
                        content:<CodeBlock code={NAVBAR2_CODE} language="jsx" />
                    }
                ]}
            />



            <HeadingPara
                heading="Interactive Gooey Navbar"
                para="A visually engaging navbar with a fluid hover indicator that smoothly transitions across navigation items. The indicator adapts its position and content based on user interaction, delivering a modern and interactive navigation experience."
                url="/navbar"
            />
            <Tab
                panels={[
                    {
                        tabIconPath:PREVIEW_ICON(),
                        tabName:"Preview",
                        content:(
                            <div className="h-80 flex justify-center items-center">
                                <Navbar3 navItems={NAVITEMS} blobTop="-10px" />
                            </div>
                        )
                    },
                    {
                        tabIconPath:CODE_ICON(),
                        tabName:"Code",
                        content:<CodeBlock code={NAVBAR3_CODE} language="jsx" />
                    }
                ]}
            />


            <HeadingPara
                heading="Gooey Hover Navbar Component"
                para="A visually engaging navbar with a fluid hover indicator that smoothly transitions across navigation items. The indicator adapts its position and content based on user interaction, delivering a modern and interactive navigation experience."
                url="/navbar"
            />
            <Tab
                panels={[
                    {
                        tabIconPath:PREVIEW_ICON(),
                        tabName:"Preview",
                        content:(
                            <div className="h-80 flex justify-center items-center">
                                <Navbar4 navItems={NAVITEMS} marginTop="320px" />
                            </div>
                        )
                    },
                    {
                        tabIconPath:CODE_ICON(),
                        tabName:"Code",
                        content:<CodeBlock code={NAVBAR4_CODE} language="jsx" />
                    }
                ]}
            />

{/*<dialog>


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
                <Navbar navItems={NAVITEMS} padding="6px 12px" fontSize="18px" borderRadius="8px" previewGap="-60px" />
            </div>
            <div className="mt-30 mx-auto w-min">
                <Navbar2 navItems={NAVITEMS} />
            </div>
            <div className="mt-30 mx-auto w-min">
                <Navbar3 navItems={NAVITEMS} />
            </div>
            <div className="mt-30 mx-auto w-min">
                <Navbar4 navItems={NAVITEMS} />
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
</dialog>*/}

        </section>
    )
};

export default Components;