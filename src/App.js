import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import { ToastContainer } from "react-bootstrap";
import Home from "./Pages/Home";
import 'react-toastify/dist/ReactToastify.css'; 




function App() {
  return(
   <BrowserRouter>
   <Navigation/>
   <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
   <ToastContainer/>

   </BrowserRouter>
  )
}

export default App;
