import { useEffect, useRef, useState, type ChangeEvent, type KeyboardEvent, type MouseEvent } from "react";


interface InputPropTypes{
    width?:string;
    height?:string;
    themeToggler?:boolean;
    wave?:{
        amplitude:number;
        cycles:number;
        numOfParticles:number;
        particleSize:number;
        smokeEffect:boolean;
    };
};

let timer = 0;
function Input({width="160px", height="40px", themeToggler=false, wave={amplitude:4, cycles:10, numOfParticles:500, particleSize:0.6, smokeEffect:false}}:InputPropTypes) {
    const canvasRef = useRef<HTMLCanvasElement|null>(null);
    const boxRef = useRef<HTMLDivElement|null>(null);
    const inputRef = useRef<HTMLInputElement|null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isBoxCanvasEqualWidth, setIsBoxCanvasEqualWidth] = useState(false);
    
    function createInputCaret(visualBox:HTMLDivElement, caretPosition:number) {
        const isCaretExist = document.getElementById("caret");        
        if (isCaretExist) {
            visualBox.removeChild(isCaretExist);
            const childNextToCaretPosition = visualBox.children[caretPosition];
            if (childNextToCaretPosition) {
                visualBox.insertBefore(isCaretExist, childNextToCaretPosition);
            }
            else{
                visualBox.appendChild(isCaretExist);
            }
        }
        else{
            const caret = document.createElement("span");
            caret.className = "h-full border border-black dark:border-white animate-pulse";
            caret.id = "caret";
            const childNextToCaretPosition = visualBox.children[caretPosition];
            if (childNextToCaretPosition) {
                visualBox.insertBefore(caret, childNextToCaretPosition);
            }
            else{
                visualBox.appendChild(caret);
            }
        }
    }

    const createDust = () => {
        let particles:{size:number; x:number; y:number; velX:number; velY:number; acc:number; opacity:number; del:number; potential:number;}[] = [];
        const canvas = canvasRef.current;
        const box = boxRef.current;
        const input = inputRef.current
        if (!canvas) return;
        if (!box) return;
        if (!input) return;
        
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const rect = box.getBoundingClientRect();
        const inputRect = input.getBoundingClientRect();

        canvas.width = isBoxCanvasEqualWidth?rect.width:inputRect.width;
        canvas.height = inputRect.height;

        const {amplitude, cycles, numOfParticles, particleSize, smokeEffect} = wave;

        for (let index = 0; index < numOfParticles; index++) {
            const wave = Math.sin((index/numOfParticles) * Math.PI * cycles) * amplitude;
            particles.push({
                potential:1,
                opacity:1,
                del:1-(index/numOfParticles),
                x:(index/numOfParticles)*(rect.width),
                y:rect.height/2,
                size:particleSize,
                velX:Math.abs((Math.random()-0.5)*1.5),
                velY:(Math.random()-wave)*0.15,
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
                
                ctx.fillStyle = themeToggler?`rgba(255, 255, 255, ${1-Math.abs(p.opacity)})`:`rgba(0, 0, 0, ${1-Math.abs(p.opacity)})`;
                ctx.beginPath();
                ctx.arc(
                    p.x,
                    p.y,
                    (smokeEffect?Math.abs(p.size*p.opacity*30):0.6),
                    0, Math.PI*2
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
                setIsLoading(false);
            }
        }

        animateParticles();
    };

    function changeInputHandler(e:ChangeEvent<HTMLInputElement>){
        const boxElem = boxRef.current;
        const inputElem = inputRef.current;

        if (!boxElem) return;
        if (!inputElem) return;
        
        const inputEvent = (e.nativeEvent as InputEvent);
        
        const data = inputEvent.data;
        const type = inputEvent.inputType;

        
        
        if (boxElem.getBoundingClientRect().width >= inputElem.getBoundingClientRect().width) {
            setIsBoxCanvasEqualWidth(true);
        }
        else{
            setIsBoxCanvasEqualWidth(false);
        }
        
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
        

        if (key === "Enter") {
            setIsLoading(true);
            createDust();
            caret.remove();
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
        else if (key === "Tab") {
            boxElem.removeChild(caret);         
        }
        else if (key === " ") {
            const spanElem = document.createElement("span");
            spanElem.textContent = " ";
            spanElem.className = "w-1 inline-block";
            boxElem.insertBefore(spanElem, document.getElementById("caret"));       
        }
        else if(key.length === 1){
            const spanElem = document.createElement("span");
            spanElem.textContent = key;
            boxElem.insertBefore(spanElem, document.getElementById("caret"));
        }        
        else{
            console.log("not printable key");
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
    

    function clickInputHandler(e:MouseEvent<HTMLInputElement>){
        const caretPosition = e.currentTarget.selectionStart;
        clearTimeout(timer);
        if (caretPosition){
            createInputCaret(boxRef.current as HTMLDivElement, caretPosition);
        }
        else{
            createInputCaret(boxRef.current as HTMLDivElement, 0);
        }
    };
    function focusInputHandler(){
        timer = setTimeout(() => {
            createInputCaret(boxRef.current as HTMLDivElement, boxRef.current?.children.length||0);
        }, 600);
    };
    function blurInputHandler(){
        const caret = document.getElementById("caret");
        caret?.remove();
    };

    
    return(
        <div className="border border-gray-800 w-max flex text-gray-600 dark:border-gray-700 dark:text-gray-100 rounded-sm overflow-hidden pl-1">
            <div className="relative"
                style={{
                    width, height
                }}
            >
                <canvas ref={canvasRef} className={`absolute top-0 ${isBoxCanvasEqualWidth?"right-0":"left-0"}`}></canvas>
                <div ref={boxRef} className={`absolute top-0 ${isBoxCanvasEqualWidth?"right-0":"left-0"} h-full content-center text-lg`}></div>


                <input ref={inputRef} type="text" placeholder="User Name"
                    className="absolute top-0 left-0 h-full w-full text-lg opacity-0"
                    onChange={changeInputHandler}
                    onKeyDown={keyboardEventHandler}
                    onFocus={focusInputHandler}
                    onClick={clickInputHandler}
                    onBlur={blurInputHandler}
                />

            </div>
            <button className="relative p-2 bg-gray-800 text-gray-600 hover:text-gray-400 cursor-pointer transition duration-300"
                onClick={() => {
                    if (inputRef.current?.value) {
                        setIsLoading(true);
                        createDust();
                    }
                }}
            >
                <div className="absolute top-0 left-0 inset-0 text-center content-center text-white blur-sm">O</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className={`size-4 ${isLoading&&"animate-pulse"}`}
                >
                            <path className="animate-spin origin-center text-gray-200" strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                                style={{
                                    opacity:isLoading?1:0,
                                    transition:"0.5s ease-in-out"
                                }}
                            />
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                style={{
                                    opacity:isLoading?0:1,
                                    transition:"0.5s ease-in-out"
                                }}
                            />
                    
                </svg>
            </button>
        </div>
    )
};

export default Input;