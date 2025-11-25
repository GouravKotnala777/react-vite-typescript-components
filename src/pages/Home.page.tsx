import { useState } from "react"
import Slider from "../components/Slider"





function Home() {
    const [a, setA] = useState(false);

    return (
        <section>
            <h1 className="text-center text-4xl text-neutral-400">This is my Component</h1>
            {/*<div className="border-2 border-neutral-400 m-10 flex flex-col h-screen">
                <div className="border-2 border-neutral-400 h-[100px]">{a&&<Slider style="h-full" />}</div>
                <div className="border-2 border-neutral-400 flex flex-1">
                <div className="border-2 border-neutral-400 w-[200px]">{a&&<Slider style="h-full" />}</div>
                <div className="border-2 border-neutral-400 flex flex-col flex-1">
                    <div className="border-2 border-neutral-400 flex-1">{a&&<Slider style="h-full" />}</div>
                    <div className="border-2 border-neutral-400 flex flex-1">
                    <div className="border-2 border-neutral-400 w-[300px] h-[300px]">
                        {a&&<Slider style="h-full" />}
                    </div>
                    <div className="border-2 border-neutral-400 flex-2">{a&&<Slider style="h-full" />}</div>
                    </div>
                </div>
                </div>
            </div>*/}
            <div className="w-[400px] h-[350px] ml-40 mt-30">
                <Slider style="h-full" btns={{inset:"30", size:"40"}} />
            </div>
        </section>
    )
}

export default Home
