import Sidebar from "./components/Sidebar.jsx"
import Header from "./components/Header.jsx"
import './index.css'
import Preview from "./components/Preview.jsx"
import Footer from "./components/Footer.jsx"
import {useState} from "react";
function App() {
  let [generalinfo,setgeneralinfo]=useState({
    name:"Jane Doe",
    email:"janedoe@gmail.com",
    phone:"9876543210",
    github:"www.github.com/janedoe",
    linkedin:"www.linkedin.com/janedoe",
  });
  let [educationinfo,seteducationinfo]=useState({
    collegename:"MIT",
    collegeyear:"2023-27",
    branch:"Bachelor of Engineering - BE, Computer Science Engineering ",
    schoolname:"DAV School",
    schoolyear:"2020-22",
    tenth:"X-93%",
    twelth:"XII-96%",
  });
  return (
      <div className="h-screen flex flex-col bg-black">
        <Header/>
        <div className="flex flex-1 overflow-hidden">
        <Sidebar generalinfo={generalinfo} setgeneralinfo={setgeneralinfo} educationinfo={educationinfo} seteducationinfo={seteducationinfo} />
        <Preview generalinfo={generalinfo} educationinfo={educationinfo}/>
        </div>
        <Footer/>
        </div>
  )
}
export default App 