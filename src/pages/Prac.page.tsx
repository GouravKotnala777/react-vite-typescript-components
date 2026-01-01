import {useEffect, useRef, useState, type ChangeEvent, type KeyboardEvent} from "react";
import "../index.css";


function Prac() {
    const parentSectionRef = useRef<HTMLElement|null>(null);
    const canvasRef = useRef<HTMLCanvasElement|null>(null);
    const boxRef = useRef<HTMLDivElement|null>(null);
    const inputRef = useRef<HTMLInputElement|null>(null);
    //const [text, setText] = useState("");
    //const [isInputFocused, setIsInputFocused] = useState(false);

    
    function createInputCaret(visualBox:HTMLDivElement) {
        const caret = document.createElement("span");
        caret.className = "h-full border border-black animate-pulse";
        caret.id = "caret";
        visualBox.appendChild(caret);
        //setIsInputFocused(true);
    }

    const createDust = () => {
        let particles:{size:number; x:number; y:number; velX:number; velY:number; acc:number; opacity:number; del:number; potential:number;}[] = [];
        const canvas = canvasRef.current;
        const box = boxRef.current;
        if (!canvas) return;
        if (!box) return;
        
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const rect = box.getBoundingClientRect();

        canvas.width = rect.width;
        canvas.height = rect.height;

        for (let index = 0; index < 100; index++) {
            particles.push({
                potential:1,
                opacity:1,
                del:1-(index/100),
                x:(index/100)*(rect.width),
                y:rect.height/2,
                size:0.8,
                velX:Math.abs((Math.random()-0.5)*1.5),
                velY:(Math.random()-0.5)*1.5,
                acc:0
            });
        }

        const children = box.children;

        if (!children) return;

        let num = children.length;
        const animateParticles = () => {
            ctx.clearRect(0,0,canvas.width,canvas.height);

            let num2 = 0;
            for (const child of children) {
                num2+=0.9;
                num-=0.01;
                (child as HTMLElement).style.opacity = `${num-num2}`; 
            }
            
            particles.forEach((p) => {
                if (p.del > 0) {
                    p.del -= 0.01
                }
                else{
                    p.x += p.velX;
                    p.y += p.velY;
                    p.opacity -= 0.02;
                    p.potential -= 0.01;
                }
                ctx.fillStyle = `rgba(0, 0, 0, ${1-Math.abs(p.opacity)})`;
                ctx.beginPath();
                ctx.arc(
                    p.x,
                    p.y,
                    p.size, 0, Math.PI*2
                );
                ctx.fill();
            });

            if (particles.some(p => p.potential > 0) || num > 0) {
                requestAnimationFrame(animateParticles);
            }
            else{
                const inputElem = inputRef.current;

                if (!inputElem) return;

                inputElem.value = "";
                box.innerHTML = "";
                inputElem.blur();
            }
        }

        animateParticles();
    };

    function changeInputHandler(e:ChangeEvent<HTMLInputElement>){
        const boxElem = boxRef.current;

        if (!boxElem) return;
        
        const inputEvent = (e.nativeEvent as InputEvent);
        
        const data = inputEvent.data;
        const type = inputEvent.inputType;    
        
        if (type === "insertFromPaste" && data) {
            [...data].forEach(ch => {
                const spanElem = document.createElement("span");
                spanElem.textContent = ch;
                boxElem.appendChild(spanElem);
            });
        }

    };

    function keyboardEventHandler(e:KeyboardEvent<HTMLInputElement>) {
        const boxElem = boxRef.current;
        const caret = document.getElementById("caret");

        if (!boxElem) return;
        if (!caret) return;
        const key = e.key;

        console.log(e);
        

        if (key === "Enter") {
            createDust();
            //setIsInputFocused(false);
        }
        else if (key === "ArrowLeft") {
            const preElem = caret.previousSibling;
            boxElem.insertBefore(caret, preElem);
        }
        else if (key === "ArrowRight") {
            const nextElem = caret.nextSibling;
            if (!nextElem) return;
            boxElem.insertBefore(nextElem, caret);
        }
        else if (key === "Backspace") {
            const preElem = caret.previousSibling;            
            
            if (preElem) {
                boxElem.removeChild(preElem);
            }
        }
        else if (key === "Delete") {
            const nextSibling = caret.nextSibling;
            if (nextSibling) {
                boxElem.removeChild(nextSibling);
            }            
        }
        else if (key === " ") {
            const spanElem = document.createElement("span");
            spanElem.textContent = " ";
            spanElem.className = "w-1 inline-block";
            boxElem.insertBefore(spanElem, document.getElementById("caret"));       
        }
        else{
            const spanElem = document.createElement("span");
            spanElem.textContent = key;
            boxElem.insertBefore(spanElem, document.getElementById("caret"));

        }        
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const box = boxRef.current;
        if (!canvas) return;
        if (!box) return;
        
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const rect = box.getBoundingClientRect();

        canvas.width = rect.width;
        canvas.height = rect.height;
    }, []);

    return(
        <section ref={parentSectionRef} className="max-w-3xl mx-auto min-h-screen mt-30 px-4">
            <div className="border border-gray-800 my-40 w-max flex text-gray-600 dark:border-gray-200 dark:text-gray-100 rounded-sm overflow-hidden pl-1">
                <div className="relative w-40 h-10 overflow-hidden">

                    <canvas ref={canvasRef} className="absolute top-0 left-0 inset-0"></canvas>
                    <div ref={boxRef} className="absolute top-0 left-0 h-full content-center">
                        {
                            //text.split("").map((t) => (
                            //    <span className="">{t}</span>
                            //))
                        }
                    </div>


                    <input ref={inputRef} type="text" placeholder="User Name"
                        className="absolute top-0 left-0 h-full w-max opacity-0"
                        onChange={changeInputHandler}
                        //onClick={() => setIsInputFocused(true)}
                        onKeyDown={keyboardEventHandler}
                        onFocus={() => {
                            //setIsInputFocused(true);
                            createInputCaret(boxRef.current as HTMLDivElement);
                        }}
                        onBlur={() => {
                            //setIsInputFocused(false);
                            const caret = document.getElementById("caret");
                            caret?.remove();
                        }}
                    />

                </div>
                <button className="p-2 bg-gray-800 text-gray-600 hover:text-gray-500 cursor-pointer"
                    onClick={createDust}
                >E</button>
            </div>

        </section>
    )
}

export default Prac;