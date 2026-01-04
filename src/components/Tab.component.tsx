import { useState, type ReactElement, type ReactNode } from "react";


interface TabPropTypes{
    panels:{
        tabIconPath?:ReactElement;
        tabName:string;
        content:ReactNode;
    }[]
}

function Tab({panels}:TabPropTypes) {
    const [activeTab, setActiveTab] = useState<number>(0);
    return(
        <div className="rounded-md overflow-hidden">
            <div className="bg-gray-200 dark:bg-gray-800 flex justify-between px-2 py-2">
                <div className="flex gap-3">
                    {
                        panels.map(({tabIconPath, tabName}, index) => (
                            <button key={index}
                                className={` ${index === activeTab?"bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-300":"bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-500"} flex justify-center items-center px-3 py-2 rounded-sm cursor-pointer`}
                                onClick={() => setActiveTab(index)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                    {tabIconPath}
                                </svg>
                                <span className="text-sm">{tabName}</span>
                            </button>
                        ))
                    }
                </div>
                <div className="">
                    {/*<span>text copied</span>*/}
                    <button className="text-sm text-gray-700 dark:text-gray-200 px-3 py-2 rounded-sm cursor-pointer">Copy</button>
                </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900">
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