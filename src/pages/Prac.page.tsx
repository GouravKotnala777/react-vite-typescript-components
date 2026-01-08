import { useEffect, useState, type KeyboardEvent } from "react";
import "../index.css";
import Input from "../components/Input.component";

const SENTANCE = "The quick brown fox jumps over the lazy dog.";

function Prac() {
    //const [typedSentance, setTypedSentance] = useState<string[]>([]);
    const [typedSentance, setTypedSentance] = useState<string>("");
    const [timer, setTimer] = useState<number>(0);
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    function func(e:KeyboardEvent<HTMLInputElement>) {
        const key = e.key;
      
        console.log(key);
        
        if (key.length === 1 && key.trim() !== ""){
            setIsStarted(true);
        };
    };

    function resetHandler() {
        //e.currentTarget.value = "";
        setIsStarted(false);
        setTypedSentance("");
    };

    useEffect(() => {
        if (isStarted) {
            const timerID = setInterval(() => {
                setTimer(timer+1);
            }, 1);
    
            return() => clearInterval(timerID);
        }
    }, []);

    useEffect(() => {
        if (SENTANCE === typedSentance) {
            setIsCompleted(true);
        }
    }, [typedSentance]);

    return(
        <section className="max-w-3xl mx-auto min-h-screen mt-30 px-4">
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-10">
                <h1 className="p-2">
                    {
                        SENTANCE.split("").map((c, index) => (
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
                    <Input fontSize="text-md" fontWeight="font-semibold" placeHolder="Start typing here..." setData={setTypedSentance} onKeyDown={func} onBlur={resetHandler} manuallyStartAnimation={isCompleted} />
                </div>
                <div className="text-orange-300 text-xs font-semibold flex justify-between items-center mt-4">
                    <div className="w-25 flex justify-between items-center">
                        <span className="bg-gray-500 dark:bg-gray-700 px-3 py-1 rounded-xs">TAB</span>
                        <span>-</span>
                        <span>restart</span>
                    </div>
                    <div className="w-10 tracking-wider text-right">{timer/100}0</div>
                </div>
            </div>

            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-10">
                <h1 className="p-2">
                    {
                        SENTANCE.split("").map((c, index) => (
                            <span className={`${
                                typedSentance[index]?
                                c === typedSentance[index]?"text-gray-600 dark:text-gray-50":"text-red-600 dark:text-red-500"
                                :
                                "text-orange-300 dark:text-orange-200"
                            } font-semibold`}>{c}</span>
                        ))
                    }
                </h1>
                <input placeholder="Start typing here..."
                    className="mt-1 py-5 px-2 rounded-md w-full outline outline-orange-300 [box-shadow:0px_0px_5px_0.1px_rgba(255,184,105,0.7)_inset] dark:[box-shadow:0px_0px_5px_0.1px_rgba(255,214,167,1)_inset] text-gray-600 dark:text-gray-100 dark:outline-orange-200 font-semibold placeholder:text-gray-300 dark:placeholder:text-gray-500"
                    onKeyDown={func}
                    onBlur={resetHandler}
                />
                <div className="text-orange-300 text-xs font-semibold flex justify-between items-center mt-4">
                    <div className="w-25 flex justify-between items-center">
                        <span className="bg-gray-500 dark:bg-gray-700 px-3 py-1 rounded-xs">TAB</span>
                        <span>-</span>
                        <span>restart</span>
                    </div>
                    <div className="w-10 tracking-wider text-right">{timer/100}0</div>
                </div>
            </div>

        </section>
    )
}

export default Prac;