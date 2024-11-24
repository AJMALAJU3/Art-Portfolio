import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Gallery from "./pages/Gallery";
import About from "./pages/About"; // Assuming this exists
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div
      className="w-full h-screen bg-neutral-300 overflow-y-auto relative"
      style={{ scrollbarWidth: 'none' }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <MenuBar />
      </Router>
    </div>
  );
}

export default App;
