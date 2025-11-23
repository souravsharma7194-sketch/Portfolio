export default function Navbar(){
    
    
    
    return(


<nav className="w-full fixed top-0 left-0 bg-black text-white shadow-lg z-50">


<div className="max-w-7xl mx-auto flex items-center justify-around py-4">

<a href="#home" className="hover:text-gray-400 transition duration-300">Home</a>
<a href="#about" className="hover:text-gray-400 transition duration-300" >About</a>
<a href="#skills" className="hover:text-gray-400 transition duration-300">Skills</a>
<a href="#projects" onClick={()=> document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})} className="hover:text-gray-400 transition duration-300">Projects</a>
<a href="#contact" className="hover:text-gray-400 transition duration-300">Contact</a>


</div>


</nav>








)}