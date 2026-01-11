import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.page.tsx';
import Prac from "./pages/Prac.page.tsx";
import Header from "./components/Header.component.tsx";
import { useEffect, useState } from "react";
import Components from "./pages/Components.page.tsx";

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


    //  DIFFERENCE
    //function func1 () {
    //    const name:string|null = import.meta.env.aaaaa;

    //    if (!name) return;

    //    function func2 () {
    //        const charArr = name.split("");
    //        console.log(charArr);
    //    }
    //}
    //const func3 = () => {
    //    const name:string|null = import.meta.env.aaaaa;

    //    if (!name) return;

    //    const func4 = () => {
    //        const charArr = name.split("");
    //        console.log(charArr);
    //    }
    //}


  return (
    <BrowserRouter>
      <Header isHeaderVisible={isHeaderVisible} />
      <div className="gradient_background fixed inset-0 -z-2 overflow-hidden">
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prac" element={<Prac />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
