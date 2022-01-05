import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col space-y-6 bg-gray-900 min-h-screen">
      <Header />
      <hr className="border-gray-700" />
      <Skills/>
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
