import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="pt-[80px] space-y-6 bg-gray-900 w-full min-h-screen">
        <Header/>
        <Skills />
        <Education />
        <Experience />
        <Projects />
    </div>
  );
}

export default App;
