import { useState} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import Gallery from "./pages/Gallery";

function App() {



  return (
    <div className="w-full h-screen  bg-neutral-300  ">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/gallery" element={<Gallery/>}> </Route>
        </Routes>
      </Router>
    </div>
    
  )
}

export default App
