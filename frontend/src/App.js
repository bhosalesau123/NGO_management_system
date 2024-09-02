import Home from "./components/Home";
import { Routes, Route,  } from "react-router-dom";
import Vision from "./components/Vision";
import Ngo from "./components/Ngo"
import About from "./components/About"
import Footer from "./components/Footer1"
import Login from "./components/Login"




function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/ngo"  element={<Ngo/>} />
          <Route path="/contact"  element={<Footer/>} />
          <Route path="/login"  element={<Login/>} />
        </Routes>
      <Vision/>
      <Ngo/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
