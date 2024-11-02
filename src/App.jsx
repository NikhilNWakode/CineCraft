import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"


function App() {

  return (
   <div className=" flex  bg-[#1F1E24]">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>

   </div>
  )
}

export default App
