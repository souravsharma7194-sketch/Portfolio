import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";




export default function Skills(){

const skills = [

  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git & GitHub", icon: <FaGitAlt /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Responsive Design", icon: <FaReact /> }




];




    return (

<section id="skills" className="min-h-screen w-full flex flex-col justify-center items-center text-center px-6">

<h2 className="text-4xl font-bold mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-blue-700">What I Know</h2>
<p className="text-lg max-w-2xl leading-relaxed mb-8"> I specialize in building responsive, user-friendly web applications using modern
        frontend technologies. Here are the technologies I work with:</p>


<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">


{skills.map( (skill,index)=> (

<motion.div key={index}
initial = {{opacity: 0, scale: 0.8}}
whileInView={{opacity: 1, scale: 1 }}
transition={{duration: 0.4, delay: index * 0.1, ease:"easeOut" }}
viewport={{once: true , amount: 0.3}}
whileHover={{rotateX: 15, rotateY: -10, scale:1.05 , transition:{duration: 0.15, ease:"easeOut"}
}}
style = {{transformStyle:"preserve-3d" , perspective: 1000}}


className="flex flex-col items-center justify-center 
             bg-[#1c1c2b] rounded-xl px-6 py-6 text-lg font-semibold 
             shadow-lg border border-gray-700 
             hover:border-pink-600 hover:bg-gradient-to-br hover:from-pink-700 hover:to-blue-700 
             hover:shadow-[0_0_15px_rgba(255,0,150,0.7)] hover:scale-110 
             transition-all duration-300"

>
    <div className="text-5xl mb-3">{skill.icon}</div>

<p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">{skill.name}</p>
</motion.div>

))}


</div>







</section>




)
}