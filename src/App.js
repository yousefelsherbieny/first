import Home from "./pages/home/Components/Home";
import Join from "./pages/join us/Join";

import Tech2 from "./pages/technican/Tech2";
import Client from "./pages/client/Client";
import { Route, Routes } from "react-router-dom";

import Log from "./pages/log/Log";
import VerificationCodeInput from "./pages/code/Code";
import Congra from "./pages/congratulation/Congra";
import Passwordr from "./pages/passwordR/Passwordr";
import Passwordr2 from "./pages/passwordR2/Passwordr2";
import Passdone from "./pages/passwordDone/Passdone";
import HomeAfterLog from "./pages/homeAfterLog/HomeAfterLog";
import EditProfil from "./pages/editProfil/EditProfil";
import Search from "./pages/search/Search";
import Profil from "./pages/profil/Profil"
import "./App.css";
function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Join" element={<Join />} />

          <Route path="/Tech2" element={<Tech2 />} />
          <Route path="/Client" element={<Client />} />

          <Route path="/Log" element={<Log />} />
          <Route path="/Congra" element={<Congra />} />
          <Route path="/Passwordr" element={<Passwordr />} />
          <Route path="/Passwordr2" element={<Passwordr2 />} />
          <Route path="/Passdone" element={<Passdone />} />
          <Route path="/HomeAfterLog" element={<HomeAfterLog />} />
          <Route path="/EditProfil" element={<EditProfil />} />
          <Route path="/Profil" element={<Profil />} />

          <Route path="/Search" element={<Search />} />

          <Route
            path="/VerificationCodeInput"
            element={<VerificationCodeInput />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
