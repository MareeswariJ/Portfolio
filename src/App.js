import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./Pages/Home";

function App() {
  return(
   <BrowserRouter>
   <Navigation/>
   <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
