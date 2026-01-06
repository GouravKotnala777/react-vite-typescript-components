import { useState, type ReactElement, type ReactNode } from "react";
import useTheme from "../hooks/useTheme";


interface TabPropTypes{
    panels:{
        tabIconPath?:ReactElement;
        tabName:string;
        content:ReactNode;
    }[]
}

function Tab({panels}:TabPropTypes) {
    const [activeTab, setActiveTab] = useState<number>(0);
    const {theme} = useTheme();
    return(
        <div className={`bg-white dark:bg-gray-700 rounded-md overflow-hidden ${theme === "dark" ?"[box-shadow:0px_0px_7px_1px_white_inset]":"[box-shadow:0px_0px_7px_1px_black_inset]"} p-3`}>
            <div className="bg-gray-200 dark:bg-gray-800 flex justify-between pb-2 pt-2 pl-2 rounded-tl-md rounded-tr-md">
                <div className="flex gap-3">
                    {
                        panels.map(({tabIconPath, tabName}, index) => (
                            <button key={index}
                                className={` ${index === activeTab?"bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-300":"bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-500"} flex justify-center items-center px-3 py-2 rounded-sm cursor-pointer`}
                                onClick={() => setActiveTab(index)}
                            >
                                {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">*/}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-4">
                                    {tabIconPath}
                                </svg>
                                <span className="text-sm">{tabName}</span>
                            </button>
                        ))
                    }
                </div>
                <div className="">
                    {/*<span>text copied</span>*/}
                    <button className="text-sm text-gray-700 dark:text-gray-200 px-3 py-2 rounded-sm cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                        </svg>

                    </button>
                </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-bl-md rounded-br-md">
                {
                    panels.map(({content}, index) => (
                        <>
                            {
                                index === activeTab && content
                            }
                        </>
                    ))
                }
            </div>

        </div>
    )
};

export default Tab;