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
    github:"www.janedoe.github.com",
    linkedin:"www.janedoe.linkedin.com",
  });
  return (
      <div className="h-screen flex flex-col bg-black">
        <Header/>
        <div className="flex flex-1 overflow-hidden">
        <Sidebar generalinfo={generalinfo} setgeneralinfo={setgeneralinfo} />
        <Preview generalinfo={generalinfo}/>
        </div>
        <Footer/>
        </div>
  )
}
export default App 