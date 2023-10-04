import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from "./pages/About";
import Service from "./pages/Service";
import Artical from "./pages/Artical";


function App() {
  return (
    <div className="w-full xl:px-[120px] px-[20px] py-[40px] bg-[#ffffff] ">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/lien-he" element={ <About/> } />
        <Route path="/thiet-ke" element={ <Service/> } />
        <Route path="/blog" element={ <Artical/> } />
      </Routes>
     
    </div>
  );
}

export default App;
