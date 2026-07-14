import Sidebar from "./components/Sidebar.jsx"
import Header from "./components/Header.jsx"
import './index.css'
import Preview from "./components/Preview.jsx"
import Footer from "./components/Footer.jsx"
import {useEffect, useState} from "react";
function App() {
  let [generalinfo,setgeneralinfo]=useState(()=>{
    let saved=localStorage.getItem("generalinfo");
    if(saved){
      return JSON.parse(saved);
    }
    else{
      return {
    name:"Jane Doe",
    email:"janedoe@gmail.com",
    phone:"9876543210",
    github:"www.github.com/janedoe",
    linkedin:"www.linkedin.com/janedoe",
      }
    }
  });
  useEffect(()=>{
    localStorage.setItem("generalinfo",JSON.stringify(generalinfo))
  },[generalinfo]);
  let [educationinfo,seteducationinfo]=useState(()=>{
    let saved=localStorage.getItem("educationinfo");
    if(saved){
      return JSON.parse(saved);
    }
    else{
      return {
    collegename:"MIT",
    collegeyear:"2023-27",
    branch:"Bachelor of Engineering - BE, Computer Science Engineering ",
    schoolname:"DAV School",
    schoolyear:"2020-22",
    tenth:"X-93%",
    twelth:"XII-96%",
  }}});
   let [skillinfo,setskillinfo]=useState(
    `Languages: C++, MATLAB,C,Python\n
     Web Technologies: HTML5, CSS3, JavaScript, TailWind CSS,REST APIs, JSON,TypeScript\n
     Backend Development: Node.js, Express.js\n
     Database Management: PostgreSQL, SQL\n
     Frameworks & Libraries: React.js\n
     Embedded Systems: Arduino (Uno, ESP32), Embedded C\n
     Tools & Software: Arduino IDE, MATLAB, VS Code,Git,Github
     `);
     let [courseworkinfo,setcourseworkinfo]=useState(
      `Data Structures and Algorithms \n
       Database Management Systems\n
       Web Development \n
       Object-Oriented Programming
       `);
       let [projectinfo,setprojectinfo]=useState(
        `Weather App                                                                  https://github.com/anandb104/weather-app\n
\u2022Developed a weather forecasting web application using JavaScript, HTML, CSS, and Webpack, integrating the Visual Crossing Weather API to display real-time weather data and 3-day forecasts based on user-selected locations.
\u2022 Implemented asynchronous data fetching, dynamic DOM updates, and weather-condition-based visual indicators,providing an interactive user experience with responsive design and error handling.\n
Admin Dashboard                                                           https://github.com/anandb104/Admin-Dashboard \n
\u2022 Designed a responsive Admin Dashboard layout using CSS Grid and semantic HTML for structured page organization.
\u2022Created reusable UI components (navigation bar, cards, tables) using pure HTML and CSS with a clean, user-friendly design.\n 
\n \n \n \nThermal Printer Using Arduino  \n  
\u2022 Interfaced a thermal printer with Arduino to print text, sensor data, and custom messages using serial communication
\u2022 Implemented hardware connections, printing commands, and real-time data handling to achieve reliable standalone printing.\n
Mini Message Board                                                         https://github.com/anandb104/mini-message-board \n
\u2022 Built a full-stack Mini Message Board application using Node.js, Express.js, and PostgreSQL, allowing users to post and display messages dynamically through a clean web interface.
\u2022 Developed RESTful backend functionality with Express.js and PostgreSQL for efficient message handling, database storage, and real-time content rendering in the application.\n 
Smart Chess    \n
\u2022 Developed a Smart Chess system using Arduino Uno and LED matrix integration to visually display chess moves in real time, enabling interactive gameplay with illuminated move guidance.
\u2022 Integrated Raspberry Pi for Wi-Fi connectivity, remote online matches, and chess computation, enabling multiplayer gameplay and intelligent move processing through a connected smart chessboard system.
`);
  return (
      <div className="h-screen flex flex-col bg-black">
        <Header/>
        <div className="flex flex-1 overflow-hidden">
        <Sidebar generalinfo={generalinfo} setgeneralinfo={setgeneralinfo} educationinfo={educationinfo} seteducationinfo={seteducationinfo} setskillinfo={setskillinfo} skillinfo={skillinfo} courseworkinfo={courseworkinfo} setcourseworkinfo={setcourseworkinfo} projectinfo={projectinfo} setprojectinfo={setprojectinfo} />
        <Preview generalinfo={generalinfo} educationinfo={educationinfo} skillinfo={skillinfo} courseworkinfo={courseworkinfo} projectinfo={projectinfo}/>
        </div>
        <Footer/>
        </div>
  )
}
export default App 