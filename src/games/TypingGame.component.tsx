import { useEffect, useState, type KeyboardEvent } from "react";
import Input from "../components/Input.component";





const SENTANCE:string[] = [
    "The quick brown fox jumps over the lazy dog.",
    "The quick brown fox jumps over the lazy dog while the silent forest watches calmly.",
    "The quick brown fox jumps over the lazy dog while the silent forest watches calmly as birds scatter and leaves rustle under the moonlight."
];
const CAT_IMAGES = ["typing-cat.png", "typing-cat-left.png", "typing-cat-right.png"];

function returnNumber0To2(num:number) {
    if (num === 0) return 0;
    return (num%2)+1;
};
function findLevel(gameLevel:number) {
    return gameLevel === 1?
        "LEVEL 1"
        :
        gameLevel === 2?
            "LEVEL 2"
            :
            "FINAL LEVEL";
};
let typingCateAnimationTimer = 0;


function TypingGame() {
    const [typedSentance, setTypedSentance] = useState<string>("");
    const [timer, setTimer] = useState<number>(0);
    const [num, setNum] = useState<number>(0);
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [gameLevel, setGameLeve] = useState<number>(1);

    function animateTypingCat(input:string) {
        if(input === SENTANCE[typedSentance.length]){
            clearTimeout(typingCateAnimationTimer);
            setNum(prev => prev+1);
            typingCateAnimationTimer = setTimeout(() => {                    
                setNum(0);
            }, 300);
        }
    };

    function func(e:KeyboardEvent<HTMLInputElement>) {
        const key = e.key;
        
        if (key.length === 1 && key.trim() !== ""){
            setIsStarted(true);
            animateTypingCat(key);
        };
    };

    function func2(){
        setIsFocused(true);
    };

    function resetHandler() {
        //e.currentTarget.value = "";
        setIsStarted(false);
        setTypedSentance("");
        setIsFocused(false);
        setIsCompleted(false);
    };

    useEffect(() => {
        if (isStarted) {

            const timerID = setInterval(() => {
                setTimer((prev) => prev+1);
            }, 10);
    
            return() => clearInterval(timerID);
        }
    }, [isStarted]);

    useEffect(() => {
        if (SENTANCE[gameLevel-1] === typedSentance) {
            setIsCompleted(true);
            if (gameLevel === 3) {
                setGameLeve(1);
            }
            else{
                setGameLeve(gameLevel+1);
            }
        }
    }, [typedSentance]);

    
    return(
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-5">
            <h1 className="p-2 pb-10 xl:border-violet-500 lg:border-green-500 md:border-blue-500 sm:border-yellow-500">
                {
                    SENTANCE[gameLevel-1].split("").map((c, index) => (
                        <span className={`${
                            typedSentance[index]?
                                c === typedSentance[index]?
                                    "text-gray-600 dark:text-gray-50"
                                    :
                                    "text-red-600 dark:text-red-500"
                                :
                                "text-orange-300 dark:text-orange-200"
                        } font-semibold`}>{c}</span>
                    ))
                }
            </h1>
            <div className="">
                <div className="">
                    <div className="relative mt-5">
                        <img src={CAT_IMAGES[returnNumber0To2(num)]} alt={CAT_IMAGES[returnNumber0To2(num)]} className="w-30 absolute right-2 md:right-20 sm:right-2 bottom-[-19px]" />
                    </div>
                    <Input fontSize="text-md" fontWeight="font-semibold" placeHolder="Start typing here..." setData={setTypedSentance} onKeyDown={func} onFocus={func2} onBlur={resetHandler} manuallyStartAnimation={isCompleted} />
                </div>
            </div>
            <div className={`text-orange-300 dark:text-orange-200 text-xs font-semibold flex justify-between items-center mt-4 ${isFocused?"opacity-100 blur-0":"opacity-0 blur-xs"} transition-all ease-in-out duration-300`}>
                <div className="w-25 flex justify-between items-center">
                    <span className="bg-orange-50 dark:bg-gray-700 font-bold px-3 py-1 rounded-xs">TAB</span>
                    <span>-</span>
                    <span>restart</span>
                </div>
                <div className="font-bold">
                    {findLevel(gameLevel)}
                </div>
                <div className="w-10 font-bold text-left tracking-widest">{timer/100}</div>
            </div>
        </div>
    )
};

export default TypingGame;