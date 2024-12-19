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
import Congra from "./pages/congratulation/Congra";
import Passwordr from "./pages/passwordR/Passwordr";
import Passwordr2 from "./pages/passwordR2/Passwordr2";
import Passdone from "./pages/passwordDone/Passdone";
import { useState } from "react";
function App() {
  const [formData,setFormData]=useState(null);
  const [Data,setData]=useState(null);
  return (
    <div className="App">
      
      <div>
        
    
       <Routes>
        <Route path= "/" element={<Home/>}/>
        
        <Route path= "/Comunicate" element={<Comunicate/>}/>
        <Route path="/Join" element={<Join/>}/>
        <Route path="/Tech" element={<Tech setData={setData}/>}/>
        <Route path="/Tech2" element={<Tech2 Data={Data}/>}/>
        <Route path="/Client" element={<Client setFormData={setFormData}/>}/>
        <Route path="/Client2" element={<Client2 formData={formData}/>}/>
        <Route path="/Log" element={<Log/>}/>
        <Route path="/Congra" element={<Congra/>}/>
        <Route path="/Passwordr" element={<Passwordr/>}/>
        <Route path="/Passwordr2" element={<Passwordr2/>}/>
        <Route path="/Passdone" element={<Passdone/>}/>
         <Route path="/VerificationCodeInput" element={<VerificationCodeInput/>}/>
        
       </Routes>
      
        
       
      </div>
       
      
    </div>
  );
}

export default App;
