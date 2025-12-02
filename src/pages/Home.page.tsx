import './slider.css';
import TextStaggered from '../components/TextStaggered.component';




function Home() {

  return (
      <section>
          <h1 className="text-center text-4xl text-neutral-400">This is my Component</h1>

          {/*<AnimatedText textLines={["gourav", "naruto", "sasuke"]} color="white" duration={2000} />*/}

          {/*<BorderedImage imgURL="https://wallpapercave.com/wp/wp4511397.jpg" borderRadius="20px" thickness="1px" height="180px" width="250px" />*/}

          <div className="mt-30">
            <TextStaggered text="Staggered Text" animationType="seventh" />
          </div>
          {/*<div className="mt-30">
            <TextStaggered animationType="first" />
          </div>
          <div className="mt-30">
            <TextStaggered animationType="second" />
          </div>
          <div className="mt-30">
            <TextStaggered animationType="third" />
          </div>
          <div className="mt-30">
            <TextStaggered animationType="fourth" />
          </div>
          <div className="mt-30">
            <TextStaggered animationType="fifth" />
          </div>
          <div className="mt-30">
            <TextStaggered animationType="sixth" />
          </div>*/}
          {/*<BorderGradientAnimation />*/}

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