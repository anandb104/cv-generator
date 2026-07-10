import Sidebar from "./components/Sidebar.jsx"
import Header from "./components/Header.jsx"
import './index.css'
import Preview from "./components/Preview.jsx"
function App() {
  return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <div className="flex flex-1">
        <Sidebar/>
        <Preview/>
        </div>
        </div>
  )
}
export default App 