import Comunicate from "./pages/home/Components/Comunicate/Comunicate";
import Home from "./pages/home/Components/Home";
import Login from "./pages/log in/Login";
import Tech from "./pages/technican/Technican";
import Tech2 from "./pages/tech2/Tech2";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <div>
        
    
       <Routes>
        <Route path= "/" element={<Home/>}/>
        
        <Route path= "/Comunicate" element={<Comunicate/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Tech" element={<Tech/>}/>
        <Route path="/Tech2" element={<Tech2/>}/>
        
       </Routes>
      
        
       
      </div>
       
      
    </div>
  );
}

export default App;
