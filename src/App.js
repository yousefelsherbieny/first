import Comunicate from "./pages/home/Components/Comunicate/Comunicate";
import Home from "./pages/home/Components/Home";
import Join from "./pages/join us/Join";
import Tech from "./pages/technican/Technican";
import Tech2 from "./pages/technican/Tech2";
import Client from "./pages/client/Client";
import { Route, Routes } from "react-router-dom";
import Client2 from "./pages/client/Client2";
import Log from "./pages/log/Log";
import VerificationCodeInput from "./pages/code/Code";
function App() {
  return (
    <div className="App">
      
      <div>
        
    
       <Routes>
        <Route path= "/" element={<Home/>}/>
        
        <Route path= "/Comunicate" element={<Comunicate/>}/>
        <Route path="/Join" element={<Join/>}/>
        <Route path="/Tech" element={<Tech/>}/>
        <Route path="/Tech2" element={<Tech2/>}/>
        <Route path="/Client" element={<Client/>}/>
        <Route path="/Client2" element={<Client2/>}/>
        <Route path="/Log" element={<Log/>}/>
         <Route path="/VerificationCodeInput" element={<VerificationCodeInput/>}/>
        
       </Routes>
      
        
       
      </div>
       
      
    </div>
  );
}

export default App;
