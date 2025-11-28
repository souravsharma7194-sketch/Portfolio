import { motion } from "framer-motion";




export default function Skills(){

const skills = [

"HTML",
"CSS",
"JavaScript",
"ReactJS",
"Tailwind CSS", 
    "Git & GitHub", 
    "Redux", 
    "Responsive Design"
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
className="bg-white shadow-md rounded-lg px-6 py-4 text-lg font-semibold hover:shadow-xl hover:scale-105 transition duration-300"

>{skill}</motion.div>
))}


</div>







</section>




)
}