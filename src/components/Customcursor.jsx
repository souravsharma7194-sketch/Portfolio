import { useEffect, useState } from "react"

export default function Customcursor(){

const [position, setPosition] = useState({x:0, y:0});
const [ringPosition, setRingPosition] = useState({x:0,y:0});


useEffect(()=>{
const handleMouseMove = (e) => {
setPosition({x:e.clientX, y:e.clientY});

};

window.addEventListener("mousemove",handleMouseMove);

return () => window.removeEventListener("mousemove",handleMouseMove);


},[])


useEffect(() => {
  let animationFrame;
  const animate = () => {
    setRingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
    }))

    animationFrame = requestAnimationFrame(animate);
  };
  animate();


  return () => cancelAnimationFrame(animationFrame);
}, [position]);




return (
<>
<div className="fixed w-3 h-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999]"
style={{left: `${ringPosition.x}px`, top: `${ringPosition.y}px`}}>

</div>

<div className="fixed w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999]"
style = {{ left: `${position.x}px`, top: `${position.y}px`}} >

</div>

</>

)

}