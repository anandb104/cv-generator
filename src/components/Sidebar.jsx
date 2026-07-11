import General from"./General.jsx";
import Education from"./Education.jsx";
import Skills from"./Skills.jsx";
import Experience from"./Experience.jsx";
import Coursework from"./Coursework.jsx";
export function Sidebar(){
  return(
    <div className="w-1/3 pt-7 pl-10 overflow-y-auto">
        <General/>
        <Education/>
        <Skills/> 
        <Experience/> 
        <Coursework/> 
    </div>
  )
}
export default Sidebar