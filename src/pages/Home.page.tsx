import { useEffect, useRef, useState, type ReactNode } from "react"
import './slider.css';
import SliderDiagonalWithBtn from "../components/SliderDiagonalWithBtn.component";




function Home() {

    return (
        <section>
            <h1 className="text-center text-4xl text-neutral-400">This is my Component</h1>
            <SliderDiagonalWithBtn
                items={[
                    <img src="vite.svg" alt="vite.svg1" className="bg-neutral-600 w-full h-full rounded-2xl" />,
                    <img src="vite.svg" alt="vite.svg2" className="bg-neutral-600 w-full h-full rounded-2xl" />,
                    <img src="vite.svg" alt="vite.svg3" className="bg-neutral-600 w-full h-full rounded-2xl" />,
                    <img src="vite.svg" alt="vite.svg4" className="bg-neutral-600 w-full h-full rounded-2xl" />,
                ]}
                options={{
                    height:"240px", width:"360px",
                }}
            />
            {/*<div className="w-[400px] h-[350px] ml-40 mt-30">
                <Slider style="h-full" btns={{inset:"30", size:"40"}} />
            </div>*/}
        </section>
    )
}

export default Home
