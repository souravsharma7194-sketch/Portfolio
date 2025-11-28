import { motion } from "framer-motion";

export default function Home(){




return(

<section id="home" className="min-h-screen w-full flex flex-col justify-center items-center text-center gap-20">

<h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-blue-700">
    <div>
    <motion.div className="inline-block will-change-transform mb-5"
animate = {{
y: [0,-8,0]
}}
transition={{
duration: 2,
ease: "easeInOut",
repeat: Infinity,
repeatType: "loop",

}}


>Hi, I am</motion.div> </div> Sourav Sharma</h1>
<p className=" text-xl ">Frontend Developer and Programmer</p>

<button onClick= {()=> document.getElementById("projects")?.scrollIntoView({ behavior:"smooth"})
} className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
    View Projects
</button>


</section>

);
}