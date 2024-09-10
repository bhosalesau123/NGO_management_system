import Home from "./components/Home";
import { Routes, Route,  } from "react-router-dom";
import Ngoregister from "./pages/Ngoregister"
import About from "./components/About"
import Footer from "./components/Footer1"
import Login from "./pages/Login1"
import Register from "./pages/Register";
import Layout from "./pages/Layout";

// react-dom.development.js:28478 Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

// Check the render method of Layout.
//     at createFiberFromTypeAndProps (react-dom.development.js:28478:1)
//     at createFiberFromElement (react-dom.development.js:28504:1)
//     at updateElement (react-dom.development.js:13297:1)
//     at updateSlot (react-dom.development.js:13407:1)
//     at reconcileChildrenArray (react-dom.development.js:13585:1)
//     at reconcileChildFibers (react-dom.development.js:14057:1)
//     at reconcileChildren (react-dom.development.js:19193:1)
//     at updateHostComponent (react-dom.development.js:19953:1)
//     at beginWork (react-dom.development.js:21657:1)
//     at HTMLUnknownElement.callC

function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/ngo-register"  element={<Ngoregister/>} />
          <Route path="/contact"  element={<Footer/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/register"  element={<Register/>} />
      
        </Routes>
  
  
     
    </div>
  );
}

export default App;
