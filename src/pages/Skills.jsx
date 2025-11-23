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

<section id="skills" className="min-h-screen w-full bg-gray-100 flex flex-col justify-center items-center text-center px-6">

<h2 className="text-4xl font-bold mb-6 tracking-wide">Skills</h2>
<p className="text-lg max-w-2xl leading-relaxed mb-8"> I specialize in building responsive, user-friendly web applications using modern
        frontend technologies. Here are the technologies I work with:</p>


<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">


{skills.map( (skill,index)=> (

<div key={index}
className="bg-white shadow-md rounded-lg px-6 py-4 text-lg font-semibold hover:shadow-xl hover:scale-105 transition duration-300"

>{skill}</div>
))}


</div>







</section>




)
}