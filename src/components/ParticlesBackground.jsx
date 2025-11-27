import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground(){


const particlesInit = async (main) => {
 await loadFull(main);
};

const particlesLoaded = (container) => {

};

return(


<Particles
id="tsparticles"
init={particlesInit}
loaded={particlesLoaded}
options={{
       fullScreen: {enable:true,zIndex: -1},

background: {

color: {

    value: "#0f2027",
},
},
fpsLimit:60,
interactivity:{
events:{
onHover: {enable:false,mode:"repulse"},
onClick: {enable:false},
resize:true
}
},

particles:{

color:{value: "#ffffff"},
links: {
    enable:false,
},


move:{

direction:"none",
enable: true,
outModes:"out",
random:true,
speed:0.3,
straight:false,

},

number:{
density:{enable:true,area: 800},
value: 80,
},


opacity:{
    value: 0.7,
},

shape:{type:"circle"},
size:{value: { min: 1, max:  3} },

},

  detectRetina: true,  


}}

/>
);

}