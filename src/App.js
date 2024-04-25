import Navbar from "./components/navbar/navbar";
import Intro  from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Team from "./components/team/team";
import Contact  from "./components/contactus/contactus";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Team/>
      <Contact />
      <Footer />
    
    </div>
  );
}

export default App;
