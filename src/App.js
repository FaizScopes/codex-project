import Home from "./components/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";  
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Safety from "./components/Safety";
import Application from "./components/Application";
import Add from "./components/Add";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home/>} /> {/*Main home page / landing page*/}
      <Route path="/signup" element={<Signup/>}/>  {/* Signup page */}
      <Route path="/login" element={<Login/>}/>  {/*Login page */}
      <Route path="/safety" element={<Safety/>}/>  {/*information page for safety and privacy*/}
      <Route path="/app" element={<Application/>}/>  {/*Main application once logged in*/}
      <Route path="/app/add" element={<Add/>}/>  {/*To add an order*/}
  



      
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
