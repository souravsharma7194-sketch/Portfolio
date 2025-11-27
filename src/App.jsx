import { useEffect, useRef } from "react";
import Customcursor from "./components/Customcursor";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Lenis from "@studio-freight/lenis";
import ParticlesBackground from "./components/ParticlesBackground";

export default function App(){


const lenisRef = useRef(null);
const rafRef = useRef(null);


useEffect(() => {
  lenisRef.current = new Lenis({
duration: 1.2,
smooth: true,

  });

function raf(time){


lenisRef.current.raf(time);

rafRef.current = requestAnimationFrame(raf);
}


rafRef.current = requestAnimationFrame(raf);


  return () => {
    if(rafRef.current) cancelAnimationFrame(rafRef.current);
    if(lenisRef.current) lenisRef.current.destroy();
lenisRef.current = null;



  }
},[]);



return (

<>
<ParticlesBackground/>
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