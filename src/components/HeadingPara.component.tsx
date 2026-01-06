import { NavLink } from "react-router-dom";


function HeadingPara({heading, para, url}:{heading:string; para:string; url:string;}) {

    return(
        <>
            <h2 className="text-gray-700 dark:text-gray-200 text-2xl font-semibold mt-15">{heading}</h2>
            <p className="text-gray-400 dark:text-gray-400 tracking-normal leading-7 mb-4">
                {para}
                <NavLink to={`/components${url}`} className="inline-flex align-middle border border-white ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </NavLink>
            </p>
        </>
    )    
};

export default HeadingPara;