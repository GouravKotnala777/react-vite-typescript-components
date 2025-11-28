import { useEffect, useRef, useState, type ReactNode } from "react"
import './slider.css';
import AnimatedText from "../components/AnimatedText.component";




function Home() {

  return (
      <section>
          <h1 className="text-center text-4xl text-neutral-400">This is my Component</h1>

          <AnimatedText lines={["gourav", "naruto", "sasuke"]} />
          <AnimatedText lines={["is", "is", "is"]} />
          <AnimatedText lines={["good", "naive", "smart"]} />

          {/*<SliderDiagonalWithBtn
              items={[
                  <img src="vite.svg" alt="vite.svg1" className="bg-neutral-600 w-full h-full rounded-2xl" />,
                  <img src="vite.svg" alt="vite.svg2" className="bg-neutral-600 w-full h-full rounded-2xl" />,
                  <img src="vite.svg" alt="vite.svg3" className="bg-neutral-600 w-full h-full rounded-2xl" />,
                  <img src="vite.svg" alt="vite.svg4" className="bg-neutral-600 w-full h-full rounded-2xl" />,
              ]}
              options={{
                  height:"240px", width:"360px",
              }}
          />*/}
          {/*<div className="w-[400px] h-[350px] ml-40 mt-30">
              <Slider style="h-full" btns={{inset:"30", size:"40"}} />
          </div>*/}
      </section>
  )
}

export default Home








function CyclicSlider2() {
  const totalSlides = 4;
  const [index, setIndex] = useState(1);           // Current position in extended track
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const slides = [
    { id: 1, title: "Slide 1", color: "#ef4444" },
    { id: 2, title: "2", color: "#3b82f6" },
    { id: 3, title: "Slide 3", color: "#10b981" },
    { id: 4, title: "Slide 4", color: "#8b5cf6" },
  ];

  // Extended: [last, slide1, slide2, slide3, slide4, first]
  const extendedSlides = [
    slides[totalSlides - 1],
    ...slides,
    slides[0],
  ];

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  // Handle seamless reset when we reach the cloned first slide
  useEffect(() => {
    if (index === totalSlides + 1) {
      // Step 1: Let the transition happen to the cloned first slide
      // Step 2: After transition ends, disable transition and jump back
      const timer = setTimeout(() => {
        setIsTransitionEnabled(false);
        setIndex(1);

        // Step 3: Force reflow + re-enable transition on next tick
        if (trackRef.current) {
          // This forces the browser to recalculate styles
          void trackRef.current.offsetHeight;
        }

        requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
        });
      }, 600); // Must match or be slightly longer than CSS transition duration

      return () => clearTimeout(timer);
    }
  }, [index, totalSlides]);

  // Initialize at first real slide
  useEffect(() => {
    setIndex(1);
  }, []);

  const currentRealIndex = index === 0 ? totalSlides : index > totalSlides ? 1 : index;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", fontSize: "28px", marginBottom: "30px" }}>
        Smooth Cyclic Slider (100% Fixed)
      </h2>

      <div style={{ position: "relative", overflow: "hidden", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
        <div
          ref={trackRef}
          style={{
            display: "flex",
            transform: `translateX(-${index * 100}%)`,
            transition: isTransitionEnabled ? "transform 0.6s ease-in-out" : "none",
          }}
        >
          {extendedSlides.map((slide, i) => (
            <div
              key={i}
              style={{
                minWidth: "100%",
                height: "400px",
                backgroundColor: slide.color,
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "64px",
                fontWeight: "bold",
              }}
            >
              <div>{slide.title}</div>
              <div style={{ fontSize: "32px", marginTop: "20px" }}>Item {slide.id}</div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.95)",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="3">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Dots */}
        <div style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "12px" }}>
          {slides.map((_, i) => (
            <div
              key={i}
              style={{
                width: currentRealIndex === i + 1 ? "32px" : "10px",
                height: "10px",
                borderRadius: "5px",
                backgroundColor: currentRealIndex === i + 1 ? "white" : "rgba(255,255,255,0.6)",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px", fontSize: "18px", color: "#555" }}>
        Current: {currentRealIndex} / {totalSlides}
      </div>
    </div>
  );
}