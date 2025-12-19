import './slider.css';
import Navbar from '../components/Navbar.component';


const NAVLINKS1 = [
	{icon:"A", text:"Asdf"},
	{icon:"S", text:"Asdfg"},
	{icon:"D", text:"Asdfgh"},
	{icon:"F", text:"Asdfghj"},
	{icon:"G", text:"Asdfghjk"}
];


function Home() {

	return (
		<section className="bg-gray-50 h-screen text-gray-200">		
			<h1 className="text-center text-4xl text-neutral-400">This is my Component</h1>

			<div className='mt-40'>
				<Navbar navlinks={NAVLINKS1} left="50%" translateX="-50%" padding="6px 12px" previewGap="-68px" borderRadius="8px" />
			</div>


		</section>
	)
};


export default Home