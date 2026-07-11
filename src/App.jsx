import Sidebar from "./components/Sidebar.jsx"
import Header from "./components/Header.jsx"
import './index.css'
import Preview from "./components/Preview.jsx"
import Footer from "./components/Footer.jsx"
function App() {
  return (
      <div className="h-screen flex flex-col bg-black">
        <Header/>
        <div className="flex flex-1 overflow-hidden">
        <Sidebar/>
        <Preview/>
        </div>
        <Footer/>
        </div>
  )
}
export default App 