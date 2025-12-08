import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.page.tsx';
import Prac from "./pages/Prac.page.tsx";
import Header from "./components/Header.component.tsx";
import { useEffect, useState } from "react";


const ORBS = [
  {id:"orb1", opacity:1},
  {id:"orb2", opacity:1},
  {id:"orb3", opacity:1},
  {id:"orb4", opacity:0.7},
  {id:"orb5", opacity:1},
]


function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [lastScrollY, setlastScrollY] = useState<number>(0);

  function headerShowHideHandler() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsHeaderVisible(false);
    }else{
      setIsHeaderVisible(true);
    }
    
    setlastScrollY(currentScrollY);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", headerShowHideHandler);

    return () => window.removeEventListener("scroll", headerShowHideHandler);
  }, [lastScrollY]);

  return (
    <BrowserRouter>
      <Header isHeaderVisible={isHeaderVisible} />
      <div className="gradient_background fixed inset-0 -z-2 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="sourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                    <feBlend in="sourceGraphic" in2="goo" />
                </filter>
            </defs>
        </svg>
        <div className="gradients_container w-full h-full">
          {
            ORBS.map(({id, opacity}) => (
              <div key={id} className={`${id} ${opacity} absolute`}></div>
            ))
          }
            {/*<div ref={interBubbleRef} id="interactive" className="interactive"></div>*/}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prac" element={<Prac />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
