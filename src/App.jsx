import Customcursor from "./components/Customcursor";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

export default function App(){

return (

<>
<Customcursor/>
<Navbar/>
<div className="pt-8">
<Home/>
<About/>
<Projects/>
<Skills/>
<Contact/>
</div>
</>



);
}