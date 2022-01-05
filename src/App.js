import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useState } from 'react';
import Awards from "./components/Awards";
import Contact from "./components/Contact";


function App() {
	const [toggle, setToggle] = useState(false);

	const toggleHandler = () => {
		setToggle(!toggle);
	}
	return (
		<div>
			<Menu toggle={toggle} setToggle={toggleHandler} />
			<div
				className={`pt-[70px] space-y-10 pb-[40px] bg-gray-900 w-full min-h-screen`}
			>
				<Header toggle={toggle} setToggle={toggleHandler} />
					<Skills />
					<Education />
					<Experience />
					<Projects />
					<Awards/>
					<Contact/>
					<Footer />
			</div>
		</div>
	);
}

export default App;
