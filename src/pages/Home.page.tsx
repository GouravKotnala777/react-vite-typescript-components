import './slider.css';
import "../index.css";
import TextPanel, { CssSVG, ExpressSVG, GithubSVG, GlobeSVG, HtmlSVG, JavascriptSVG, LinkedInSVG, MongodbSVG, NodeSVG, ReactSVG, TypescriptSVG, VercelSVG } from "../components/TextPanel.component";
import SliderDiagonalWithBtn from "../components/SliderDiagonalWithBtn.component";
import { NavLink } from "react-router-dom";

const PROJECTS = [
    {url:"/ecommerce.jpg", name:"Ecommerce Web App", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.", hostURL:"https://ecommerce-frontend-1.vercel.app"},
    {url:"/uber_clone.jpg", name:"Uber Clone", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.", hostURL:"https://ecommerce-frontend-1.vercel.app"},
    {url:"/portfolio1.jpg", name:"Portfolio", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.", hostURL:"https://ecommerce-frontend-1.vercel.app"},
    {url:"/acremate.jpg", name:"Acremate", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.", hostURL:"https://ecommerce-frontend-1.vercel.app"}
];


function Home() {
	//const interBubbleRef = useRef<HTMLDivElement|null>(null);
    //const [cur, setCur] = useState<{curX:number; curY:number;}>({curX:0, curY:0});
    //const [tg, setTg] = useState<{tgX:number; tgY:number;}>({tgX:0, tgY:0});

    //function move(){
    //    const interBubble = interBubbleRef.current;        
    //    if (!interBubble) {
    //        return;
    //    }
    //    setCur({
    //        curX:tg.tgX,
    //        curY:tg.tgY
    //    });
    //    interBubble.style.transform = `translate(${Number(cur.curX)}px, ${Number(cur.curY)}px)`;
    //};

    //function mouseMoveHandler(e:globalThis.MouseEvent) {
    //    setTg({tgX:e.clientX, tgY:e.clientY});
    //};

    //useEffect(() => {
    //    //move();
    //}, [tg]);

    //useEffect(() => {
    //    window.addEventListener("mousemove", (mouseMoveHandler));
    //    return() => {window.removeEventListener("mousemove", mouseMoveHandler)}
    //}, []);

	return (
		<section className="max-w-3xl mx-auto min-h-screen mt-30 px-4">		
			<div className="flex flex-col justify-center items-start gap-4">
                <img src="vite.svg" alt="vite.svg" className="w-40" />
                <div className="text-4xl"><span className="text-gray-700 dark:text-gray-100 font-semibold">Hi, I'm Gourav</span><span className="text-gray-500 dark:text-gray-300 font-bold mix-blend-color-dodge"> - A Full Stack web developer.</span></div>
                <p className="flex items-center flex-wrap tracking-normal leading-11 text-gray-600 dark:text-gray-200">I build interactive web apps using <TextPanel svgElement={<ReactSVG />} text="React" />,<TextPanel svgElement={<NodeSVG />} text="Nodejs" />,<TextPanel svgElement={<ExpressSVG />} text="Expresjs" />,<TextPanel svgElement={<MongodbSVG />} text="Mongodb" />and<TextPanel svgElement={<TypescriptSVG />} text="Typescript" />. With a focus on <TextPanel svgElement={<ReactSVG />} text="UI design" /> . Enthusiastic about  <TextPanel svgElement={<JavascriptSVG />} text="Three.js" /> , driven by a keen eye for design.</p>
                <div className="text-sm">
                    <button className="px-3 py-2 text-gray-700 dark:text-gray-100 rounded-lg [box-shadow:0px_0px_4px_0.1px_#00000050_inset] dark:[box-shadow:0px_0px_4px_0.1px_#ffffff50_inset] cursor-pointer">O Resume / CV</button>
                    <button className="px-3 py-2 text-gray-200 dark:text-gray-700 bg-gray-700 dark:bg-gray-200 rounded-lg ml-4 cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 h-0.5 w-[80%] bg-[linear-gradient(90deg,#364153,#e5e7eb,#364153)] dark:bg-[linear-gradient(90deg,#e5e7eb,black,#e5e7eb)]"></div>
                        O Get in touch
                        <div className="absolute left-[35%] -bottom-[70%] h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-500 blur-xs mix-blend-exclusion"></div>
                    </button>
                </div>
                <div className="flex gap-3">
                    <div className="text-gray-500 dark:text-gray-300 size-5"><GlobeSVG /></div>
                    <div className="text-gray-500 dark:text-gray-300 size-5"><LinkedInSVG /></div>
                    <div className="text-gray-500 dark:text-gray-300 size-5"><GithubSVG /></div>
                    <div>Email</div>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mt-10">Experience</h2>
                <p className="tracking-normal leading-7 text-gray-600 dark:text-gray-200">I'm Gourav Kotnala, a passionate MERN stack web developer from Faridabad, Haryana, India. I specialize in building dynamic and responsive applications.</p>
                <h2 className="text-lg font-semibold mt-10 leading-11">Technologies & Tools</h2>
                <div className="leading-10">
                    <TextPanel svgElement={<TypescriptSVG />} text="React" />,<TextPanel svgElement={<NodeSVG />} text="Nodejs" />,<TextPanel svgElement={<MongodbSVG />} text="Mongodb" />,<TextPanel svgElement={<ExpressSVG />} text="Express" />,<TextPanel svgElement={<TypescriptSVG />} text="Typescript" />,<TextPanel svgElement={<GlobeSVG />} text="Socket.io" />,<TextPanel svgElement={<VercelSVG />} text="Vercel" />,<TextPanel svgElement={<GlobeSVG />} text="Redux" />,<TextPanel svgElement={<HtmlSVG />} text="HTML5" />,<TextPanel svgElement={<CssSVG />} text="CSS3" />,<TextPanel svgElement={<JavascriptSVG />} text="Javascript" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mt-10">Projects</h2>
                <p className="tracking-normal leading-7 text-gray-600 dark:text-gray-200">My projects and work across different technologies and domains.</p>
                <SliderDiagonalWithBtn items={
                    PROJECTS.map(({url, name, description, hostURL}) => (
                        <NavLink to={hostURL} className="w-full flex flex-col border dark:border-gray-200 border-gray-600 p-2 rounded-md">
                            <div className="h-[30%]"><img className="h-40 w-full rounded-md" src={url} alt={url} /></div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <div className="text-gray-700 dark:text-gray-100 text-lg font-bold">{name}</div>
                                    <div>O</div>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
                            </div>
                        </NavLink>
                    ))
                } />
            </div>
            <div>
                <h2 className="text-lg font-semibold mt-10">GitHub Activity</h2>
                <div className="mt-5 border border-gray-200 backdrop-blur-lg p-5 rounded-md dark:filter-[invert(1)_hue-rotate(200deg)_contrast(0.8)]">
                    <img className="w-full" src="https://ghchart.rshah.org/gouravkotnala777" alt="GitHub Contribution Chart" />
                    <div className="flex mt-5 justify-end items-center gap-1">
                        <span className="text-xs text-gray-700 dark:text-gray-400">Less</span>
                        <svg id="github-chart" width="10" height="10"><rect width="10" height="10" fill="rgb(175, 255, 190)" rx="2" ry="2" style={{stroke: "rgba(255, 255, 255, 0.04)"}}></rect></svg>
                        <svg id="github-chart" width="10" height="10"><rect width="10" height="10" fill="rgb(151, 255, 106)" rx="2" ry="2" style={{stroke: "rgba(255, 255, 255, 0.04)"}}></rect></svg>
                        <svg id="github-chart" width="10" height="10"><rect width="10" height="10" fill="rgb(111, 255, 9)" rx="2" ry="2" style={{stroke: "rgba(255, 255, 255, 0.04)"}}></rect></svg>
                        <svg id="github-chart" width="10" height="10"><rect width="10" height="10" fill="rgb(94, 255, 0)" rx="2" ry="2" style={{stroke: "rgba(255, 255, 255, 0.04)"}}></rect></svg>
                        <svg id="github-chart" width="10" height="10"><rect width="10" height="10" fill="rgb(52, 195, 0)" rx="2" ry="2" style={{stroke: "rgba(255, 255, 255, 0.04)"}}></rect></svg>
                        <span className="text-xs text-gray-700 dark:text-gray-400">More</span>
                    </div>
                </div>
            </div>



		</section>
	)
};


export default Home