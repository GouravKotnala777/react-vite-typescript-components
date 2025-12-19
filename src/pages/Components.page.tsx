import type { ReactNode } from "react";
import AnimatedText from "../components/AnimatedText.component";
import Navbar from "../components/Navbar.component";
import TextStaggered from "../components/TextStaggered.component";


function Components() {
    
    return(
        <section className="border-2 border-red-600 max-w-3xl mx-auto min-h-screen mt-30 px-4">
            <h2 className="text-2xl font-semibold mt-10">Navbar</h2>
            <p className="tracking-normal leading-7 text-gray-600 dark:text-gray-200">A stylish dark mode supported navbar component-</p>
            <div className="h-10 my-14">
                <Navbar navlinks={[
                    {icon:"H", text:"Home"},
                    {icon:"P", text:"Profile"},
                    {icon:"C", text:"Components"},
                    {icon:"L", text:"Logout"},
                    {icon:"E", text:"Exit"}
                    ]} padding="6px 12px" fontSize="18px" position="absolute" top="45%" left="50%" translateX="-50%" borderRadius="8px" previewGap="-60px" />
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



            <h2 className="text-2xl font-semibold mt-10">Animated Text</h2>
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