import Home from "../src/components/Home/Home";
import About from "../src/components/About/About";
import Navbar from "../src/components/Navbar/Navbar";
import Highlight from "../src/components/Highlights/Highlights";
import Initiatives from "../src/components/Initiatives/Initiatives";
import Offering from "../src/components/Offering/Offering";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Offering />
      <Highlight />
      <Initiatives />
    </div>
  );
}

export default App;
